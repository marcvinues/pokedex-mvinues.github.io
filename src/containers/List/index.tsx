import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonList } from "../../components/PokemonList";
import { Pagination } from "../../components/Pagination";
import { API } from "../../utils/fetchData";
import "./style.scss";

interface PokemonProps {
  name: string;
  id: number;
  img: string;
  page: number;
  perPage: number;
  results: [];
}

const PokemonListPage = ({}: PokemonProps) => {
  const [pokemons, setPokemons] = React.useState<PokemonProps[]>();
  const navigateTo = useNavigate();
  const [offset, setOffset] = useState(0);
  const limit = 15;
  const POKEDEX_URL = `?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    API.get(POKEDEX_URL).then((response) => {
      setPokemons(response.data);
      navigateTo(POKEDEX_URL);
    });
  }, [offset]);

  let perPage = 12;

  return (
    <>
      <article className="card-layout">
        {pokemons?.results.map((pokemon: { name: string; url: string }) => (
          <PokemonList
            key={pokemon.name}
            img={pokemon.url}
            name={pokemon.name}
          />
        ))}
      </article>
      <Pagination
        totalItems={pokemons?.length!}
        offset={offset}
        perPage={perPage}
        nextPage={() => setOffset(offset + limit)}
        prevPage={() => setOffset(offset - limit)}
      />
    </>
  );
};

export default PokemonListPage;
