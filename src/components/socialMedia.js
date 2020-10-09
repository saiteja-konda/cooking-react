import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <ul className="follow">
      <Link to="/">
        <li className="Facebook">
          <img src="https://img.icons8.com/fluent/55/000000/facebook-new.png" alt="Facebook" />
        </li>
      </Link>
      <Link to="/">
        <li className="Twitter">
        <img src="https://img.icons8.com/color/55/000000/twitter-circled.png" alt="Twitter"/>       
         </li>
      </Link>
      <Link to="/">
        <li className="Instagram">
          <img src="https://img.icons8.com/fluent/55/000000/instagram-new.png" alt="Instagram" />
        </li>
      </Link>
      <Link to="/">
        <li className="MixCloud">
          <img src="https://img.icons8.com/windows/55/000000/mixcloud.png" alt="MixCloud" />
        </li>
      </Link>
      <Link to="/">
        <li className="SoundCloud">
          <img src="https://img.icons8.com/color/55/000000/soundcloud.png" alt="SoundCloud" />
        </li>
      </Link>
      <Link to="/">
        <li className="Spotify">
          <img src="https://img.icons8.com/fluent/55/000000/spotify.png" alt="Spotify" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialMedia;
