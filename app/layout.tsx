import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./Providers";
import { Container } from "@mui/material";

export const metadata: Metadata = {
    title: "Poke Api",
    description: "info about pokemons",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Container
                        disableGutters
                        sx={{ width: "980px", margin: "100px 15px" }}
                    >
                        <Header />
                        {children}
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
