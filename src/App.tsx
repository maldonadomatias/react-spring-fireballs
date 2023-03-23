import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import "./App.css";
import fireball from "./assets/fire-fireball.gif";
import Fireballs from "./components/Fireballs";

const burnDeedResultFakeData = [
  {
    deedTokenId: "IDEED_3122",
    result: {
      type: "Infrastructure",
      prefix: "MIMF",
      no: 298,
      name: "Mining Facility",
      location: "Moon",
      moonCycle: 1,
      origin: "Moon",
      artist: "GIN",
      description:
        "The start of any successful Moon Team's building plan. TTM tokens are mined and make the moon go round. This infrastructure is a well-oiled machine running on Lithium Moon Rocks, as it maintains the economic system of TOTHEMOON UNIVERSE.",
      image:
        "https://ipfs.tothemoon.net/ipfs/QmVoqyLghYsw5PVSr7kyfYeyA9Bt575pdJLdjeHeuapETX",
    },
  },
  {
    deedTokenId: "IDEED_3123",
    result: {
      type: "Infrastructure",
      prefix: "MICT",
      no: 140,
      name: "Communication Tower",
      location: "Moon",
      moonCycle: 1,
      origin: "Moon",
      artist: "GIN",
      description:
        "No dropped calls here. Signal is strengthened as these towers offer a greater radius of communication on the moon. With cell service this good, teams are able to quickly and easily connect with each other.",
      image:
        "https://ipfs.tothemoon.net/ipfs/QmQo2MXRD5dcjCbH4vy4JkDRi6udELXE4skVzjC5uYkjCT",
    },
  },
  {
    deedTokenId: "IDEED_3124",
    result: null,
  },
  {
    deedTokenId: "IDEED_3125",
    result: null,
  },
  {
    deedTokenId: "IDEED_3124",
    result: null,
  },
  {
    deedTokenId: "IDEED_3125",
    result: null,
  },
  {
    deedTokenId: "IDEED_3124",
    result: null,
  },
  {
    deedTokenId: "IDEED_3125",
    result: null,
  },
  {
    deedTokenId: "IDEED_3124",
    result: null,
  },
  {
    deedTokenId: "IDEED_3125",
    result: null,
  },
];

const fade = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  -webkit-animation: ${fade} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${fade} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

function App() {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 2000);

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
        <DeedCardImageSuccess className="fade-in" src={fireball} />
        <ul className="fireballs">
          {burnDeedResultFakeData.map((data: any, index: number) => {
            return (
              <Fireballs
                key={index}
                index={index}
                isVisible={active ? true : false}
                data={data}
              ></Fireballs>
            );
          })}
        </ul>
      </Center>
    </Container>
  );
}

export default App;
