import { useSelector } from 'react-redux';

function test() {
  const { postReducer } = useSelector(state => state);
  const id = 2;
  let selectedPost = postReducer.posts.find(post => post.id == id);

  const updatedPost = state.posts.filter(post => post.id == id);
  //selected post's comments obj
  const obj = updatedPost.comments;
  //comment from payload obj2
  const obj2 = action.payload.updatedComment;
  // obj + obj2 = sObj
  const sObj = { ...obj, ...obj2 };
  return sObj;
  updatedPost.comments = sObj;
  state.posts.pop(action.payload.id);
  const newState = state.posts.push(updatedPost);
}
test();
