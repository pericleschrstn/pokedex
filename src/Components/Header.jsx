import React from "react";
import Logo from "../assets/logotipo.svg?react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Grid2 container>
          <Grid2 xs>
            <Link to="/" aria-label="Pokedex - Home">
              <Logo />
            </Link>
          </Grid2>
          <Grid2 display="flex" alignItems="center">
            <nav>
              <NavLink to="favoritos" aria-label="Pokedex - Favoritos" className={styles.navLink}>
                Favoritos
              </NavLink>
            </nav>
          </Grid2>
        </Grid2>
      </Container>
    </header>
  );
};

export default Header;
