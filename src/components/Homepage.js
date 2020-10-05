import React from 'react';
import Nav from './nav';
// import {AddPost} from './AddPost';
import {ClientPostList} from './ClientPostList';

export const Homepage = () => {
  return (
    <>
      {/*<AddPost />*/}
      <Nav/>
      <ClientPostList />
    </>
  )
}
