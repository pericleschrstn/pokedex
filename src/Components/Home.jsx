import { Container, TextField, Typography } from "@mui/material";
import React from "react";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <Container component="main" sx={{ pt: 4 }}>
      <Typography variant="h3" component="h1" textAlign="center">
        Escolha seu Pokémon favorito!
      </Typography>
      <TextField label="Qual o nome do Pokémon?" fullWidth sx={{ mt: 4 }} />
      <Feed />
    </Container>
  );
};

export default Home;
