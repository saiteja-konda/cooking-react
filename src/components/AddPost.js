import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, fetchPosts } from '../store/actions/postAction';
import { PostList } from './PostList';

export const AddPost = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    content: '',
    categoryId: 1,
  });
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch( fetchPosts());
  }, [dispatch]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost(post));
    setPost({
      title: '',
      description: '',
      content: '',
      categoryId: 1,
    });
  };

  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h5 className="blue-text center-align">Admin</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input onChange={handleChange} value={post.title} type="text" name="title" />
        </div>
        <div className="input-field">
          <label htmlFor="post_title">Description</label>
          <input onChange={handleChange} value={post.description} type="text" name="description" />
        </div>
        <div className="input-field">
          <label htmlFor="post_content">Content</label>
          <textarea onChange={handleChange} value={post.content} name="content" className="materialize-textarea"></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
      <PostList/>
    </div>
  );
};
