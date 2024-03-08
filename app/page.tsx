"use client";

import ChipsBlock from "@/components/ChipsBlock";
import PokemonCard from "@/components/PokemonCard";
import { TPokemonInfo } from "@/models/PokemonInfo";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {
    const [pokemonInfo, setPokemonInfo] = useState<undefined | TPokemonInfo>();

    return (
        <Container disableGutters>
            <Grid sx={{ marginTop: "54px", gap: "12px" }} container>
                <Grid item xs>
                    <ChipsBlock setPokemonInfo={setPokemonInfo} />
                </Grid>
                <Grid item xs>
                    <PokemonCard pokemonInfo={pokemonInfo} />
                </Grid>
            </Grid>
        </Container>
    );
}
