import { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import categories from "../../data/skills.json";

import "./Skills.css"

export default function Skills({ onClose }) {
    const [showSkills, setShowSkills] = useState(true)

    const handleCloseSkills = () => {
        setShowSkills(false);
        onClose();
    }

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    return (
        <Box
            className={`skills-container ${showSkills ? 'open' : 'closed'}`}>
            <Box
                className="skills-header">
                <Typography className="skills-title"
                    variant="h4"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600" sx={{
                        fontSize: {
                            xs: '1.2rem',
                            sm: '1.7rem',
                            md: '2rem',
                            lg: '2.2rem',
                            xl: '2.2rem',
                        },
                    }}
                >
                    {"<Skills/>"}
                </Typography>
                <Typography onClick={handleCloseSkills} className="skills-close-button"
                    variant="h4"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600" sx={{
                        fontSize: {
                            xs: '1.2rem',
                            sm: '1.7rem',
                            md: '2rem',
                            lg: '2.2rem',
                            xl: '2.2rem',
                        },
                    }}
                >
                    X
                </Typography>
            </Box>
            <Box className="skills-list">
                {Object.entries(categories).map(
                    ([categoryName, categoryData], categoryIndex) => (<Box key={categoryIndex}>
                        <Typography
                            variant="h4"
                            fontFamily="var(--secondary-font)"
                            fontWeight="600"
                            sx={{
                                "&:hover": {
                                    color: "black",
                                },
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '1.7rem',
                                    md: '2rem',
                                    lg: '2.2rem',
                                    xl: '2.2rem',
                                }
                            }}
                        >
                            {categoryName}
                        </Typography>
                        <Box className="chip-list"
                            component="ul"
                        >
                            {Object.entries(categoryData.skills).map(([label], skillIndex) => (
                                <ListItem key={skillIndex}>
                                    <Chip className="chip"
                                        label={label}
                                        sx={{
                                            backgroundColor: categoryData.color,
                                            border: "3px solid black",
                                            padding: "1rem",
                                            fontFamily: "var(--secondary-font)",
                                            fontWeight: "600",
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.2rem',
                                                md: '1.6rem',
                                                lg: '1.8rem',
                                                xl: '1.8rem',
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
