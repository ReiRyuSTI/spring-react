import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export const TestPageOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <animated.div style={fadeAnimation}>
        <h1>Hello, React Spring!</h1>
      </animated.div>
      <button onClick={handleButtonClick}>{isVisible ? "Fade Out" : "Fade In"}</button>
    </div>
  );
};
