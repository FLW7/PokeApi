import { TPokemonName } from "./PokemonName";

export type TPokemonsList = {
    count: number;
    next: string | null;
    previus: string | null;
    results: TPokemonName[];
};
