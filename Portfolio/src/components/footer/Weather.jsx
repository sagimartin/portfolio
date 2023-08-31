import { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Weather = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                if (userLocation) {
                    const response = await fetch(
                        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${userLocation.lat},${userLocation.lon}`
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
    const condition = current.condition.text.toLowerCase();

    let weatherIcon;

    if (condition.includes('sunny') || condition.includes('clear sky')) {
        weatherIcon = <WbSunnyIcon style={{ color: "yellow" }} />;
    } else if (condition.includes('clouds')) {
        weatherIcon = <CloudIcon style={{ color: "white" }} />;
    } else if (condition.includes('thunderstorm')) {
        weatherIcon = <ThunderstormIcon style={{ color: "black" }} />;
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
        weatherIcon = <WaterDropIcon style={{ color: "blue" }} />;
    } else if (condition.includes('mist') || condition.includes('haze') || condition.includes('fog') || condition.includes('smoke')) {
        weatherIcon = <GrainIcon style={{ color: "white" }} />;
    } else if (condition.includes('snow') || condition.includes('sleet')) {
        weatherIcon = <AcUnitIcon style={{ color: "white" }} />;
    } else {
        weatherIcon = null;
    }

    return (
        <Box style={{ display: 'flex', alignItems: "center", gap: ".5rem" }}>
            <Typography variant="h6" fontFamily="var(--secondary-font)" sx={{
                fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.5rem',
                    lg: '1.5rem',
                    xl: '1.8rem',
                },
            }}>{current.temp_c}°C</Typography>
            <Typography variant="h6" display="flex">{weatherIcon}</Typography>
        </Box>
    );
};

export default Weather;
