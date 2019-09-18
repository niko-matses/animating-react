import React from 'react';
import Toggle from './toggle';
import Nav from './Nav';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        {/* <button className="menu-button">Menu</button> */}
      </header>
      <Nav />
      <main>
        {/* <Toggle /> */}

      </main>
    </animated.div>
  );
}

export default App;
