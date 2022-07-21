import React, { useState } from "react";
import styled from "styled-components";
import Saude from "./image/Saúde.png";
import Conteudo3 from "./Conteudo3.js";

const BoxThree = styled.div`
  text-align: center;
`;

const CardThree = styled.div`
  width: 17vw;
  height: 34vh;
  background-color: #3ccf4e;
  border-radius: 6px;
`;
const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px;
  color: white;
`;
const Number = styled.h1`
  margin-top: 5px;
  margin: 5px;
`;
const Title = styled.h2`
  font-size: 18px;
`;
const Img = styled.img`
  width: 13vw;
  height: 13vh;
  background-color: white;
`;

export default function Card3() {
  const [modal, setModal] = useState(false);

  return (
    <BoxThree>
      <CardThree
        onClick={() => {
          setModal((prevState) => !prevState);
        }}
      >
        <Star>
          <Number>3</Number>
          <Title>SAÚDE E BEM-ESTAR</Title>
        </Star>
        <Img src={Saude} alt="" />
      </CardThree>
      {modal && <Conteudo3 />}
    </BoxThree>
  );
}
