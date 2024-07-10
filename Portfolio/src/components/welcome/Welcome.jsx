import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import squeakyToySound from "/assets/sounds/squeaky-toy.mp3";
import "./Welcome.css";

export default function Welcome() {
    const { t } = useTranslation();
    const [isVibrating, setIsVibrating] = useState(false);

    const handleVibrate = () => {
        setIsVibrating(true);

        setTimeout(() => {
            setIsVibrating(false);
        }, 300);
    };

    const playSqueakyToySound = () => {
        const audio = new Audio(squeakyToySound);
        audio.play();
    };

    return (
        <Box className={`welcome projects-container ${isVibrating ? "vibrating" : ""}`}>
            <Box className="welcome-header projects-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                    },
                }}>
                    {t("alert_message")}
                </Typography>
                <CloseIcon onClick={() => {
                    handleVibrate();
                    playSqueakyToySound();
                }} sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.2rem',
                        md: '4rem',
                    }, cursor: "pointer"
                }} />
            </Box>
            <Box className="welcome-message">
                <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.2rem',
                        md: '4rem',
                    }, color: "var(--blue-color)"
                }}>{t("hello")}</Typography>
                <Box className="intro-message">
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.2rem',
                            md: '4rem',
                        },
                    }}>{t("im")}</Typography>
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.2rem',
                            md: '4rem',
                        }, backgroundColor: "yellow", padding: ".2rem .4rem", marginLeft: ".5rem"
                    }}>{t("name")}</Typography>
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.2rem',
                            md: '4rem',
                        },
                    }}>*</Typography>
                </Box>
                <Typography variant="h3" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                        md: '2rem',
                    },
                }}>{t("description")}</Typography>
            </Box>
        </Box>
    );
}