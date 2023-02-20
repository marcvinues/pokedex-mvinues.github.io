import axios from 'axios'
import { PropsPokemon } from '../interfaces/types'
const URL = 'https://pokeapi.co/api/v2/pokemon/'


export const API = axios.create({
  baseURL: URL,
});

export const fetchPokemon = async (name: string): Promise<PropsPokemon> => {
  const response = await API.get(name)
  .then(result => result.data)

  const pokemonStats = {
    name: response.name,
    id: response.id,
    hp: response.stats[0].base_stat,
    attack: response.stats[1].base_stat,
    deffense: response.stats[2].base_stat,
    img: response.sprites.front_default
  }
  return pokemonStats;
};