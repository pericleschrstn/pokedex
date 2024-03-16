import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export async function getPokemons() {
  try {
    const response = await axios.get("pokemon", {
      params: {
        limit: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Falha na requisição: ", error);
    return [];
  }
}

export async function getPokemonsDetails(pokemonUrl) {
  try {
    const response = await axios.get(pokemonUrl);
    return response.data;
  } catch (error) {
    console.log("Falha na requisão da imagem: ", error);
    return null;
  }
}
