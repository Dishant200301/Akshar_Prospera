// components/LottieAnimation.jsx
import React from 'react';
import Lottie from 'lottie-react';

// A simple wrapper for responsiveness and consistent sizing
const LottieAnimation = ({ animationData, className = 'w-24 h-24' }) => {
  return (
    <div className={className}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;