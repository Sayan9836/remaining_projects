import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000";

let socket;
const soketConnect = function (user_id) {
  socket = io(URL, {
    autoConnect: false,
    query: { userId: user_id },
  });
  socket;
};

export { socket, soketConnect };
