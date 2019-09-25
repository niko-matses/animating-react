import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  const collapse = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0
  });
  return (
    <div>
      <h1><button onClick={() => toggle(!on)}>Toggle</button></h1>
      <animated.div style={collapse}>
        <div {...bind} className="accordion">
          <h2>Hello, I'm in the accordion, Hello, I'm in the accordion, Hello, I'm in the accordion, Hello, I'm in the accordion, Hello, I'm in the accordion, Hello, I'm in the accordion</h2>
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;