import React from "react";
import PokemonCard from "./PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PokemonContext } from "../../PokemonContext";
import { Button } from "@mui/material";

const Feed = () => {
  const { pokemons, setPokemons, toggleFavorite, setFavorites, handleClick, pokemonsOffset } =
    React.useContext(PokemonContext);

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <>
      <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} onToggleFavorite={toggleFavorite} />
        ))}
      </Grid2>
      <Button variant="contained" sx={{ marginBottom: 2 }} onClick={() => handleClick(pokemonsOffset)}>
        Mostrar mais
      </Button>
    </>
  );
};

export default Feed;
