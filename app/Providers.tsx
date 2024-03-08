"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1986EC",
            dark: "#1976d2",
        },
        text: {
            primary: "#fff",
            secondary: "#A0A0A0",
        },
    },
    typography: {
        fontFamily: "Raleway, sans-serif",
    },
});

export function Providers({ children }: { children: ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
