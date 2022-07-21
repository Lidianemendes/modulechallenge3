import React, { useState } from "react";
import styled from "styled-components";
import Agua from "./image/Agua.png";
import Conteudo4 from "./Conteudo4.js";

const BoxFour = styled.div`
  text-align: center;
`;

const CardFour = styled.div`
  width: 17vw;
  height: 34vh;
  background-color: #3ab4f2;
  border-radius: 6px;
`;
const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;
const Number = styled.h1`
  font-size: 32px;
  margin: 5px;
  margin-top: 2px;
`;
const Title = styled.h2`
  font-size: 17px;
  font-family: Roboto;
`;
const Img = styled.img`
  width: 13vw;
  height: 13vh;
`;

export default function Card4() {
  const [modal, setModal] = useState(false);
  return (
    <BoxFour>
      <CardFour
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      >
        <Star>
          <Number>4</Number>
          <Title>ÁGUA POTÁVEL E SANEAMENTO BÁSICO</Title>
        </Star>
        <Img src={Agua} alt="" />
      </CardFour>
      {modal && <Conteudo4 />}
    </BoxFour>
  );
}
