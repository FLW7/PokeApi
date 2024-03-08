import { Typography, styled } from "@mui/material";

const LogoIcon = () => {
    const LogoIcon = styled(Typography)(() => ({
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "12px",
        textTransform: "uppercase",
        border: "1px solid white",
        width: "fit-content",
        padding: "7px",
        color: "white",
    }));

    return <LogoIcon>Покемоны API</LogoIcon>;
};

export default LogoIcon;
