import React from "react";
import styled from "styled-components";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";
import linkedin from "./image/linkedin.png";
import github from "./image/github.jpg";

const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: pink;
  height: 15vh;
`;
const Img = styled.img`
  height: 7vh;
  width: 5vw;
`;

export default function Footer() {
  return (
    <Redes>
      <a href="https://web.facebook.com/lidiane.mendes.501">
        <Img src={facebook} />
      </a>
      <a href="https://www.instagram.com/lidianemendees/">
        <Img src={instagram} />
      </a>
      <a href="https://www.linkedin.com/in/lidiane-mendes-276199176/">
        <Img src={linkedin} />
      </a>
      <a href="https://github.com/Lidianemendes">
        <Img src={github} />
      </a>
      <h2>Uma página pessoal sobre a paixão sobre a tecnologia.</h2>
    </Redes>
  );
}
