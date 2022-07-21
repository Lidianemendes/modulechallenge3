import React from "react";
import styled from "styled-components";
import Agua from "./image/Agua.png";

const CardFour = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #3ab4f2;
  border-radius: 6px;
  margin-top: 14%;
  margin-left: 5%;
`;
const Star = styled.div`
  text-align: initial;
  margin-left: 5%;
  color: white;
`;
const Objective = styled.h3``;

const Number = styled.h1`
  margin: 5px;
`;
const Title = styled.h2`
  font-size: 19px;
`;
const Text = styled.p`
  margin-top: 3%;
`;

const Img = styled.img`
  width: 40vw;
  height: 40vh;
  margin: 25px;
`;
const Development = styled.div`
  margin: 5%;
  margin-bottom: 7%;
  padding: 0;
  text-align: initial;
`;

export default function Conteudo4() {
  return (
    <>
      <CardFour>
        <Star>
          <Objective>Objetivo de Desenvolvimento Sustentável</Objective>
          <Number>4</Number>
          <Title>ÁGUA POTÁVEL E SANEAMENTO BÁSICO</Title>
          <Text>
            Garantir a disponibilidade e a gestão sustentável da água potável e
            do saneamento para todos
          </Text>
        </Star>
        <Img src={Agua} alt="" />
      </CardFour>
      <Development>
        <h2>
          Objetivo 4. Assegurar a disponibilidade e gestão sustentável da água e
          saneamento para todas e todos.
        </h2>
        <p>
          4.1 Até 2030, alcançar o acesso universal e equitativo a água potável
          e segura para todos
        </p>
        <p>
          4.2 Até 2030, alcançar o acesso a saneamento e higiene adequados e
          equitativos para todos, e acabar com a defecação a céu aberto, com
          especial atenção para as necessidades das mulheres e meninas e
          daqueles em situação de vulnerabilidade
        </p>
        <p>
          4.3 Até 2030, melhorar a qualidade da água, reduzindo a poluição,
          eliminando despejo e minimizando a liberação de produtos químicos e
          materiais perigosos, reduzindo à metade a proporção de águas residuais
          não tratadas e aumentando substancialmente a reciclagem e reutilização
          segura globalmente
        </p>
        <p>
          4.4 Até 2030, aumentar substancialmente a eficiência do uso da água em
          todos os setores e assegurar retiradas sustentáveis e o abastecimento
          de água doce para enfrentar a escassez de água, e reduzir
          substancialmente o número de pessoas que sofrem com a escassez de água
        </p>
        <p>
          4.5 Até 2030, implementar a gestão integrada dos recursos hídricos em
          todos os níveis, inclusive via cooperação transfronteiriça, conforme
          apropriado
        </p>
        <p>
          4.6 Até 2020, proteger e restaurar ecossistemas relacionados com a
          água, incluindo montanhas, florestas, zonas úmidas, rios, aquíferos e
          lagos
        </p>
        <p>
          4.a Até 2030, ampliar a cooperação internacional e o apoio à
          capacitação para os países em desenvolvimento em atividades e
          programas relacionados à água e saneamento, incluindo a coleta de
          água, a dessalinização, a eficiência no uso da água, o tratamento de
          efluentes, a reciclagem e as tecnologias de reuso
        </p>
        <p>
          6.b Apoiar e fortalecer a participação das comunidades locais, para
          melhorar a gestão da água e do saneamento
        </p>
      </Development>
    </>
  );
}
