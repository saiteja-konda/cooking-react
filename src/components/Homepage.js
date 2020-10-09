import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';
import { ClientPostList } from './ClientPostList';
import MyCarousel from './carousel';
import SocialMedia from './socialMedia';
import { BackTop } from 'antd';
import  Nav  from './nav';
import Footer from './footer';


export const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });
  return (
    <div>
      <Nav/>
      <MyCarousel />
      <BackTop />
      <strong className="site-back-top-basic" />
      <div className="container mycontainer">
        <div className="row ">
          <div className="col-md-8">
            <h3>NEWS</h3>
            <hr className="hr6" />
            <ClientPostList />
            <h3 className="controller"> TRENDING</h3>
            <hr className="hr7" />
            <ClientPostList />
          </div>
          <div className="col-md-4">
            <h3>LATEST</h3>
            <hr className="hr8" />
            <div className="scroll">
              <ClientPostList />
              <BackTop />
            </div>
            <div>
              <h3>SPOTIFY PLAYLIST</h3>
              <hr className="hr9" />
              <iframe
                title="This is a unique title"
                className="spotify-frame"
                src="https://open.spotify.com/embed/playlist/3ehtiZyniZjVSs9Tv5BwCl"
                height="380"
                width="350"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div>
              <h3 className="controller">FIND US</h3>
              <hr className="hr10" />
              <div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};
