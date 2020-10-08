import React from 'react';
import { Input } from 'antd';
import TwitterFeed from './twitter-feed';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubscriber } from '../store/actions/postAction';

const Footer = () => {
  const dispatch = useDispatch();

  const [subscriber, setSubscriber] = useState({
    name: '',
    email: '',
  });
  function handleChange(e) {
    setSubscriber({ ...subscriber, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    dispatch(addSubscriber(subscriber));
    e.preventDefault();
    console.log(subscriber);
    setSubscriber({
      name: '',
      email: '',
    });
  }
  return (
    <div>
      <div className=" footer top">
        <div className="threediv">
          <div className="container innerdiv">
            <div>
              <h5>TWITTER FEED</h5>
              <hr />
              <TwitterFeed />
            </div>
          </div>
          <div className="container innerdiv">
            <h5>INSTAGRAM PHOTOS</h5>

            <hr />
          </div>
          <div className="container innerdiv">
            <h5>NEWSLETTER</h5>
            <hr />
            <form onSubmit={handleSubmit}>
              <Input name="name" onChange={handleChange} value={subscriber.name} placeholder="Name" />
              <Input name="email" onChange={handleChange} value={subscriber.email} placeholder="Email" />
              <button className="btn btn-dark btn-block sub"> Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer bottom">
        <h1 className="Logo">Athena Networks</h1>
        <hr className="hr" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <li className="copyright">Copyright saiteja All rights reserved</li>
      </div>
    </div>
  );
};

export default Footer;
