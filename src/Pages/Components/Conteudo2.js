import React from "react";
import styled from "styled-components";
import Educação from "./image/Eduacação.png";

const CardTwo = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #990000;
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

export default function Conteudo2() {
  return (
    <>
      <CardTwo>
        <Star>
          <Objective>Objetivo de Desenvolvimento Sustentável</Objective>
          <Number>2</Number>
          <Title>EDUCAÇÃO DE QUALIDADE</Title>
          <Text>
            Garantir o acesso à educação inclusiva, de qualidade e equitativa, e
            promover oportunidades de aprendizagem ao longo da vida para todos
          </Text>
        </Star>
        <Img src={Educação} alt="" />
      </CardTwo>
      <Development>
        <h2>
          Objetivo 2. Assegurar a educação inclusiva e equitativa e de
          qualidade, e promover oportunidades de aprendizagem ao longo da vida
          para todas e todos.
        </h2>
        <p>
          2.1 Até 2030, garantir que todas as meninas e meninos completem o
          ensino primário e secundário livre, equitativo e de qualidade, que
          conduza a resultados de aprendizagem relevantes e eficazes
        </p>
        <p>
          2.2 Até 2030, garantir que todos as meninas e meninos tenham acesso a
          um desenvolvimento de qualidade na primeira infância, cuidados e
          educação pré-escolar, de modo que eles estejam prontos para o ensino
          primário
        </p>
        <p>
          2.3 Até 2030, assegurar a igualdade de acesso para todos os homens e
          mulheres à educação técnica, profissional e superior de qualidade, a
          preços acessíveis, incluindo universidade
        </p>
        <p>
          2.4 Até 2030, aumentar substancialmente o número de jovens e adultos
          que tenham habilidades relevantes, inclusive competências técnicas e
          profissionais, para emprego, trabalho decente e empreendedorismo
        </p>
        <p>
          2.5 Até 2030, eliminar as disparidades de gênero na educação e
          garantir a igualdade de acesso a todos os níveis de educação e
          formação profissional para os mais vulneráveis, incluindo as pessoas
          com deficiência, povos indígenas e as crianças em situação de
          vulnerabilidade
        </p>
        <p>
          2.6 Até 2030, garantir que todos os jovens e uma substancial proporção
          dos adultos, homens e mulheres estejam alfabetizados e tenham
          adquirido o conhecimento básico de matemática
        </p>
        <p>
          2.7 Até 2030, garantir que todos os alunos adquiram conhecimentos e
          habilidades necessárias para promover o desenvolvimento sustentável,
          inclusive, entre outros, por meio da educação para o desenvolvimento
          sustentável e estilos de vida sustentáveis, direitos humanos,
          igualdade de gênero, promoção de uma cultura de paz e não violência,
          cidadania global e valorização da diversidade cultural e da
          contribuição da cultura para o desenvolvimento sustentável
        </p>
        <p>
          4.a Construir e melhorar instalações físicas para educação,
          apropriadas para crianças e sensíveis às deficiências e ao gênero, e
          que proporcionem ambientes de aprendizagem seguros e não violentos,
          inclusivos e eficazes para todos
        </p>
        <p>
          4.b Até 2020, substancialmente ampliar globalmente o número de bolsas
          de estudo para os países em desenvolvimento, em particular os países
          menos desenvolvidos, pequenos Estados insulares em desenvolvimento e
          os países africanos, para o ensino superior, incluindo programas de
          formação profissional, de tecnologia da informação e da comunicação,
          técnicos, de engenharia e programas científicos em países
          desenvolvidos e outros países em desenvolvimento
        </p>
        <p>
          4.c Até 2030, substancialmente aumentar o contingente de professores
          qualificados, inclusive por meio da cooperação internacional para a
          formação de professores, nos países em desenvolvimento, especialmente
          os países menos desenvolvidos e pequenos Estados insulares em
          desenvolvimento
        </p>
      </Development>
    </>
  );
}
