import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import { PokemonProvider } from "./PokemonContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favoritos" element={<Favorites />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
