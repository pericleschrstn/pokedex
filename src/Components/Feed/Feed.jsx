import React from "react";
import { getPokemons, getPokemonsDetails } from "../../../api";
import PokemonCard from "./PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Feed = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons();
      const response = await Promise.all(
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
      setPokemons(response);
    };

    fetch();
  }, []);

  function toggleFavorite(pokemonName) {
    if (favorites.includes(pokemonName)) {
      setFavorites(favorites.filter((name) => name !== pokemonName));
    } else {
      setFavorites([...favorites, pokemonName]);
    }
  }

  return (
    <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} onToggleFavorite={toggleFavorite} />
      ))}
    </Grid2>
  );
};

export default Feed;
