"use client";

import { fetchPokemons } from "@/services/getPokemonsChips";
import { Box, CircularProgress, Typography } from "@mui/material";
import PokemonChip from "./PokemonChip";
import { useEffect, useState } from "react";
import { TPokemonName } from "@/models/PokemonName";
import { getPokemonInfo } from "@/services/getPokemonInfo";
import { TPokemonInfo } from "@/models/PokemonInfo";

type TChipsBlockProps = {
    setPokemonInfo: (info: TPokemonInfo) => void;
};

const ChipsBlock = ({ setPokemonInfo }: TChipsBlockProps) => {
    const [pokemons, setPokemons] = useState<TPokemonName[]>();

    const getPokemons = async () => {
        const result = await fetchPokemons();
        if (result) setPokemons(result);
    };

    const chipClickHandler = async (url: string) => {
        const result = await getPokemonInfo(url);

        if (result) setPokemonInfo(result);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <Box
            display={"grid"}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 6px",
            }}
        >
            {pokemons ? (
                pokemons.length ? (
                    pokemons.map((item, key) => {
                        return (
                            <PokemonChip
                                key={key}
                                name={item.name}
                                url={item.url}
                                clickHandler={chipClickHandler}
                            />
                        );
                    })
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Typography color="text.primary">
                            Ничего не найдено
                        </Typography>
                    </Box>
                )
            ) : (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};

export default ChipsBlock;
