import React from 'react';
import "./post.css";

import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/alex.jpg" alt="" />
                        <span className="postUsername">Afif Zuhair</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey, it's my first post!</span>
                    <img className="postImg" src="assets/post/1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="postIcon" htmlColor="darkblue"/>
                        <Favorite className="postIcon" htmlColor="red"/>
                        <span className="postLikeCounter">22 poeple like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
