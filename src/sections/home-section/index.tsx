import React from 'react';
import ThreeScene from './components/three-scene';

const HomeSection: React.FC = () => {
  return (
    <div>
      <ThreeScene width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default HomeSection;