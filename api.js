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
    const { types } = response.data;
    const typeNames = types.map((item) => item.type.name).join(", ");
    const weakness = await getPokemonWeakness(types[0].type.url);
    return {
      types: typeNames,
      image: response.data.sprites.front_default,
      weakness,
    };
  } catch (error) {
    console.log("Falha na requisão dos detalhes: ", error);
    return null;
  }
}

export async function getPokemonWeakness(typeUrl) {
  try {
    const response = await axios.get(typeUrl);
    const damageRelations = response.data.damage_relations.double_damage_from;
    const weakness = damageRelations.map((item) => item.name).join(", ");
    return weakness;
  } catch (error) {
    console.error("Falha na requisição da fraqueza: ", error);
  }
}
