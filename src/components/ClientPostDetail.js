import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ClientPostDetail = ({ post }) => {
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
            <span className="card-title">{post.title}</span>
          <p>{post.description}</p>
        </div>
        <div className="card-action">
          <Link to={`/post/${post.id}`}>
          <button  className="btn black">
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
