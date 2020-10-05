import React from 'react';
import { useSelector } from 'react-redux';

export const Post = props => {
  const { id } = props.match.params;
  const { postReducer } = useSelector(state => state);
  const post = postReducer.posts.filter(p => {
    return p.id === id;
  });
  console.log(post);
  return (
    <div className="container">
      <div className="row">
        <h1>{post.title}</h1>
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
