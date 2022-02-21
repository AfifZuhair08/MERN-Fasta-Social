import React from 'react';
import "./rightbar.css";

export default function RightBar() {

  const friendCardList = () => (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/alex.jpg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">John Dead</span>
    </li>
  )

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/icons/icon_birthdaycake.png" alt="" />
          <span className="birthdayText">
            <b>Amir</b> and
            <b> 3 other friends </b>
            have a birthday today
          </span>
        </div>
        <div>
          <img className="rightbarAd" src="assets/advertise/burgerkingad.jpg" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <>
              {friendCardList()}
              {friendCardList()}
              {friendCardList()}
            </>
          </ul>
        </div>
      </div>
    </div>
  )
}