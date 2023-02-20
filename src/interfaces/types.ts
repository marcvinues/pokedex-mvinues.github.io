export type PokemonType = {
  name: PokemonType | "All",
  url?: String
}

export type PropsPokemon = {
  name: string;
  id: number;
  hp: number | undefined;
  attack: number;
  deffense: number;
  img: string;
 }