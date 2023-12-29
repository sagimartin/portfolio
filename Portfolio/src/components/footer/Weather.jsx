import { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Popover } from '@mui/material';
import WeatherPopup from './WeatherPopup';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Weather = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleBoxClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            const APIKey = import.meta.env.VITE_WEATHER_API_KEY;
            try {
                if (userLocation) {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${APIKey}`
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

    const { weather, main } = weatherData;
    const condition = weather[0].description.toLowerCase();
    const temperatureInCelsius = Math.round(main.temp - 273.15);

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
        <>
            <Box onClick={handleBoxClick} style={{ display: 'flex', alignItems: "center", gap: ".5rem", cursor: "pointer" }}>
                <Typography variant="h6" fontFamily="var(--secondary-font)" sx={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.2rem',
                        md: '1.5rem',
                        lg: '1.5rem',
                        xl: '1.8rem',
                    },
                }}>{temperatureInCelsius}°C</Typography>
                {weatherIcon}
            </Box>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        borderRadius: 0,
                        boxShadow: "none"
                    },
                }}
            >
                <WeatherPopup onClose={handleClose} weatherData={weatherData} />
            </Popover>
        </>
    );
};

export default Weather;
