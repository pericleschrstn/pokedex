import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const PokemonCard = ({ pokemon, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(pokemon.name);
  };

  return (
    <Grid2 xs={4}>
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
          <Typography>{pokemon.types}</Typography>
          <Typography>{pokemon.weakness}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggleFavorite}>
            {isFavorite ? "Desfavoritar" : "Favoritar"}
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default PokemonCard;
