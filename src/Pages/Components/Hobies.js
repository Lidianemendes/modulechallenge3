import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 2%;
`;
const MeuButton = styled.button`
  background-color: #ffb4b4;
  height: 7vh;
  width: 12vw;
  align-items: center;
  margin: 2%;
  font-size: 17px;
`;

export default function Hobies() {
  return (
    <>
      <Title>Hobies e interesses</Title>
      <MeuButton>Desenvolvimento 👩🏽‍💻</MeuButton>
      <MeuButton>Café ☕</MeuButton>
      <MeuButton>Livros 📚</MeuButton>
      <MeuButton>Fotografia 📸</MeuButton>
      <MeuButton>Filmes 📽️</MeuButton>
      <MeuButton>Coisas Divertidas 😄</MeuButton>
    </>
  );
}
