const initState2 = {
  info:""
};

const singlePostReducer = (state = initState2, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_POST_SUCCESS':
      return {
        info: action.info,
      };
    default:
      return state;
  }
};

export default singlePostReducer;
