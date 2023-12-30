import { Box } from "@mui/material";
import Weather from "./Weather";
import Clock from "./Clock";
import wifi from "/assets/icons/wifi.svg"
// import BatteryStatus from "./BatteryStatus";


export default function Infobar() {
    return (
        <Box className="infobar-container" style={{ color: "white", border: "3px inset #fff", margin: ".5rem", padding: ".25rem .5rem", display: 'flex', alignItems: "center", gap: ".5rem" }}>
            <Weather />
            <img className="wifi-logo" src={wifi} alt="wifi logo" style={{ maxWidth: "2rem" }} />
            <Clock />
            {/* <BatteryStatus/> */}
        </Box>
    )
}