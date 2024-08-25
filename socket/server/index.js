import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(8000, () => {
  console.log("server started!");
});

io.on("connection", async (socket) => {
  console.log("user connected =>", socket.id);

  socket.on("message", ({ message, room }) => {
    console.log(message, room);
    socket.to(room).emit("recieve-message", message);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected!", socket.id);
  });

  socket.on("join-room", (room) => {
    console.log(`user has joined ${room} room `);
    socket.join(room);
  });

  socket.on("user-typing", (room) => {
    socket.to(room).emit("counterPart_typing");
  });
});
