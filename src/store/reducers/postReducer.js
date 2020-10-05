const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case 'ADD_POST_SUCCESS':
      return {
        posts: [action.payload, ...state.posts],
      };
    case 'DELETE_POST_SUCCESS':
      const newPost = state.posts.filter(post => post.id !== action.payload);
      return {
        posts: newPost,
      };
    default:
      return state;
  }
};

export default postReducer;
