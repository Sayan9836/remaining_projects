import React, { useEffect } from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>£ VALUE</li>
        <li>100M</li>
        <li>90M</li>
        <li>80M</li>
        <li>70M</li>
        <li>60M</li>
      </ul>

      <div className="player_activity">
        <span>player activity</span>

        <div className="btn_wrapper">
          <div>Match</div>
          <div>Social</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
