import React from "react";
import styled, { keyframes } from "styled-components";
import Perfil from "./image/foto lidi2.jpg";
import Sobre from "./Sobre.js";
import Hobies from "./Hobies.js";
import Footer from "./Footer.js";

const AnimarY = keyframes`
0%{
  transform: rotate(0deg);
  border: solid pink;
}
50%{
  transform: rotate(180deg);
  border: solid pink;
}
100%{
  transform: rotate(360deg);
  border: solid pink;
  background-image: url();
}
`;

const Box = styled.div`
  width: 1vw;
  height: 5vh;
  margin-left: 630px;
  margin-top: 0;
  border-radius: 50%;
  animation: ${AnimarY} 4s linear 3s infinite;
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
`;

const StarMain = styled.div`
  background-color: #c6dce4;
  height: 130vh;
`;
const Star = styled.div`
  display: flex;
  align-items: center;
  background-color: pink;
  height: 55vh;
`;
const H1 = styled.h1`
  margin-top: 35px;
`;

const Img = styled.img`
  width: 21vw;
  height: 51vh;
  border: solid white;
  border-radius: 50%;
  margin: 3%;
`;

export default function Home() {
  return (
    <StarMain>
      <Star>
        <Img src={Perfil} alt="" />
        <H1>
          Meu Nome é Lidiane, bem-vindos ao meu <Box>blog 💻</Box>
        </H1>
      </Star>
      <Sobre />
      <Hobies />
      <Footer />
    </StarMain>
  );
}
