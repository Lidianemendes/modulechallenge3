import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./Pages/Work.js";
import Onu from "./Pages/Onu.js";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
