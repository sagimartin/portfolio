import { Box } from "@mui/material";
import Clock from "./Clock";
import sm from "/assets/icons/sm.svg"

export default function Footer() {
    return (
        <Box sx={{ width: "100%", padding: ".5rem", backgroundColor: "#C0C0C0", borderTop: "3px solid darkgray", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "default" }}>
            <Box><img src={sm} style={{ width: "3rem", marginRight: "1rem" }} /></Box>
            <Clock />
        </Box>
    );
}

