import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import readingTime from 'reading-time';

export const ClientPostDetail = ({ post }) => {
  const stats = readingTime(post.content);
  return (
    <div>
      <div className="post-detail">
        <img src={post.thumbnailImageUrl} className="post-thumbnail"/>
        <span className="h">{post.title}</span>
        <h6 className="date"> Published on {post.postedOn}</h6>
        <p>{post.description}</p>
      </div>
      <div className="comps">
        <ul>
          <li className="Reading-time">{stats.text}</li>
          {/* <li>{post.totalComments}</li>
          <li>{post.likes}</li> */}
          <li><img src="https://img.icons8.com/fluent-systems-filled/12/000000/visible.png"/></li>
          <li style={{ }}>{post.views}</li>
        </ul>
      </div>
    </div>
  );
};

{
  /* <Link to={`/post/${post.id}`}>
<button className="btn black">Read More</button>
</Link> */
}
