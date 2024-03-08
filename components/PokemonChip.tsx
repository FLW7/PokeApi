"use client";

import { TPokemonName } from "@/models/PokemonName";
import { Chip, styled } from "@mui/material";

type ClickHandlertype = {
    clickHandler: (url: string) => void;
};

type TChipProps = TPokemonName & ClickHandlertype;

const PokemonChip = ({ name, url, clickHandler }: TChipProps) => {
    const ChipPoke = styled(Chip)(() => ({
        height: "auto",
        padding: "20px",
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "500",
        borderRadius: "44px",
        "& .MuiChip-label": {
            padding: "0",
        },
    }));

    return (
        <ChipPoke
            label={name}
            color="primary"
            clickable
            onClick={() => clickHandler(url)}
        />
    );
};

export default PokemonChip;
