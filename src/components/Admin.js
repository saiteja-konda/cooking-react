import React from 'react';
export const Admin = (props) => {
  return (
    <div className=" A">
      <div className="row">
        <div className="col-md-2 side-bar">
          <div className="side-bar-content">
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="col-md-10 content-area">
          <div>
            <h3>Content</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
