import React, { useState } from "react";
import Zero from "./image/FomeZero.png";
import styled from "styled-components";
import Conteudo1 from "./Conteudo1.js";

const BoxOne = styled.div`
  text-align: center;
`;
const CardOne = styled.div`
  width: 17vw;
  height: 34vh;
  background-color: #e6b325;
  border-radius: 6px;
`;
const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;
const Number = styled.h1`
  margin: 5px;
`;
const Title = styled.h2`
  font-size: 18px;
`;
const Img = styled.img`
  width: 13vw;
  height: 13vh;
`;

export default function Card1() {
  const [modal, setModal] = useState(false);

  return (
    <BoxOne>
      <CardOne
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      >
        <Star>
          <Number>1</Number>
          <Title>FOME ZERO E AGRICULTURA SUSTENTÁVEL</Title>
        </Star>
        <Img src={Zero} alt="" />
      </CardOne>
      {modal && <Conteudo1 />}
    </BoxOne>
  );
}
