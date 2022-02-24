import React, { useState } from 'react';
import "./post.css";

import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';

export default function Post() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const likePostHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={`${PF}person/alex.jpg`} alt="" />
                        <span className="postUsername">Afif Zuhair</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey, it's my first post!</span>
                    <img className="postImg" src={`${PF}post/1.jpg`} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="postIcon" htmlColor="darkblue" onClick={likePostHandler}/>
                        <Favorite className="postIcon" htmlColor="red"/>
                        <span className="postLikeCounter">{like} poeple like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
