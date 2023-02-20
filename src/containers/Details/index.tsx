import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../components/PokemonDetail";
import { PropsPokemon } from "../../interfaces/types";
import { fetchPokemon } from "../../utils/fetchData";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<PropsPokemon>();
  const { name } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
    };
    getPokemon();
  }, [name]);

  return (
    <>
      <PokemonDetail
        img={pokemon?.img}
        name={pokemon?.name}
        attack={pokemon?.attack}
        deffense={pokemon?.deffense}
      />
    </>
  );
};

export default PokemonDetails;
