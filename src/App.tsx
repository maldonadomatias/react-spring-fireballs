import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";

import fireball from "./assets/fire-fireball.gif";

const BALL_SIZE = 18;
const NUMBER_OF_BALLS = 9;

const RedLight = styled.li`
  background-color: #f60c24;
  position: absolute;
  top: -150px;
  left: 185px;
  width: ${BALL_SIZE}px;
  height: ${BALL_SIZE}px;
  border-radius: 50%;
  list-style: none;
  transform-origin: 50% 50%;
  filter: blur(2px);
  transition: all 0.5s ease-in-out;
`;

const BallContainers = styled.ul`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin-top: 60px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeedCardImageSuccess = styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  z-index: 99;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function App() {
  const [appliedStyles, setAppliedStyles] = useState<
    { key: number; value: CSSProperties }[]
  >([]);

  const [styles, setStyles] = useState<{ key: number; value: CSSProperties }[]>(
    []
  );

  const setLightsAnimation = (numberOfBalls: number) => {
    let styles: { key: number; value: CSSProperties }[] = [];
    let appliedStyles: { key: number; value: CSSProperties }[] = [];
    let startPosition = 0;
    let separationBetweenBalls = 30;

    startPosition = Math.floor(
      (numberOfBalls * BALL_SIZE +
        (numberOfBalls - 1) * separationBetweenBalls) /
        3.34
    );

    for (let i = 0; i < numberOfBalls; i++) {
      let style: CSSProperties = {
        transform: `translate(${
          -startPosition + separationBetweenBalls * i
        }px, 140px)`,
      };

      styles.push({ key: i, value: style });
      appliedStyles.push({ key: i, value: {} });
    }
    setAppliedStyles(appliedStyles);
    setStyles(styles);
  };

  const playBallAnimation = async (numberOfBalls: number) => {
    for (let i = 0; i < numberOfBalls; i++) {
      setAppliedStyles((prevState) => {
        const newState = prevState.map((appliedStyle) => {
          if (appliedStyle.key == i) {
            return { ...appliedStyle, value: styles[i].value };
          }

          return appliedStyle;
        });

        return newState;
      });
      await sleep(600);
    }
  };

  const resetBallAnimation = () => {
    setStyles([]);
    setAppliedStyles([]);
  };

  useEffect(() => {
    if (styles.length > 0) {
      playBallAnimation(NUMBER_OF_BALLS);
    }
  }, [styles]);

  return (
    <Container>
      <Center
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <DeedCardImageSuccess src={fireball} />
        <BallContainers>
          <RedLight />
          {appliedStyles.length > 0 &&
            appliedStyles.map((style) => (
              <RedLight key={style.key} style={style.value} />
            ))}
        </BallContainers>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            setLightsAnimation(NUMBER_OF_BALLS);
          }}
        >
          play animation
        </button>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            resetBallAnimation();
          }}
        >
          reset animation
        </button>
      </Center>
    </Container>
  );
}

export default App;
