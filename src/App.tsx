import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./containers/Details";
import PokemonList from "./containers/List";
import { Header } from "./components/Header";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </React.Fragment>
  );
}
