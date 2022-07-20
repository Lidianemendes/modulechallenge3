import React, { useState } from "react";
import styled from "styled-components";
import Fome from "./Image/FomeZero.jpg";

const BoxStar = styled.div`
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: orange;
`;
const Title = styled.h1`
  text-align: center;
  margin: 5%;
`;
const BoxOne = styled.div``;
const BoxTwo = styled.div``;
const BoxThree = styled.div``;
const BoxFour = styled.div``;
const BoxFive = styled.div``;

const CardOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15vw;
  height: 25vh;
  border: solid #eb1d36;
  background-color: #eb1d36;
`;
const CardTwo = styled.div`
  width: 15vw;
  height: 25vh;
  border: solid #e6b325;
  background-color: #e6b325;
`;
const CardThree = styled.div`
  width: 15vw;
  height: 25vh;
  border: solid #3ccf4e;
  background-color: #3ccf4e;
`;
const CardFour = styled.div`
  width: 15vw;
  height: 25vh;
  border: solid #990000;
  background-color: #990000;
`;
const CardFive = styled.div`
  width: 15vw;
  height: 25vh;
  border: solid #ff1700;
  background-color: #ff1700;
`;

export default function Onu() {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <Title>Os Objetivos de Desenvolvimento Sustentável em Nova Iguaçu</Title>
      <BoxStar>
        <BoxOne>
          <CardOne
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            <h1>1</h1>
            <h2> Fome Zero</h2>
          </CardOne>
          {modal && <h2>Conteúdo</h2>}
        </BoxOne>
        <BoxTwo>
          <CardTwo
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            <h2>Educação de qualidade</h2>
          </CardTwo>
          {modal && <h1>Conteúdo</h1>}
        </BoxTwo>
        <BoxThree>
          <CardThree
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            <h2>Segurança</h2>
          </CardThree>
          {modal && <h1>Conteúdo</h1>}
        </BoxThree>
        <BoxFour>
          <CardFour
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            <h2>Saneamento Básico Eficiente</h2>
          </CardFour>
          {modal && <h1>Conteúdo</h1>}
        </BoxFour>
        <BoxFive>
          <CardFive
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            <h2>Habitação</h2>
          </CardFive>
          {modal && <h1>Conteúdo</h1>}
        </BoxFive>
      </BoxStar>
    </Container>
  );
}
