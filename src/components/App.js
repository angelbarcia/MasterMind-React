import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import NavigationBar from "./NavigationBar";
import Counters from "./Counters";
import Game from "./Game";
import "bootstrap/dist/css/bootstrap.css";



const App = () => (
  <BrowserRouter>
    <NavigationBar />
      <Routes>
      <Route path="/Counters" element={<Counters />} />
      <Route path="/Game" element={<Game />} />
      </Routes>
  </BrowserRouter>
);

export default App;