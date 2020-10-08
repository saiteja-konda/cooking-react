import React from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const MyCarousel = () => {
  const { postReducer } = useSelector(state => state);
  return (
    <Carousel autoplay>
      {postReducer.posts.map(post => (
        <div className="car" key={post.id}>
          <img className="car-image" src={post.imageUrl} atl={post.title} />
          <h1 className="car-text heading">{post.title}</h1>
          {/* <p className="car-text sub-heading" style={{  }}>
            {post.description}
          </p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;

// <div>
// <h3 style={contentStyle}>One</h3>
// </div>
// <div>
// <h3 style={contentStyle}>Two</h3>
// </div>
// <div>
// <h3 style={contentStyle}>Three</h3>
// </div>
// <div>
// <h3 style={contentStyle}>Four</h3>
// </div>
