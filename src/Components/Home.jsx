import { Container, Typography } from "@mui/material";
import React from "react";
import Feed from "./Feed/Feed";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container component="main" sx={{ pt: 4 }}>
      <Typography variant="h3" component="h1" textAlign="center" className={styles.title}>
        Escolha seu Pokémon favorito!
      </Typography>
      <Feed />
    </Container>
  );
};

export default Home;
