import { Box } from "@mui/material";
import Clock from "./Clock";
import sm from "/assets/icons/sm.svg"

import "./Footer.css"

export default function Footer() {
    return (
        <Box className="footer-container">
            <Box><img className="start-icon" src={sm} /></Box>
            <Clock />
        </Box>
    );
}

