import React from "react";
import PokemonCard from "./PokemonCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PokemonContext } from "../../PokemonContext";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Feed = () => {
  const { pokemons, setPokemons, toggleFavorite, setFavorites, handleClick, pokemonsOffset } =
    React.useContext(PokemonContext);
  const [search, setSearch] = React.useState("");
  const [selectType, setSelectType] = React.useState("");
  const [selectWeakness, setSelectWeakness] = React.useState("");

  const lowerSearch = search.toLowerCase();
  const searchPokemon = pokemons.filter((pokemon) => pokemon.name.includes(lowerSearch));

  React.useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  function handleOnChangeType({ target }) {
    setSelectType(target.value);
    filterPokemons(target.value, selectWeakness);
  }

  function handleOnChangeWeakness({ target }) {
    setSelectWeakness(target.value);
    filterPokemons(selectType, target.value);
  }

  function filterPokemons(type, weakness) {
    let filtered = pokemons;
    if (type) {
      filtered = filtered.filter((pokemon) => pokemon.types.includes(type));
    }
    if (weakness) {
      filtered = filtered.filter((pokemon) => pokemon.weakness.includes(weakness));
    }
    setPokemons(filtered);
  }

  return (
    <>
      <TextField
        label="Qual o nome do Pokémon?"
        fullWidth
        sx={{ mt: 4 }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <FormControl sx={{ marginTop: 3, minWidth: 120, marginRight: 2 }} size="small">
        <InputLabel id="select-type">Tipo</InputLabel>
        <Select labelId="select-type" id="type" value={selectType} label="Tipo" onChange={handleOnChangeType}>
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="water">Water</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ marginTop: 3, minWidth: 120 }} size="small">
        <InputLabel id="select-weakness">Fraqueza</InputLabel>
        <Select
          labelId="select-weakness"
          id="weakness"
          value={selectWeakness}
          label="Fraqueza"
          onChange={handleOnChangeWeakness}
        >
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="water">Water</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
        </Select>
      </FormControl>
      <Grid2 container spacing={4} sx={{ paddingY: 6 }} component="section">
        {pokemons.map((pokemon) => {
          if (searchPokemon.includes(pokemon)) {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} onToggleFavorite={toggleFavorite} />;
          } else {
            return null;
          }
        })}
      </Grid2>
      <Button variant="contained" sx={{ marginBottom: 2 }} onClick={() => handleClick(pokemonsOffset)}>
        Mostrar mais
      </Button>
    </>
  );
};

export default Feed;
