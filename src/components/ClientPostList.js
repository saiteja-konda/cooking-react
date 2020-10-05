import React from "react";
import {ClientPostDetail} from "./ClientPostDetail";
import { useSelector } from "react-redux";

export const ClientPostList = () => {
  const { postReducer } = useSelector(state => state)
  return (
    <div className="container">
      <div className="row">
        {postReducer.posts &&
          postReducer.posts.map((post) => <ClientPostDetail post={post} key={post.id} />)}
      </div>
    </div>
  );
}

