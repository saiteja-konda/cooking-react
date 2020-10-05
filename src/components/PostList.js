import React from "react";
import {PostDetail} from "./PostDetail";
import { useSelector } from "react-redux";

export const PostList = () => {
  const { postReducer } = useSelector(state => state)
  return (
    <div className="container">
      <div className="row">
        {postReducer.posts &&
          postReducer.posts.map((post) => <PostDetail post={post} key={post.id} />)}
      </div>
    </div>
  );
}

