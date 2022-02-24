import React from 'react';
import './topbar.css'

import { Link } from 'react-router-dom';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';

export default function TopBar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Fasta Social</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input type="text" placeholder='Search friends' className="searchInput" />
                </div>
            </div>
            <div className='topbarRight'>
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/alex.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    );
};
