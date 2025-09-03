import { Box, Paper, Typography, List, ListItem } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { weatherCityFontSizes, weatherTemperatureFontSizes, weatherLastUpdateFontSizes, weatherListItemFontSizes, weatherIconHugeFontSizes } from "../../styles/typography";

import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const WeatherPopup = ({ onClose, weatherData, temperatureInCelsius, weatherIcon }) => {
    const { t } = useTranslation();

    const { name, main, wind, sys, dt, weather } = weatherData;

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
                        <Typography fontFamily="var(--secondary-font)" sx={{ fontSize: weatherCityFontSizes }} fontWeight="bold" color="var(--blue-color)" textAlign="center">
                            {formatCityName(weatherData.name)}
                        </Typography>
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem" }}>
                            <Box style={{ display: "flex", justifyContent: "center" }} sx={{ fontSize: weatherIconHugeFontSizes }}>{weatherIcon}</Box>
                            <Typography fontFamily="var(--secondary-font)" sx={{ fontSize: weatherTemperatureFontSizes }} fontWeight="bold" color="black" textAlign="center">
                                {temperatureInCelsius}°C
                            </Typography>
                        </Box>
                        <Typography fontFamily="var(--secondary-font)" fontWeight="bold" color="var(--magenta-color)" textAlign="center">
                            {t(weather[0].description.replace(/ /g, "_").toLowerCase())}
                        </Typography>

                        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: ".5rem", color: "darkslategrey" }}>
                            <Typography variant="h7" fontFamily="var(--secondary-font)" fontWeight="600" >
                                {`${t('max_temp')} ${Math.round(weatherData.main.temp_max - 273.15)}°C`}
                            </Typography>
                            <ImportExportIcon />
                            <Typography fontFamily="var(--secondary-font)" fontWeight="600">
                                {`${t('min_temp')} ${Math.round(weatherData.main.temp_min - 273.15)}°C`}
                            </Typography>
                        </Box>
                    </Box>
                    <List >
                        <ListItem style={listItemStyle} sx={{ fontSize: weatherListItemFontSizes }}>
                            <ThermostatAutoIcon style={{ color: 'red' }} />
                            {`${t('feels_like')}: ${Math.round(weatherData.main.feels_like - 273.15)}°C`}
                        </ListItem>
                        <ListItem style={listItemStyle} sx={{ fontSize: weatherListItemFontSizes }}>
                            <OpacityIcon style={{ color: 'aqua' }} />
                            {`${t('humidity')}: ${weatherData.main.humidity}%`}
                        </ListItem>
                        <ListItem style={listItemStyle} sx={{ fontSize: weatherListItemFontSizes }}>
                            <AirIcon style={{ color: 'blue' }} />
                            {`${t('wind')}: ${convertMetersPerSecondToKilometersPerHour(weatherData.wind.speed)} km/h`}
                        </ListItem>
                        <ListItem style={listItemStyle} sx={{ fontSize: weatherListItemFontSizes }}>
                            <SolarPowerIcon style={{ color: 'khaki' }} />
                            {`${t('sunrise')}: ${formatTime(weatherData.sys.sunrise)}`}
                        </ListItem>
                        <ListItem style={listItemStyle} sx={{ fontSize: weatherListItemFontSizes }}>
                            <WbTwilightIcon style={{ color: 'orange' }} />
                            {`${t('sunset')}: ${formatTime(weatherData.sys.sunset)}`}
                        </ListItem>
                    </List>
                    <Typography fontFamily="var(--secondary-font)" sx={{ fontSize: weatherLastUpdateFontSizes }} fontWeight="600" color="var(--tale-color)">
                        {`${t('last_update')}: ${dt ? formatTime(dt) : 'N/A'}`}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default WeatherPopup;
