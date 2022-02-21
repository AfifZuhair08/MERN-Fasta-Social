import React from 'react';
import "./sidebar.css";

import { RssFeed } from '@mui/icons-material';

export default function SideBar() {

  const friendList = () => (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="/assets/person/alex.jpg" alt="" />
      <span className="sidebarFriendName">John Doe</span>
    </li>
  );

  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Qustions
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <>
            {friendList()}
            {friendList()}
            {friendList()}
            {friendList()}
            {friendList()}
          </>
        </ul>
      </div>
    </div>
  )
}
