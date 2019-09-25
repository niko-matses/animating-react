import React from 'react';
import { animated, useSprings } from 'react-spring';

const items = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

const Boxes = () => {
  const springs = useSprings(
    items.length,
    items.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: item
      }
    }))
  );

  return (
    <div className="boxes-grid" >
      {springs.map(animation => (
        <animated.div className="box" style={animation} />
      ))}
    </div >
  );
};

export default Boxes;
