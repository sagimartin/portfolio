import { useState, useEffect } from 'react';
import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const API_KEY = '1f6c86b0057c460290a52904232508';

const Weather = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                if (userLocation) {
                    const response = await fetch(
                        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userLocation.lat},${userLocation.lon}`
                    );
                    const data = await response.json();
                    setWeatherData(data);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [userLocation]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const newLocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                setUserLocation(newLocation);
                setWeatherData(null);
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    }, []);

    if (!userLocation || !weatherData) {
        return (
            <Box style={{ textAlign: 'center' }}>
                <CircularProgress size={20} />
            </Box>
        );
    }

    const { current } = weatherData;
    let weatherIcon;

    switch (current.condition.text) {
        case 'Sunny':
        case 'Clear sky':
            weatherIcon = <WbSunnyIcon style={{ color: "yellow" }} />;
            break;
        case 'Clouds':
            weatherIcon = <CloudIcon style={{ color: "white" }} />;
            break;
        case 'Thunderstorm':
            weatherIcon = <ThunderstormIcon style={{ color: "black" }} />;
            break;
        case 'Rain':
        case 'Drizzle':
            weatherIcon = <WaterDropIcon style={{ color: "blue" }} />;
            break;
        case 'Mist':
        case 'Haze':
        case 'Fog':
        case 'Smoke':
            weatherIcon = <GrainIcon style={{ color: "white" }} />;
            break;
        case 'Snow':
        case 'Sleet':
            weatherIcon = <AcUnitIcon style={{ color: "white" }} />;
            break;
        default:
            weatherIcon = null;
    }

    return (
        <Box>
            <Grid container spacing={4} style={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={6}>
                    <Typography variant="h6" fontFamily="var(--secondary-font)" sx={{
                        fontSize: {
                            xs: '1rem',
                            sm: '1.2rem',
                            md: '1.5rem',
                            lg: '1.5rem',
                            xl: '1.8rem',
                        },
                    }}>{current.temp_c}°C</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" display="flex">{weatherIcon}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Weather;
