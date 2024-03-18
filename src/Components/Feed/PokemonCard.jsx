import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { PokemonContext } from "../../PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const { favorites, toggleFavorite } = React.useContext(PokemonContext);

  const isFavorite = favorites.includes(pokemon.name);

  function handleToggleFavorite() {
    toggleFavorite(pokemon.name);
  }

  return (
    <Grid2 sm={12} lg={4}>
      <Card>
        <CardMedia
          component="img"
          alt={pokemon.name}
          height="140"
          image={pokemon.image}
          sx={{ width: "initial", margin: "0 auto" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {pokemon.name}
          </Typography>
          <Typography>
            <b>Tipo:</b> {pokemon.types}
          </Typography>
          <Typography>
            <b>Fraqueza: </b>
            {pokemon.weakness}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleToggleFavorite}>
            {isFavorite ? "Desfavoritar" : "Favoritar"}
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default PokemonCard;
