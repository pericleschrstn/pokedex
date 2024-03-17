import React from "react";
import { getMorePokemons, getPokemons, getPokemonsDetails, numberPokemons } from "../api";
import axios from "axios";

export const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [pokemonsOffset, setPokemonsOffset] = React.useState(numberPokemons);

  React.useEffect(() => {
    const fetch = async () => {
      const response = await getPokemons();
      const data = await axios.all(
        response.map(async (pokemon) => {
          const details = await getPokemonsDetails(pokemon.url);
          return {
            name: pokemon.name,
            image: details.image,
            types: details.types,
            weakness: details.weakness,
          };
        })
      );
      setPokemons(data);
    };

    fetch();
  }, []);

  function toggleFavorite(pokemonName) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(pokemonName)
        ? prevFavorites.filter((name) => name !== pokemonName)
        : [...prevFavorites, pokemonName];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }

  async function handleClick() {
    const response = await getMorePokemons(pokemonsOffset);
    const data = await axios.all(
      response.map(async (pokemon) => {
        const details = await getPokemonsDetails(pokemon.url);
        return {
          name: pokemon.name,
          image: details.image,
          types: details.types,
          weakness: details.weakness,
        };
      })
    );
    setPokemons((state) => [...state, ...data]);
    setPokemonsOffset((state) => state + numberPokemons);
  }

  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemons, favorites, setFavorites, toggleFavorite, handleClick, pokemonsOffset }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
