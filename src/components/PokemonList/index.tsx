import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../utils/fetchData";
import "./style.scss";

interface Props {
  name: string;
  img: string;
}

export const PokemonList = ({ name, img }: Props) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    API.get(img).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return (
    <>
      {pokemon?.sprites?.front_default && (
        <div className="card-item">
          <Link to={`/pokemon/${name}`}>
            <p>{name}</p>
            <img src={pokemon?.sprites.front_default} />
          </Link>
        </div>
      )}
    </>
  );
};
