import React, { useState } from "react";
import styled from "styled-components";
import Conteudo2 from "./Conteudo2";
import Educação from "./image/Eduacação.png";

const BoxTwo = styled.div`
  text-align: center;
`;
const CardTwo = styled.section`
  width: 17vw;
  height: 34vh;
  background-color: #990000;
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
  margin-top: 5px;
`;
const Title = styled.h2`
  font-size: 18px;
`;
const Img = styled.img`
  width: 13vw;
  height: 13vh;
  margin: 10px;
`;

export default function Card1() {
  const [modal, setModal] = useState(false);

  return (
    <BoxTwo>
      <CardTwo
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      >
        <Star>
          <Number> 2 </Number>
          <Title>EDUCAÇÃO DE QUALIDADE</Title>
        </Star>
        <Img src={Educação} alt="" />
      </CardTwo>
      {modal && <Conteudo2 />}
    </BoxTwo>
  );
}
