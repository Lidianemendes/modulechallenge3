import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Onu from "./Pages/Components/Onu.js";
import Blog from "./Pages/Components/Blog.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
const Container = styled.div`
  background-color: #ffe6e6;
  height: 100vh;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #293462;
  height: 8vh;
`;

const Li = styled.li`
  text-align: center;
  color: #ffdeb4;
  background-color: #d61c4e;
  border-radius: 3px;
  width: 3.5vw;
`;

export default function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Ul>
          <Link to="Blog">
            <Li>Blog</Li>
          </Link>
          <Link to="Onu">
            <Li>Onu</Li>
          </Link>
        </Ul>

        <Routes>
          <Route path="Blog" element={<Blog />} />
          <Route path="Onu" element={<Onu />} />
        </Routes>
      </Container>
    </Router>
  );
}
