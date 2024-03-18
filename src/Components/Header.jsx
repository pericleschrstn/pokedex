import React from "react";
import Logo from "../assets/logotipo.svg?react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../App";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = () => {
  function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {theme.palette.mode} tema
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    );
  }

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
            <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <NavLink to="favoritos" aria-label="Pokedex - Favoritos" className={styles.navLink}>
                Favoritos
              </NavLink>
              <MyApp />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </header>
  );
};

export default Header;
