import React from 'react';
import "./rightbar.css";

export default function RightBar({ profile }) {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const friendCardList = () => (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="assets/person/alex.jpg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">John Dead</span>
    </li>
  )
  
  const HomeRightBar = () => (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src={`${PF}icons/icon_birthdaycake.png`} alt="" />
        <span className="birthdayText">
          <b>Amir</b> and
          <b> 3 other friends </b>
          have a birthday today
        </span>
      </div>
      <div>
        <img className="rightbarAd" src={`${PF}advertise/burgerkingad.jpg`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <>
            {friendCardList()}
            {friendCardList()}
            {friendCardList()}
          </>
        </ul>
      </div>
    </>)

  const ProfileRightBar = () => (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Kuala Lumpur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Melaka</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Married</span>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/alex.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George W.</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/alex.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George W.</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/alex.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George W.</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/alex.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George W.</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/alex.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">George W.</span>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}