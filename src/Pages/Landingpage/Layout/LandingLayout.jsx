/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

const LandingLayout = ({ children }) => {
  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={layoutStyle}>
      <AnimatedBackground animationName='cosmicDust' blendMode='normal' />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default LandingLayout;
