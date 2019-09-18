import React, { useState } from 'react';
import { animated } from 'react-spring';

const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Store</a>
      <a href="#">Tutorials</a>
    </animated.div>
  );
}
export default Nav;