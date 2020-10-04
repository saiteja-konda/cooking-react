import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../store/actions/postAction';
export const Post = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch,id]);

  return <div>{/* <p>{post.id}</p> */}</div>;
};

export default Post;
