import React from "react";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  isVisible: boolean;
  data: any;
  index: number;
}

const Fireballs = ({ isVisible, data, index }: Props) => {
  const styles = isVisible
    ? useSpring({
        from: {
          top: "-150px",
          zIndex: "-1",
          opacity: 0,
          position: "absolute",
        },
        to: {
          position: "relative",
          top: `-10px`,
          zIndex: "9",
          opacity: 1,
          animation:
            data.result !== null
              ? `move ${index + 0.5 * 1.75}s ease-in-out infinite`
              : `fade-out ${index + 0.75 * 2.75}s ease-out both`,
          backgroundColor: data.result === null ? "rgb(227, 64,47)" : "#2EF1FF",
          transition: `all ${(index * 0.5) / 2}s ease-in-out`,
        },
        delay: index * 500,
      })
    : {};

  return <animated.li style={styles}></animated.li>;
};

export default Fireballs;
