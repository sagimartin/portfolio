import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from "@mui/material";
import { headerFontSizes, iconFontSizes, heroFontSizes, subtitleFontSizes } from "../../styles/typography";
import CloseIcon from '@mui/icons-material/Close';
import squeakyToySound from "/assets/sounds/squeaky-toy.mp3";
import "./Welcome.css";

export default function Welcome() {
    const { t, i18n } = useTranslation();
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
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{ fontSize: headerFontSizes }}>
                    {t("alert_message")}
                </Typography>
                <CloseIcon onClick={() => {
                    handleVibrate();
                    playSqueakyToySound();
                }} sx={{ fontSize: iconFontSizes, cursor: "pointer" }} />
            </Box>
            <Box className="welcome-message">
                <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, color: "var(--blue-color)" }}>{t("hello")}</Typography>
                <Box className="intro-message">
                    {i18n.language === 'hu' ? (
                        <>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, backgroundColor: "yellow", padding: ".2rem .4rem" }}>{t("name")}</Typography>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, marginLeft: ".5rem" }}>*</Typography>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, marginLeft: ".5rem" }}>{t("vagyok.")}</Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes }}>{t("im")}</Typography>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, backgroundColor: "yellow", padding: ".2rem .4rem", marginLeft: ".5rem" }}>{t("name")}</Typography>
                            <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: heroFontSizes, marginLeft: ".5rem" }}>*</Typography>
                        </>
                    )}
                </Box>
                <Typography variant="h3" fontFamily="var(--secondary-font)" fontWeight="600" sx={{ fontSize: subtitleFontSizes }}>{t("description")}</Typography>
            </Box>
        </Box>
    );
}
