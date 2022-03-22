import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./feed.css";

import Post from '../post/Post';
import Share from '../share/Share';

export default function Feed({ username }) {

  const [posts, setPosts] = useState([]);

  // array as dependancy, 
  // empty means render only one time
  // if one dependancy, it will take effect of rendering the components
  useEffect(() => {

    const fetchPosts = async () => {
      const res = username ?
        await axios.get("/post/profile/" + username) :
        await axios.get("/post/timeline/61b36d9dd0a76b937914ccd7");
      setPosts(res.data);
      console.log(res.data)
    };

    fetchPosts();
  }, [username]);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map((post, i) =>
          <Post key={i} post={post} />
        )}
      </div>
    </div>
  )
}
