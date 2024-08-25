import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import SelectedChat from "../selectedChat/SelectedChat";
import { soketConnect, socket } from "../../socket";
import "./Home.css";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currselectedchat, setcurrselectedchat] = useState("");
  const [currUser, setCurrUser] = useState("");

  useEffect(() => {
    const currUser = JSON.parse(localStorage.getItem("user"));
    setCurrUser(currUser);
    console.log("home.jsx");

    if (!socket?.connected) {
      soketConnect(currUser._id);
      socket.connect();
    } else {
      console.log("home", socket);
    }

    socket.on("connect", (data) => {
      console.log("connected=> ", data);
    });

    return () => {
      socket.disconnect();
      socket.on("disconnect", (data) => {
        console.log("disconnect=> ", data);
      });
    };
  }, []);
  return (
    <div className="wrapper">
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setcurrselectedchat={setcurrselectedchat}
        currUser={currUser}
      />
      <SelectedChat
        currselectedchat={currselectedchat}
        isOpen={isOpen}
        currUser={currUser}
      />
    </div>
  );
};

export default Home;
