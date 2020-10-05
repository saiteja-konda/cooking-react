import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../store/actions/postAction';

// import {AddPost} from './AddPost';
import { ClientPostList } from './ClientPostList';

export const Homepage = () => {
  const [keywoard, setKeyword] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch( search(keywoard));
    console.log('submited');
  }
  return (
    <>
      {/*<AddPost />*/}
      <div className="input-field">
        {/* <label htmlFor="Search">Search</label> */}
        <input type="text" value={keywoard} onChange={ (e) => setKeyword(e.target.value)} placeholder="Enter keywoard" />
        <button className="btn blue" type="submit" onClick={handleSearch}>search</button>
      </div>
      <ClientPostList />
    </>
  );
};
