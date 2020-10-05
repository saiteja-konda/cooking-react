import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';

export const Post = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { id } = props.match.params;
  const { postReducer } = useSelector(state => state);
// eslint-disable-next-line
  let selectedPost = postReducer.posts.find(post => post.id == id);
  const [post,] = useState(selectedPost);

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
        <div>
          <h6>comments</h6>
          {post.comments?.map(comment => (
            <div>
              <h6>{comment.commentor}</h6>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { PostDetail } from './PostDetail';

// export const Post = props => {
//   const { postReducer } = useSelector(state => state);
//   return (
//       <div className="container">
//       <div className="row">
//           {postReducer.posts &&
//           postReducer.posts.map(post => <PostDetail post={post} key={post.id} />)}
//           </div>
//     </div>
//   );
// };

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchPost(id));
//   }, [dispatch,id]);
