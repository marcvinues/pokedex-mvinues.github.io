import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./style.scss";

interface Props {
  name: string | undefined;
  img: string | undefined;
  attack: number | undefined;
  deffense: number | undefined;
}

export const PokemonDetail = ({ name, attack, deffense, img }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <Button onClick={() => navigate("/")}>Go back</Button>
      <div className="card">
        <img src={img} alt={name} />
        <p className="card-text">name: {name}</p>
        <p className="card-text">attack: {attack}</p>
        <p className="card-text">deffense: {deffense}</p>
      </div>
    </div>
  );
};
