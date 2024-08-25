const mongoose = require("mongoose");
const app = require("./app");
const { Server } = require("socket.io");
const path = require("path");
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
require("dotenv").config();
const http = require("http");
const User = require("./models/user");
const FriendRequest = require("./models/friendRequest");
const OneToOneMessages = require("./models/OneToOneMessage");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const DB = process.env.DBURI.replace("<password>", process.env.DBPASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true, // The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Succesfully"))
  .catch((error) => console.log(error?.message || "db not connected"));
const port = process.env.PORT || 6000;
server.listen(port, () => console.log(`server started on port ${port}`));

io.on("connection", async (socket) => {
  const user_id = socket.handshake.query["user_id"];
  const socket_id = socket.id;
  console.log(`User connected ${socket_id}`);
  if (Boolean(user_id)) {
    await User.findByIdAndUpdate(user_id, { socket_id, status: "Online" });
  }
  console.log(user_id);

  // socket listners

  socket.on("friend_request", async (data) => {
    const to = await User.findById(data.to).select("socket_id");
    const from = await User.findById(data.from).select("socket_id");

    // create a friend request
    await FriendRequest.create({
      sender: data.from,
      recipient: data.to,
    });
    // emit event request received to recipient
    io.to(to?.socket_id).emit("new_friend_request", {
      message: "New friend request received",
    });
    io.to(from?.socket_id).emit("request_sent", {
      message: "Request Sent successfully!",
    });
  });

  socket.on("accept_request", async (data) => {
    console.log(data);

    const request_doc = await FriendRequest.findById(data.request_id);
    console.log(request_doc);

    const sender = await User.findById(request_doc.sender);
    const reciever = await User.findById(request_doc.recipient);

    sender.friends.push(request_doc.recipient);
    reciever.friends.push(request_doc.sender);

    await reciever.save({ new: true, validateModifiedOnly: true });
    await sender.save({ new: true, validateModifiedOnly: true });

    await FriendRequest.findByIdAndDelete(data.request_id);

    io.to(sender.socket_id).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
    io.to(reciever.socket_id).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
  });

  socket.on("get_direct_conversations", async ({ user_id }, callback) => {
    const existing_conversations = await OneToOneMessages.find({}).populate(
      "participants",
      "firstName lastName _id email status",
    );

    console.log(existing_conversations);

    callback(existing_conversations);
  });

  socket.on("start_conversation", async (data) => {
    const { to, from } = data;

    const existing_conversation = await OneToOneMessages.find({
      paricipants: { size: 2, $all: [to, from] },
    });

    console.log(existing_conversation[0], "existing conversation");

    if (existing_conversation.length === 0) {
      let new_chat = await OneToOneMessages.create({
        paricipants: [to, from],
      });
      new_chat = await OneToOneMessages.findById(new_chat._id).populate(
        "partipants",
        "firstName lastName _id email status",
      );
      console.log(new_chat);
      socket.emit("start_chat", new_chat);
    } else {
      socket.emit("start_chat", existing_conversation[0]);
    }
  });

  // socket.on("get_messages", async (data, callback) => {
  //     console.log(data,"not present");
  //     const { messages } = await OneToOneMessages.findById(data.conversation_id)
  //         .select("messages");
  //     callback(messages);
  // })

  socket.on("text_message", async (data) => {
    console.log("Recieved Message", data);

    const { to, from, message, conversation_id, type } = data;

    const to_user = await User.findById(to);
    const from_user = await User.findById(from);
    const new_message = {
      to,
      from,
      type,
      text: message,
      created_at: Date.now(),
    };

    const chat = await OneToOneMessages.findById(conversation_id);
    chat.message.push(new_message);
    await chat.save();

    // emit new_message -> to user
    io.to(
      to_user.socket_id.emit("new_message", {
        conversation_id,
        message: new_message,
      }),
    );

    // emit new_message -> from user

    io.to(
      from_user.socket_id.emit("new_message", {
        conversation_id,
        message: new_message,
      }),
    );
  });

  socket.on("file_message", (data) => {
    console.log("Recieved Message", data);

    const fileExtension = path.extname(data.file.name);

    const fileName = `${Date.now()}_${Math.random() + 10000}${fileExtension}`;
  });

  socket.on("end", async (data) => {
    if (data.user_id) {
      await User.findByIdAndUpdate(data.user_id, { status: "Offline" });
    }
    //TODO : user disconnect broadcast
    console.log("closing connection");
    socket.disconnect(0);
  });
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
