import React from "react";
import "./LoadingScreen.css";
import { useSpring, animated } from "react-spring";

const LoadingScreen = () => {
  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
      <animated.div style={fadeIn} className="theName">
        <div className="logo">AR</div>
        <div className="logo-next">Ahmed Refai</div>
      </animated.div>
    </div>
  );
};

export default LoadingScreen;
