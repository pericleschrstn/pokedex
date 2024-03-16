import React from "react";
import PokemonCard from "./PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PokemonContext } from "../../PokemonContext";

const Feed = () => {
  const { pokemons, toggleFavorite, setFavorites } = React.useContext(PokemonContext);

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} onToggleFavorite={toggleFavorite} />
      ))}
    </Grid2>
  );
};

export default Feed;
