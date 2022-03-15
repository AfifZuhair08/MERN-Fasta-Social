import React, { useEffect, useState } from 'react';
import "./profile.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/topbar/Topbar';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const params = useParams();

    const [user, setUser] = useState({});
    const { username, desc, profilePicture, coverPicture } = user;

    useEffect(() => {
        // reset window scroll position
        window.scrollTo(0, 0);
        
        const fetchUser = async () => {
            const res = await axios.get(`/user?username=${params.username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [params.username]);

    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}post/1.jpg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/${profilePicture || "placeholder-person.jpg"}`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{username}</h4>
                            <span className="profileInfoDesc">{desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={params.username}/>
                        <RightBar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
