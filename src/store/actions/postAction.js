import axios from 'axios';

const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';


const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

const url = 'http://localhost:8080/post';

export const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
    info: 'Requesting Fetch posts',
    status: 'orange',
  };
};

export const fetchPostSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    info: 'Fetched posts Successfully',
    payload: posts,
    status: 'green',
  };
};

export const fetchPostFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    info: 'Fetched posts Failed',
    payload: error,
    status: 'red',
  };
};

export const addNewPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
    info: ' Requesting to add new post',
    status: 'orange',
  };
};
export const addNewPostSuccess = post => {
  return {
    type: ADD_POST_SUCCESS,
    info: 'Post added Successfully',
    status: 'green',
    payload: post,
  };
};
export const addNewPostFailure = error => {
  return {
    type: ADD_POST_FAILURE,
    info: 'Failed to add Post',
    status: 'red',
    payload: error,
  };
};
export const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
    info: 'Requesting to delete post',
    status: 'orange',
  };
};
export const deletePostSuccess = id => {
  return {
    type: DELETE_POST_SUCCESS,
    info: 'Deleted post Successfully',
    status: 'green',
    payload: id,
  };
};
export const deletePostFailure = error => {
  return {
    type: DELETE_POST_FAILURE,
    info: 'Failed to delete post',
    status: 'red',
    payload: error,
  };
};
export const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest());

    axios
      .get(url)
      .then(response => {
        const posts = response.data.map(post => post);
        dispatch(fetchPostSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};

export const addPost = post => {
  return function (dispatch) {
    dispatch(addNewPostRequest());
    axios
      .post(url, post)
      .then(res => {
        dispatch(addNewPostSuccess(res.data));
      })
      .catch(error => {
        dispatch(addNewPostFailure(error.response.data));
      });
  };
};
export const deletePost = id => {
  return function (dispatch) {
    dispatch(deletePostRequest());
    axios
      .delete(`http://localhost:8080/post/${id}`)
      .then(res => {
        dispatch(deletePostSuccess(id));
      })
      .catch(err => {
        dispatch(deletePostFailure(err.response.data));
      });
  };
};

// const ADD_POST = 'ADD_POST';
// const DELETE_POST = 'DELETE_POST';
// export const deletePost = id => {
//   return { type: DELETE_POST, payload: id };
// };

// export const addPost = post => {
//   return { type: ADD_POST, payload: post };
// };
