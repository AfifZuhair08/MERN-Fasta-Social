import React from 'react';
import "./home.css";

import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/topbar/Topbar';

export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    );
};
