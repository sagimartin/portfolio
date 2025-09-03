import { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next';
import { headerFontSizes, iconFontSizes, sectionTitleFontSizes, chipLargeFontSizes } from "../../styles/typography";
import CloseIcon from '@mui/icons-material/Close';

import categories from "../../data/skills.json";

import "./Skills.css"

export default function Skills({ onClose }) {
    const { t } = useTranslation();
    const [showSkills, setShowSkills] = useState(true);

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    return (
        <Box className={`skills-container ${showSkills ? 'open' : 'closed'}`}>
            <Box className="skills-header">
                <Typography className="skills-title"
                    variant="h4"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600" sx={{ fontSize: headerFontSizes }}
                >
                    {t("skills_title")}
                </Typography>
                <CloseIcon className="project-popup-close-button" onClick={onClose} sx={{
                    fontSize: iconFontSizes,
                    cursor: "pointer"
                }} />
            </Box>
            <Box className="skills-list">
                {Object.entries(categories).map(
                    ([categoryKey, categoryData], categoryIndex) => (<Box key={categoryIndex}>
                        <Typography
                            variant="h4"
                            fontFamily="var(--secondary-font)"
                            fontWeight="600"
                            sx={{
                                "&:hover": {
                                    color: "black",
                                },
                                fontSize: sectionTitleFontSizes,
                            }}
                        >
                            {t(categoryKey)}
                        </Typography>
                        <Box className="chip-list" component="ul">
                            {Object.entries(categoryData.skills).map(([label], skillIndex) => (
                                <ListItem key={skillIndex}>
                                    <Chip className="chip"
                                        label={label}
                                        sx={{
                                            backgroundColor: categoryData.color,
                                            border: "3px solid black",
                                            fontFamily: "var(--secondary-font)",
                                            fontWeight: "600",
                                            fontSize: chipLargeFontSizes,
                                            '@media (min-width: 1040px)': {
                                                padding: '1rem',
                                            },
                                            '@media (min-width: 1340px)': {
                                                padding: '1.2rem',
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </Box>
                    </Box>
                    ))}
            </Box>
        </Box>
    );
}
