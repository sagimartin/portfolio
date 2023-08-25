import { useState, useEffect } from 'react';
import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import GrainIcon from '@mui/icons-material/Grain';

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
        case 'Sun':
            weatherIcon = <WbSunnyIcon />;
            break;
        case 'Thunderstorm':
        case 'Thunder':
        case 'Storm':
            weatherIcon = <ThunderstormIcon />;
            break;
        case 'Rain':
        case 'Rainy':
            weatherIcon = <GrainIcon />;
            break;
        default:
            weatherIcon = null;
    }

    return (
        <Box>
            <Grid container spacing={2}>
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
                    <Typography variant="h6" color="black">{weatherIcon}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Weather;
