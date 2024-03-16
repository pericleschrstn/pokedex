import React from "react";
import { getPokemons, getPokemonsDetails } from "../api";

export const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons();
      const dataDetails = await Promise.all(
        data.map(async (pokemon) => {
          const details = await getPokemonsDetails(pokemon.url);
          return {
            name: pokemon.name,
            image: details.image,
            types: details.types,
            weakness: details.weakness,
          };
        })
      );
      setPokemons(dataDetails);
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
  return (
    <PokemonContext.Provider value={{ pokemons, favorites, toggleFavorite, setFavorites }}>
      {children}
    </PokemonContext.Provider>
  );
};
