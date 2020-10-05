import { combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import singlePostReducer from './reducers/singlePostReducer'
const rootReducer = combineReducers({
   postReducer,
   singlePostReducer,
});

export default rootReducer;
