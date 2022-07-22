import React from "react";
import styled from "styled-components";

const Title = styled.h1``;
const Star = styled.div`
  margin: 2%;
`;
const Text = styled.p`
  margin: 0.5%;
`;

export default function Sobre() {
  return (
    <Star>
      <Title>Eu sou Programadora</Title>
      <Text>
        Lancei esta página pessoal relacionada com as minhas paixões da
        linquaguem da programação, entre elas: html,css, javascript e etc.{" "}
      </Text>
      <Text>
        Em 2021 dei inicio como programadora na instituição de ensino
        tecnológico Vai na Web
      </Text>
      <Text>
        Terei imenso gosto em partilhar os meus projetos do dia a dia e
        ferramentas.
      </Text>
      <Text>Seguirá uma filosofia pegadógica e ensinamento.</Text>
      <Text>Cumprimentos Lidiane Mendes</Text>
    </Star>
  );
}
