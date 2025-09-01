import { Box, Typography, Chip, Paper } from "@mui/material";
import Divider from '@mui/material/Divider';
import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import ProjectDescription from "./ProjectDescription";
import { useTranslation } from 'react-i18next';

import "./ProjectPopup.css"

const ProjectPopup = ({ project, onClose }) => {
    const { t } = useTranslation();

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const categoryColors = {
        "languages": "var(--yellow-color)",
        "front-end-frameworks": "var(--magenta-color)",
        "styles": "var(--blue-color)",
        "back-end-frameworks": "var(--green-color)",
        "databases": "var(--orange-color)",
        "development-tools": "var(--tale-color)",
        "design-tools": "var(--neon-color)",
        "e-commerce-platforms": "var(--purple-color)",
        "themes": "var(--pink-color)",
        "payment-systems": "var(--black-color)",
        "integration-tools": "var(--strong-blue-color)",
        "features": "var(--lime-color)"
    };

    return (
        <Paper className="project-popup-container">
            <Box className="project-popup-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                        lg: '3rem',
                        xl: '3.2rem',
                    },
                }}>
                    {project.name}
                </Typography>
                <CloseIcon className="project-popup-close-button" onClick={onClose} sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '4rem',
                        lg: '4rem',
                        xl: '4rem',
                    }, cursor: "pointer"
                }} />
            </Box>
            <Divider className="project-popup-divider" sx={{ margin: "1rem 0", border: "3px solid black" }} />
            <Box className="project-popup-content">
                <Typography variant="body1" fontFamily="var(--secondary-font)" textAlign="justify" sx={{
                    maxWidth: "95%", margin: '0 auto', fontSize: {
                        xs: '1rem',
                        sm: '1rem',
                        md: '1.5rem',
                        lg: '1.5rem',
                        xl: '2rem',
                    },
                }}>
                    <ProjectDescription description={t(project.description)} />
                </Typography>
                <img src={project.image} alt={project.name} className="project-popup-image" />
                <Box className="skills-chip-list" component="ul">
                    {Object.entries(project.skills).map(([category, skills], index) => (
                        skills.map((skill, skillIndex) => (
                            <ListItem key={skillIndex}>
                                <Chip
                                    className="skills-chip"
                                    key={skillIndex}
                                    label={skill}
                                    sx={{
                                        backgroundColor: categoryColors[category] || 'var(--default-color)',
                                        border: "3px solid black",
                                        margin: ".2rem",
                                        fontFamily: "var(--secondary-font)",
                                        fontWeight: "600",
                                        color: categoryColors[category] === 'var(--black-color)' || categoryColors[category] === 'var(--purple-color)' || categoryColors[category] === 'var(--strong-blue-color)' || categoryColors[category] === 'var(--blue-color)' ? 'white' : 'black',
                                        fontSize: {
                                            xs: '.8rem',
                                            sm: '1rem',
                                            md: '1rem',
                                            lg: '1.2rem',
                                            xl: '1.2rem',
                                        },
                                    }}
                                />
                            </ListItem>
                        ))
                    ))}
                </Box>
            </Box>
            <Divider sx={{ margin: ".5rem 0", border: "1px solid black" }} />
            <Box className="projects-footer">
                <Typography variant="body1" fontFamily="var(--secondary-font)" fontWeight="bold">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--blue-color)" }}>{t('go_to_page')}</a>
                </Typography>
                {project.repository && (
                    <Typography variant="body1" fontFamily="var(--secondary-font)" fontWeight="bold">
                        <a href={project.repository} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--magenta-color)" }}>{t('github_repository')}</a>
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}

export default ProjectPopup;