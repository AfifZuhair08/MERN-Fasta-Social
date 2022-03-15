import React, { useEffect, useState } from 'react';
import "./post.css";

import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material';
import axios from 'axios';
import { format } from "timeago.js"
import { Link } from 'react-router-dom';

export default function Post({ post }) {

    const { likes, userID, description, createdAt } = post;

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const { profilePicture, username } = user;

    const likePostHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?userID=${userID}`);
            setUser(res.data);
        };
        fetchUser();
    }, [userID]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${username}`}>
                            <img
                                className="postProfileImg"
                                src={`${PF}person/${profilePicture || "placeholder-person.jpg"}`}
                                alt=""
                            />
                        </Link>
                        <span className="postUsername">{username}</span>
                        <span className="postDate">{format(createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{description}</span>
                    <img className="postImg" src={`${PF}post/1.jpg`} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="postIcon" htmlColor="darkblue" onClick={likePostHandler} />
                        <Favorite className="postIcon" htmlColor="red" />
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
