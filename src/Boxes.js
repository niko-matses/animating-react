import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

const items = [1, 2, 3, 4, 5];

const Boxes = () => {
  const [on, toggle] = useState(false);
  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.8) translate3d(0,0,0)' : 'scale(1) translate3d(0,30px,0)',
  });

  return (
    <div className="boxes-grid" >
      <button onClick={() => toggle(!on)}>Toggle</button>
      {trail.map(animation => (
        <animated.div className="box" style={animation} />
      ))}
    </div >
  );
};

export default Boxes;
