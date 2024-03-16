import React from "react";
import { PokemonContext } from "../PokemonContext";
import PokemonCard from "./Feed/PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Typography } from "@mui/material";

const Favorites = () => {
  const { pokemons, favorites, setFavorites } = React.useContext(PokemonContext);

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const favoritePokemons = pokemons.filter((pokemon) => favorites.includes(pokemon.name));

  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ pt: 4 }}>
        Pokémons favoritos
      </Typography>
      <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
        {favoritePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid2>
    </Container>
  );
};

export default Favorites;
