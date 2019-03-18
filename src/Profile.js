
import React from "react";
// import "./ProfileCard.css";

const Profile = ({ url, userName }) => (
  <span>
    <img className="ui avatar image" src={url} alt="profile" /> {userName}
    <br/>
  </span>
);

export default Profile;
