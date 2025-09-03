import { Box } from "@mui/material";
import Weather from "./Weather";
import Clock from "./Clock";
import wifi from "/assets/icons/wifi.svg";
// import LanguageSwitcher from "./LanguageSwitcher";
// import BatteryStatus from "./BatteryStatus";

export default function Infobar() {
  return (
    <Box
      className="infobar-container"
      sx={{
        color: "white",
        border: "3px inset #fff",
        margin: ".5rem",
        padding: ".25rem .5rem",
        display: "inline-flex",   
        alignItems: "center",
        gap: ".5rem",
        whiteSpace: "nowrap",     
      }}
    >
      <Weather />
      <img
        className="wifi-logo"
        src={wifi}
        alt="wifi logo"
        style={{ maxWidth: "2rem" }}
      />
      <Clock />
      {/* <BatteryStatus /> */}
      {/* <LanguageSwitcher /> */}
    </Box>
  );
}
