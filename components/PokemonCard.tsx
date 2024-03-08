"use client";

import { TPokemonInfo } from "@/models/PokemonInfo";
import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

type TPokemonCardProps = {
    pokemonInfo: undefined | TPokemonInfo;
};

const PokemonCard = ({ pokemonInfo }: TPokemonCardProps) => {
    const CardPoke = styled(Card)(() => ({
        borderRadius: "0",
        "& .MuiCardContent-root:last-child": {
            paddingBottom: "16px",
        },
    }));

    const DescText = styled(Typography)(() => ({
        fontSize: "17px",
        fontWeight: 400,
        lineHeight: "150%",
    }));

    return pokemonInfo ? (
        <CardPoke sx={{ bgcolor: "black" }}>
            <CardContent
                sx={{
                    padding: "44px 44px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "44px",
                    }}
                >
                    <Typography
                        variant="h3"
                        color={"text.secondary"}
                        sx={{
                            fontWeight: 600,
                            lineHeight: "100%",
                            textTransform: "capitalize",
                        }}
                    >
                        {pokemonInfo.name}
                    </Typography>
                    <Image
                        src={pokemonInfo.imageUrl}
                        alt="touch_icon"
                        width={396}
                        height={200}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                    <Box>
                        <DescText color={"text.secondary"}>
                            Снялся в {pokemonInfo.episodeCount} сериях
                        </DescText>
                        <DescText color={"text.secondary"}>
                            Id: {pokemonInfo.id}
                        </DescText>
                        <DescText color={"text.secondary"}>
                            height: {pokemonInfo.height}
                        </DescText>
                        <DescText color={"text.secondary"}>
                            attack: {pokemonInfo.attack}
                        </DescText>
                    </Box>
                </Box>
            </CardContent>
        </CardPoke>
    ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
                variant="h5"
                color={"text.primary"}
                sx={{
                    fontWeight: 600,
                    lineHeight: "100%",
                    textTransform: "capitalize",
                }}
            >
                Выберите покемона
            </Typography>
        </Box>
    );
};

export default PokemonCard;
