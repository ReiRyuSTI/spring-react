import React, { useState, CSSProperties, useEffect } from "react";
import { useTransition, animated, AnimatedProps, useSpringRef } from "@react-spring/web";

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div className="absolute w-12" style={{ ...style, background: "lightpink" }}>
      A
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="absolute w-12" style={{ ...style, background: "lightblue" }}>
      B
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="absolute w-12" style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  ),
];

export const TestPageThree = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <div onClick={onClick} className="relative h-16 w-full">
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
};
