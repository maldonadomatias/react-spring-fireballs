import React from "react";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  isVisible: boolean;
  data: any;
  index: number;
}

const Fireballs = ({ isVisible, data, index }: Props) => {
  const styles = useSpring({
    top: isVisible ? `-10px` : "-150px",
    left: isVisible ? `calc(${index * 14.5}% - ${index * 14.5}px)` : "50%",
    zIndex: isVisible ? "9" : "-1",
    opacity: isVisible ? 1 : 0,
    backgroundColor: data.result === null ? "#F60C24" : "#2EF1FF",
    animation:
      data.result !== null
        ? `move ${index + 0.5 * 1.75}s ease-in-out infinite`
        : `fade-out ${index + 0.75 * 2.75}s ease-out both`,
  });

  return <animated.li style={styles}></animated.li>;
};

export default Fireballs;
