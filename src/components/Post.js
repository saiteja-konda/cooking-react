import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';
import ReactMarkdown from 'react-markdown';

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
        </section>
        <hr />
        <div>
          <h6>comments</h6>
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
