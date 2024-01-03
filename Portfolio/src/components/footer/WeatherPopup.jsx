import { Box, Paper, Typography, List, ListItem } from "@mui/material"

import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import ImportExportIcon from '@mui/icons-material/ImportExport';


const WeatherPopup = ({ onClose, weatherData, temperatureInCelsius, weatherIcon }) => {

    const { name, main, wind, sys, dt, weather, description } = weatherData;


    const formatCityName = (name) => {
        const formattedName = name.replace(/ü/g, 'u').replace(/keruelet/g, 'kerület');
        const cityAndDistrict = formattedName.replace(/([^\n]+)\n([^\n]+)/, '$1\n$2');
        return cityAndDistrict;
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        return `${hours}:${minutes.substr(-2)}`;
    };

    const convertMetersPerSecondToKilometersPerHour = (metersPerSecond) => {
        return (metersPerSecond * 3.6).toFixed(2);
    };

    const listItemStyle = {
        width: "100%",
        gap: "1rem",
        fontFamily: "var(--secondary-font)",
        fontSize: "1rem",
        fontWeight: "600",
    };

    return (
        <Box>
            <Paper
                sx={{
                    border: "3px solid darkgray",
                    borderRadius: "0",
                    maxWidth: "80dvw",
                    backgroundColor: "#E3E3E3",
                    padding: ".5rem",
                    cursor: "default"
                }}
            >
                <Box sx={{
                    minWidth: "max-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                    <Box style={{ border: "3px inset #fff", margin: ".7rem", padding: ".25rem .5rem", minWidth: "12rem" }}>
                        <Typography fontFamily="var(--secondary-font)" fontSize="1rem" fontWeight="bold" color="var(--blue-color)" textAlign="center">
                            {formatCityName(weatherData.name)}
                        </Typography>
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem" }}>
                            <Box style={{ display: "flex", justifyContent: "center", fontSize: "30rem" }}>{weatherIcon}</Box>
                            <Typography fontFamily="var(--secondary-font)" fontSize="1.2rem" fontWeight="bold" color="black" textAlign="center">
                                {temperatureInCelsius}°C
                            </Typography>
                        </Box>
                        <Typography fontFamily="var(--secondary-font)" fontWeight="bold" color="var(--magenta-color)" textAlign="center">
                            {weatherData.weather[0].description}
                        </Typography>

                        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: ".5rem", color: "darkslategrey" }}>
                            <Typography variant="h7" fontFamily="var(--secondary-font)" fontWeight="600" >
                                {` max ${Math.round(weatherData.main.temp_max - 273.15)}°C`}
                            </Typography>
                            <ImportExportIcon />
                            <Typography fontFamily="var(--secondary-font)" fontWeight="600">
                                {` min ${Math.round(weatherData.main.temp_min - 273.15)}°C`}
                            </Typography>
                        </Box>
                    </Box>
                    <List >
                        <ListItem style={listItemStyle} >
                            <ThermostatAutoIcon style={{ color: 'red' }} />
                            {`Feels like: ${Math.round(weatherData.main.feels_like - 273.15)}°C`}
                        </ListItem>
                        <ListItem style={listItemStyle} >
                            <OpacityIcon style={{ color: 'aqua' }} />
                            {`Humidity: ${weatherData.main.humidity}%`}
                        </ListItem>
                        <ListItem style={listItemStyle} >
                            <AirIcon style={{ color: 'blue' }} />
                            {`Wind: ${convertMetersPerSecondToKilometersPerHour(weatherData.wind.speed)} km/h`}
                        </ListItem>
                        <ListItem style={listItemStyle} >
                            <SolarPowerIcon style={{ color: 'khaki' }} />
                            {`Sunrise: ${formatTime(weatherData.sys.sunrise)}`}
                        </ListItem>
                        <ListItem style={listItemStyle} >
                            <WbTwilightIcon style={{ color: 'orange' }} />
                            {`Sunset: ${formatTime(weatherData.sys.sunset)}`}
                        </ListItem>
                    </List>
                    <Typography fontFamily="var(--secondary-font)" fontSize=".8rem" fontWeight="600" color="var(--tale-color)">
                        {`Last update: ${dt ? formatTime(dt) : 'N/A'}`}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default WeatherPopup