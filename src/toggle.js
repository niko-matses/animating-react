import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
  const [items, setItems] = useState([{
    letter: "N",
    key: 1
  }, {
    letter: "i",
    key: 2
  }, {
    letter: "k",
    key: 3
  }, {
    letter: "o",
    key: 4
  }]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button onClick={() => setItems([{
        letter: "N",
        key: 1
      }])}>Toggle</button>
    </div>
  );
};

//const AnimatedTitle = animated(componentName);

export default Toggle