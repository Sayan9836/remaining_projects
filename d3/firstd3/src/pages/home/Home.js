import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Main from "../../components/main/Main";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
