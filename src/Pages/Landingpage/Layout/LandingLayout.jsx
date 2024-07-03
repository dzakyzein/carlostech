/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const LandingLayout = ({ children }) => {
  const layoutStyle = {
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={layoutStyle}>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default LandingLayout;
