import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./Pages/Work.js";
import Onu from "./Pages/Components/Onu.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
const Container = styled.div`
  background-color: orange;
  height: 100vh;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export default function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Ul>
          <Link to="Work">
            <li>Work</li>
          </Link>
          <Link to="Onu">
            <li>Onu</li>
          </Link>
        </Ul>

        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="Onu" element={<Onu />} />
        </Routes>
      </Container>
    </Router>
  );
}
