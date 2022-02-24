import React from 'react';
import "./profile.css";

import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/topbar/Topbar';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}post/1.jpg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/alex.jpg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Alex Hammond</h4>
                            <span className="profileInfoDesc">I'm a Social Manager</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
