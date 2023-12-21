import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function BatteryStatus() {
    const [batteryIcon, setBatteryIcon] = useState("");
    const [batteryLevel, setBatteryLevel] = useState("");
    const [isCharging, setIsCharging] = useState(false)

    useEffect(() => {
        const updateBattery = () => {
            navigator.getBattery().then((battery) => {
                let level = Math.floor(battery.level * 100);
                setBatteryLevel(`${level}%`);
                setIsCharging(battery.charging)

                if (level === 100) {
                    setBatteryIcon("/assets/icons/battery-5.svg");
                } else if (level <= 20 && !battery.charging) {
                    setBatteryIcon("/assets/icons/battery-1.svg");
                } else if (level <= 40) {
                    setBatteryIcon("/assets/icons/battery-2.svg");
                } else if (level <= 60) {
                    setBatteryIcon("/assets/icons/battery-3.svg");
                } else if (level <= 89) {
                    setBatteryIcon("/assets/icons/battery-4.svg");
                } else {
                    setBatteryIcon("");
                }
            });
        };

        updateBattery();

        const batteryInterval = setInterval(updateBattery, 5000);

        return () => clearInterval(batteryInterval);
    }, []);

    return (
        <Box className="battery" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: ".3rem" }}>
            {batteryIcon && <img src={batteryIcon} alt="Battery Icon" style={{ height: "2rem", width: "1rem" }} />}
            <Typography className="battery-percentage" fontFamily="var(--secondary-font)" sx={{
                fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.5rem',
                    lg: '1.5rem',
                    xl: '1.8rem',
                }, color: isCharging ? "green" : "inherit", fontWeight: isCharging ? "600" : "inherit"

            }}>{batteryLevel}</Typography>
        </Box>
    );
}
