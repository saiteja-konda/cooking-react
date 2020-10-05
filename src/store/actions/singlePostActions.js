import axios from 'axios';
const FETCH_SINGLE_POST_REQUEST = 'FETCH_SINGLE_POST_REQUEST';
const FETCH_SINGLE_POST_SUCCESS = 'FECTH_SINGLE_POST_SUCCESS';
const FETCH_SINGLE_POST_FAILURE = 'FECTH_SINGLE_POST_FAILUR';

const url = 'http://localhost:8080/post';

export const fetchSinglePostRequest = () => {
  return {
    type: FETCH_SINGLE_POST_REQUEST,
    info: `Requesting to fetch post`,
    status: 'orange',
  };
};
export const fetchSinglePostSuccess = post => {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    info: `Post fetched successfully`,
    payload: post,

    status: 'green',
  };
};
export const fetchSinglePostFailure = error => {
  return {
    type: FETCH_SINGLE_POST_FAILURE,
    info: 'failed to fetch post',
    payload: error,
    status: 'red',
  };
};

export const fetchPost = id => {
  return function (dispatch) {
    dispatch(fetchSinglePostRequest(id));

    axios
      .get(url + `/${id}`)
      .then(res => {
        const post = res.data;
        dispatch(fetchSinglePostSuccess(post));
      })
      .catch(err => {
        dispatch(fetchSinglePostFailure(err.response.data));
      });
  };
};
