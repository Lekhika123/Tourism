import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import welcomeImage from '../../assets/namaste-girl.json'; 

function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcomeImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {

    // Set timeout to hide animation after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, 5000);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" aria-label="Welcome animation with Namaste greeting">
      <div
        className="relative flex flex-col items-center animate-moveFromTopRight"
        style={{
          animation: 'moveFromTopRight 1s ease-out forwards, fadeInOut 5s ease-in-out',
        }}
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}

export default WelcomeAnimation;