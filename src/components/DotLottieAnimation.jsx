import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

/**
 * DotLottieAnimation component uses @lottiefiles/dotlottie-react 
 * with a direct URL for efficient and performant animation playback.
 */
const DotLottieAnimation = ({ src, className = 'w-24 h-24' }) => {
  return (
    // Tailwind class controls the overall size of the Lottie container
    <div className={className}>
      <DotLottieReact 
        src={src} 
        loop
        autoplay
        // Style ensures the DotLottie element fills the responsive div container
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DotLottieAnimation;