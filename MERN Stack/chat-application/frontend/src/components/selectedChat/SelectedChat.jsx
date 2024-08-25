import React, { useState } from "react";
import "./SelectedChat.css";
import "../../App.css";
import { useEffect } from "react";
import { socket } from "../../socket";
let timer;
const SelectedChat = ({ currselectedchat, isOpen, currUser }) => {
  const [existingChat, setExistingChat] = useState([]);
  const [currText, setCurrText] = useState("");
  const [chatId, setChatId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    console.log("socket", socket);
    socket.emit("start conversation", {
      to: currselectedchat._id,
      from: currUser._id,
    });

    socket.on("conversation started", (prev_chat) => {
      console.log("conversation started", existingChat);
      setExistingChat(prev_chat.existing_chat.messages);
      setChatId(prev_chat.existing_chat._id);
    });

    return () => {
      socket.off("start conversation");
      socket.off("text message");
    };
  }, [currselectedchat]);

  useEffect(() => {
    socket.on("new_message", (msg) => {
      setExistingChat((prev) => [...prev, msg.message]);
      console.log("new_message received", msg);
    });

    socket.on("friend typing", () => {
      setIsTyping(true);
    });

    socket.on("friend stop typing", () => {
      setIsTyping(false);
    });

    return () => {
      socket.off("new_message");
      socket.off("friend typing");
      socket.off("friend stop typing");
    };
  }, [socket]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("curruser=> ", currUser);

    const messageObj = {
      from: currUser._id,
      to: currselectedchat._id,
      text: currText,
      roomId: chatId,
    };

    console.log(messageObj);

    socket.emit("text message", { messageObj });
  };

  const handleChange = (e) => {
    setCurrText(e.target.value);
    socket.emit("start typing", { to: currselectedchat._id });

    clearTimeout(timer);
    timer = setTimeout(() => {
      socket.emit("stop typing", { to: currselectedchat._id });
      console.log("typing stoped");
    }, 500);
  };

  const handleStopTyping = () => {
    console.log("stop typing outside");

    clearTimeout(timer);
    timer = setTimeout(() => {
      socket.emit("stop typing", { to: currselectedchat._id });
      console.log("typing stoped");
    }, 2000);
  };
  return (
    <div className="wrapper">
      {isOpen ? (
        <>
          <header>{currselectedchat.username}</header>
          {isTyping && <span>...Typing</span>}
          <div className="chat_container">
            {existingChat?.map((chat) => {
              return (
                <div className="each_msg">
                  <div
                    style={{
                      right: chat.to === currUser._id && "0",
                      left: chat.from === currUser._id && "0",
                    }}
                  >
                    {chat.text}
                  </div>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              value={currText}
              type="text"
              onChange={handleChange}
              // onKeyUp={handleStopTyping}
            />
            <button>send</button>
          </form>
        </>
      ) : (
        <h1>no chat opened</h1>
      )}
    </div>
  );
};

export default SelectedChat;
