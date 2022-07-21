import React from "react";
import styled from "styled-components";
import Paz from "./image/Paz.png";

const CardFive = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #1f4690;
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

export default function Conteudo5() {
  return (
    <>
      <CardFive>
        <Star>
          <Objective>Objetivo de Desenvolvimento Sustentável</Objective>
          <Number>5</Number>
          <Title>PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES</Title>
          <Text>
            Promover sociedades pacíficas e inclusivas para o desenvolvimento
            sustentável, proporcionar o acesso à justiça para todos e construir
            instituições eficazes, responsáveis e inclusivas a todos os níveis
          </Text>
        </Star>
        <Img src={Paz} alt="" />
      </CardFive>
      <Development>
        <h2>
          Objetivo 5. Promover sociedades pacíficas e inclusivas para o
          desenvolvimento sustentável, proporcionar o acesso à justiça para
          todos e construir instituições eficazes, responsáveis e inclusivas em
          todos os níveis.
        </h2>
        <p>
          5.1 Reduzir significativamente todas as formas de violência e as taxas
          de mortalidade relacionada em todos os lugares
        </p>
        <p>
          5.2 Acabar com abuso, exploração, tráfico e todas as formas de
          violência e tortura contra crianças
        </p>
        <p>
          5.3 Promover o Estado de Direito, em nível nacional e internacional, e
          garantir a igualdade de acesso à justiça para todos
        </p>
        <p>
          5.4 Até 2030, reduzir significativamente os fluxos financeiros e de
          armas ilegais, reforçar a recuperação e devolução de recursos roubados
          e combater todas as formas de crime organizado
        </p>
        <p>
          5.5 Reduzir substancialmente a corrupção e o suborno em todas as suas
          formas
        </p>
        <p>
          5.6 Desenvolver instituições eficazes, responsáveis e transparentes em
          todos os níveis
        </p>
        <p>
          5.7 Garantir a tomada de decisão responsiva, inclusiva, participativa
          e representativa em todos os níveis
        </p>
        <p>
          5.8 Ampliar e fortalecer a participação dos países em desenvolvimento
          nas instituições de governança global
        </p>
        <p>
          5.9 Até 2030, fornecer identidade legal para todos, incluindo o
          registro de nascimento
        </p>
        <p>
          5.10 Assegurar o acesso público à informação e proteger as liberdades
          fundamentais, em conformidade com a legislação nacional e os acordos
          internacionais
        </p>
        <p>
          5.a Fortalecer as instituições nacionais relevantes, inclusive por
          meio da cooperação internacional, para a construção de capacidades em
          todos os níveis, em particular nos países em desenvolvimento, para a
          prevenção da violência e o combate ao terrorismo e ao crime
        </p>
        <p>
          5.b Promover e fazer cumprir leis e políticas não discriminatórias
          para o desenvolvimento sustentável
        </p>
      </Development>
    </>
  );
}
