import React from "react";
import UserImg from "../../../assets/Home/user.svg";
import "./UserHeaderPhoto.scss";

const UserHeaderPhoto =()=>{
return (
    <div className="Container-img-user">
          <img src={UserImg} alt="userImg" />
        </div>
)
}
export default UserHeaderPhoto;