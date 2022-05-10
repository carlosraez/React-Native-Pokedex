import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  SimplePokemon,
  Result,
} from '../interfaces/pokemonInterfaces';

export const useGetPokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';
  const nexPageUrl = useRef(url);

  const loadPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonPaginatedResponse>(
      nexPageUrl.current,
    );

    nexPageUrl.current = response.data.next;
    mapPokemonList(response.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ url, name }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, picture, name };
    });

    //last Pokemon + new Pokemin list
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
  };
};
