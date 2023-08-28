import { Box } from "@mui/material";
import Infobar from "./Infobar";
import sm from "/assets/icons/sm.svg"

export default function Footer() {
    return (
        <Box style={{ width: "100%", backgroundColor: "#c0c0c0", borderTop: "3px solid darkgray", padding: "0 .5rem", display: "flex", justifyContent: 'space-between', alignItems: 'center', cursor: "default" }}>
            <Box><img className="start-icon" src={sm} style={{ width: "3rem", display: "flex", alignItems: "center" }} /></Box>
            <Infobar />
        </Box>
    );
}

