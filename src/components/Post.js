import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export const Post = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { id } = props.match.params;
  const { postReducer } = useSelector(state => state);
  // eslint-disable-next-line
  let selectedPost = postReducer.posts.find(post => post.id == id);
  const [post] = useState(selectedPost);
  const [like, setLike] = useState(post.likes);
  const handleLike = () => {
    axios
      .get(`http://localhost:8080/like/${id}`)
      .then(res => {
        setLike(like + 1);
        // console.log(res);
      })
      .catch(err => {
        setLike(like - 1);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <h1>{post.title}</h1>
        <h6>{post.postedOn}</h6>
        <div>
          <h6>Tags</h6>
          {post.tags?.map(tag => (
            <button>{tag.name}</button>
          ))}
        </div>
        <hr />
        <section>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <button onClick={handleLike}>Like</button>
        </section>
        <hr />
        <div>
          <h6>comments {post.totalComments}</h6>
          <span> Likes {like}</span>
          {post.comments?.map(comment => (
            <div>
              <h6>{comment.commentor}</h6>
              <p>{comment.comment}</p>
              <p>{comment.commentedOn}</p>
              <div>
                {comment.replies?.map(reply => (
                  <div>
                    <p>{reply.reply}</p>
                    <p>{reply.repliedBy}</p>
                    <p>{reply.repliedOn}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Post;
