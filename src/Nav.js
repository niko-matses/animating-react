import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Nav = () => {
  const [isToggled, setToggle] = useState(false);
  const menuState = useSpring({
    width: !isToggled ? '0%' : '100%'
  });
  const menuStyle = useSpring({
    border: !isToggled ? '0px solid white' : '20px solid white',
    padding: !isToggled ? '40px' : '20px'
  })
  return (
    <nav>
      <a class="menu-button" onClick={() => setToggle(!isToggled)}>Menu</a>
      <animated.nav style={menuState}>
        <animated.ul class="nav-items" style={menuStyle}>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">work</a></li>
          <li><a href="#">contact</a></li>
        </animated.ul>
      </animated.nav>
    </nav>
  );
}
export default Nav