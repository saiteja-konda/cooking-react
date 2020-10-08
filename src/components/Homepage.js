import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';
import { ClientPostList } from './ClientPostList';
import MyCarousel from './carousel';
import { Layout } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
export const Homepage = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });
  return (
    <div>
      <MyCarousel />
      <div className="container mycontainer">
        <div className="test ">
          <div class="col-8 ">
            <h3>NEWS</h3>
            <hr className="hr6" />
            <ClientPostList />
            <h3 className="controller"> TRENDING</h3>
            <hr className="hr7" />
            <ClientPostList />
          </div>
          <div class="col-4 ">
            <h3>LATEST</h3>
            <hr className="hr8" />
            <div>
              <h3>SPOTIFY PLAYLIST</h3>
              <hr className="hr9" />
              <iframe
                className="spotify-frame"
                src="https://open.spotify.com/embed/playlist/3ehtiZyniZjVSs9Tv5BwCl"
                height="380"
                width ='345'
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div>
              <h3 className="controller">FOLLOW US</h3>
              <hr className="hr10" />
              <div>
                <ul className="follow">
                  <li>
                    <FacebookOutlined />
                  </li>
                  <li>Facebook</li>
                  <li>Facebook</li>
                  <li>Facebook</li>
                  <li>Facebook</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
