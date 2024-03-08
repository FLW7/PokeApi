import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import LogoIcon from "./LogoIcon";
import touchIcon from "@/public/icons/touchIcon.svg";
import { Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar
            component="nav"
            position="relative"
            color="transparent"
            elevation={0}
        >
            <Toolbar disableGutters sx={{ gap: "20px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <LogoIcon />
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Image
                        src={touchIcon}
                        alt="touch_icon"
                        width={24}
                        height={30}
                        priority
                    />
                    <Typography
                        color="text.primary"
                        sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            fontWeight: 500,
                        }}
                    >
                        Нажмите на
                        <br /> нужного Покемона
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
