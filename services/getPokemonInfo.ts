import { TPokemonInfo } from "@/models/PokemonInfo";
import axios from "axios";

export const getPokemonInfo = async (
    link: string
): Promise<TPokemonInfo | undefined> => {
    try {
        const response = await axios.get(link);
        const { id, height, name, location_area_encounters, stats } =
            response.data;

        let attack = 0;
        stats.forEach((stat: any) => {
            if (stat.stat.name === "attack") {
                attack = stat.base_stat;
            }
        });

        const episodesResponse = await axios.get(location_area_encounters);
        const episodesData = episodesResponse.data;
        const episodeCount = episodesData.length;

        const imageUrl =
            response.data.sprites.other["official-artwork"].front_default;

        return { id, height, name, episodeCount, attack, imageUrl };
    } catch (error) {
        console.error("Error fetching pokemon info:", error);
        return undefined;
    }
};
