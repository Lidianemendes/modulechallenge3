import React, { useState } from "react";
import styled from "styled-components";
import Paz from "./image/Paz.png";
import Conteudo5 from "./Conteudo5.js";

const BoxFive = styled.div`
  text-align: center;
`;
const CardFive = styled.div`
  width: 17vw;
  height: 34vh;
  background-color: #1f4690;
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
  margin-top: 11px;
`;
const Title = styled.h2`
  font-size: 18px;
`;
const Img = styled.img`
  width: 13vw;
  height: 13vh;
`;

export default function Card5() {
  const [modal, setModal] = useState(false);

  return (
    <BoxFive>
      <CardFive
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      >
        <Star>
          <Number>5</Number>
          <Title>PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES</Title>
        </Star>
        <Img src={Paz} alt="" />
      </CardFive>
      {modal && <Conteudo5 />}
    </BoxFive>
  );
}
