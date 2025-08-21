import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>Your Library</span>
        <button className="create-btn">+ Create</button>
      </div>

      <div className="sidebar-card">
        <h4>Create your first playlist</h4>
        <p>It’s easy, we’ll help you</p>
        <button className="pill-btn">Create playlist</button>
      </div>

      <div className="sidebar-card">
        <h4>Let’s find some podcasts to follow</h4>
        <p>We’ll keep you updated on new episodes</p>
        <button className="pill-btn">Browse podcasts</button>
      </div>
    </div>
  );
}

export default Sidebar;
