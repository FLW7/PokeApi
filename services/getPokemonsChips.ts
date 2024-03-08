import { TPokemonName } from "@/models/PokemonName";
import { TPokemonsList } from "@/models/PokemonsList";
import axios from "axios";

export const fetchPokemons = async (): Promise<TPokemonName[]> => {
    try {
        const response = await axios.get<TPokemonsList>(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const { results } = response.data;
        return results;
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        return [];
    }
};
