import express from "express";
import http from "http";
import { Server } from "socket.io";
import { OneToOneMessage } from "./model/OneToOneMessage.js";
import { User } from "./model/User.js";
import userRoutes from "./routes/users.routes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: true,
  },
});

await mongoose
  .connect("mongodb://localhost:27017/CHATDB")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err?.message, "database not connected"));

io.on("connection", async (socket) => {
  console.log("a user connected");
  const user_id = socket.handshake.query["userId"];

  console.log(user_id);

  const user = await User.findByIdAndUpdate(
    user_id,
    {
      $set: {
        socketId: socket.id,
        status: "Online",
      },
    },
    { new: true },
  );

  socket.on("start conversation", async (data) => {
    console.log(data);
    const { to, from } = data;

    const existing_chat = await OneToOneMessage.findOne({
      participants: { $size: 2, $all: [to, from] },
    });

    if (!existing_chat) {
      const new_chat = await OneToOneMessage.create({
        participants: [to, from],
      });

      socket.emit("conversation started", { new_chat });
    } else {
      socket.emit("conversation started", { existing_chat });
    }
  });

  socket.on("text message", async (data) => {
    // roomId ==> mongoDB object Id
    console.log(data);
    const { from, to, text, roomId } = data.messageObj;

    const message = {
      from,
      to,
      text,
    };

    console.log("called3");

    const from_user = await User.findById(from);
    const to_user = await User.findById(to);

    const chat = await OneToOneMessage.findByIdAndUpdate(
      roomId,
      {
        $push: { messages: message },
      },
      {
        new: true,
      },
    );

    console.log("called4");
    console.log(chat);

    // emit event to to_user
    io.to(to_user?.socketId).emit("new_message", { roomId, message });
    // emit event to from_user
    io.to(from_user?.socketId).emit("new_message", { roomId, message });
  });

  socket.on("start typing", async (data) => {
    const { to } = data;

    console.log(to);

    const to_user = await User.findById(to);

    io.to(to_user?.socketId).emit("friend typing", { to_user });
  });

  socket.on("stop typing", async (data) => {
    const { to } = data;

    console.log("stop=> ", to);

    const to_user = await User.findById(to);

    io.to(to_user?.socketId).emit("friend stop typing", { to_user });
  });
});

//routes

app.use("/api/vi/user", userRoutes);

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
