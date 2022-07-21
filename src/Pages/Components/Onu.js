import React, { useState } from "react";
import styled from "styled-components";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";
import Card4 from "./Card4.js";
import Card5 from "./Card5.js";

const Container = styled.div`
  background-color: white;
  margin: 4%;
`;
const Star = styled.div`
  padding: 1.6%;
`;

const Title = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
`;
const Text1 = styled.p`
  text-align: center;
`;

const BoxStar = styled.div`
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export default function Onu() {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <Star>
        <Title>
          Os Objetivos de Desenvolvimento Sustentável em Nova Iguaçu
        </Title>
        <Text>
          Os Objetivos de Desenvolvimento Sustentável fazem parte da chamada
          “Agenda 2030” e trata-se de um pacto global assinado durante a Cúpula
          das Nações Unidas em 2015 pelos 193 países membros. A agenda é
          composta por 17 objetivos ambiciosos e interconectados, desdobrados em
          169 metas, com foco em superar os principais desafios de
          desenvolvimento enfrentados por pessoas no Brasil e no mundo,
          promovendo o crescimento sustentável global até 2030.
        </Text>
        <Text1>
          Quem passar pela Praça dos Direitos Humanos, no Centro de Nova Iguaçu,
          poderá conhecer um dos cubos gigantes que ajudam a divulgar os 17
          Objetivos de Desenvolvimento Sustentável indicados pela ONU.
        </Text1>
      </Star>
      <BoxStar>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </BoxStar>
    </Container>
  );
}
