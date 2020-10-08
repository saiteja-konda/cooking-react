import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Container } from 'react-bootstrap';

export const ClientPostDetail = ({ post }) => {
  return (
    <div className="">
      <div className="">
        <span className=" h">{post.title}</span>
        <p>{post.description}</p>
      </div>
      <div className="card-action">
        <Link to={`/post/${post.id}`}>
          <button className="btn black">Read More</button>
        </Link>
      </div>
    </div>
  );
};
