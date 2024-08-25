import React, { useEffect, useState } from "react";
import "./SideBar.css";
const SideBar = ({ setIsOpen, setcurrselectedchat }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    let response = await fetch("http://localhost:5000/api/vi/user/getallusers");

    if (response.ok) {
      response = await response.json();
      console.log(response.users);
      setUsers(response.users);
    } else {
      console.log("error wile fettching user");
    }
  };

  const handleSelectChat = (user) => {
    setIsOpen(true);
    setcurrselectedchat(user);
    console.log(user);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRight: "10px solid gray",
      }}
    >
      {users?.map((user) => {
        return (
          <div
            style={{ border: "1px solid red", padding: "2rem 0.5rem" }}
            onClick={() => handleSelectChat(user)}
          >
            {user.username}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
