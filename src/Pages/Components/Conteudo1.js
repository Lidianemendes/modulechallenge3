import React from "react";
import styled from "styled-components";
import Zero from "./image/FomeZero.png";

const CardOne = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #e6b325;
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
  text-align: initial;
`;

export default function Conteudo1() {
  return (
    <>
      <CardOne>
        <Star>
          <Objective>Objetivo de Desenvolvimento Sustentável</Objective>
          <Number>1</Number>
          <Title>FOME ZERO</Title>
          <Text>
            Erradicar a fome, alcançar a segurança alimentar, melhorar a
            nutrição e promover a agricultura sustentável
          </Text>
        </Star>
        <Img src={Zero} alt="" />
      </CardOne>
      <Development>
        <h2>
          Objetivo 1. Acabar com a fome, alcançar a segurança alimentar e
          melhoria da nutrição e promover a agricultura sustentável.
        </h2>
        <p>
          1.1 Até 2030, acabar com a fome e garantir o acesso de todas as
          pessoas, em particular os pobres e pessoas em situações vulneráveis,
          incluindo crianças, a alimentos seguros, nutritivos e suficientes
          durante todo o ano
        </p>
        <p>
          1.2 Até 2030, acabar com todas as formas de desnutrição, incluindo
          atingir, até 2025, as metas acordadas internacionalmente sobre nanismo
          e caquexia em crianças menores de cinco anos de idade, e atender às
          necessidades nutricionais dos adolescentes, mulheres grávidas e
          lactantes e pessoas idosas
        </p>
        <p>
          1.3 Até 2030, dobrar a produtividade agrícola e a renda dos pequenos
          produtores de alimentos, particularmente das mulheres, povos
          indígenas, agricultores familiares, pastores e pescadores, inclusive
          por meio de acesso seguro e igual à terra, outros recursos produtivos
          e insumos, conhecimento, serviços financeiros, mercados e
          oportunidades de agregação de valor e de emprego não agrícola
        </p>

        <p>
          1.4 Até 2030, garantir sistemas sustentáveis de produção de alimentos
          e implementar práticas agrícolas resilientes, que aumentem a
          produtividade e a produção, que ajudem a manter os ecossistemas, que
          fortaleçam a capacidade de adaptação às mudanças climáticas, às
          condições meteorológicas extremas, secas, inundações e outros
          desastres, e que melhorem progressivamente a qualidade da terra e do
          solo
        </p>

        <p>
          1.5 Até 2020, manter a diversidade genética de sementes, plantas
          cultivadas, animais de criação e domesticados e suas respectivas
          espécies selvagens, inclusive por meio de bancos de sementes e plantas
          diversificados e bem geridos em nível nacional, regional e
          internacional, e garantir o acesso e a repartição justa e equitativa
          dos benefícios decorrentes da utilização dos recursos genéticos e
          conhecimentos tradicionais associados, como acordado
          internacionalmente
        </p>

        <p>
          1.a Aumentar o investimento, inclusive via o reforço da cooperação
          internacional, em infraestrutura rural, pesquisa e extensão de
          serviços agrícolas, desenvolvimento de tecnologia, e os bancos de
          genes de plantas e animais, para aumentar a capacidade de produção
          agrícola nos países em desenvolvimento, em particular nos países menos
          desenvolvidos
        </p>

        <p>
          1.b Corrigir e prevenir as restrições ao comércio e distorções nos
          mercados agrícolas mundiais, incluindo a eliminação paralela de todas
          as formas de subsídios à exportação e todas as medidas de exportação
          com efeito equivalente, de acordo com o mandato da Rodada de
          Desenvolvimento de Doha
        </p>

        <p>
          1.c Adotar medidas para garantir o funcionamento adequado dos mercados
          de commodities de alimentos e seus derivados, e facilitar o acesso
          oportuno à informação de mercado, inclusive sobre as reservas de
          alimentos, a fim de ajudar a limitar a volatilidade extrema dos preços
          dos alimentos
        </p>
      </Development>
    </>
  );
}
