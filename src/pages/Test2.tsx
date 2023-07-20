import { useSpring, animated } from "@react-spring/web";

export const TestPageTwo = () => {
  const [styles, api] = useSpring(
    () => ({
      x: 0,
      rotateZ: 0,
    }),
    []
  );

  const handleClick = () => {
    api.start({
      to: [
        { x: 200, rotateZ: 360 },
        { x: 0, rotateZ: 0 },
      ],
    });
  };

  return (
    <animated.div
      className="inline-flex w-32 bg-red-400 py-6"
      onClick={handleClick}
      style={{
        ...styles,
        cursor: "pointer",
      }}
    >
      Click Me!
    </animated.div>
  );
};
