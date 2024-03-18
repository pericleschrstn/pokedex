import React from "react";
import PokemonCard from "./PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PokemonContext } from "../../PokemonContext";
import { Button, TextField } from "@mui/material";

const Feed = () => {
  const { pokemons, toggleFavorite, setFavorites, handleClick, pokemonsOffset } = React.useContext(PokemonContext);
  const [search, setSearch] = React.useState("");

  const lowerSearch = search.toLowerCase();
  const searchPokemon = pokemons.filter((pokemon) => pokemon.name.includes(lowerSearch));

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <>
      <TextField
        label="Qual o nome do Pokémon?"
        fullWidth
        sx={{ mt: 4 }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
        {searchPokemon.map((pokemon) => (
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
