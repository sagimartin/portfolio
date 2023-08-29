import { Box, Typography, Chip, Paper } from "@mui/material";
import Divider from '@mui/material/Divider';
import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';

import "./ProjectPopup.css"

const ProjectPopup = ({ project, onClose }) => {

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const categoryColors = {
        "languages": "var(--yellow-color)",
        "frontend-libraries": "var(--magenta-color)",
        "backend-libraries": "var(--green-color)",
        "development": "var(--tale-color)",
        "design": "var(--neon-color)",
        "database": "var(--orange-color)",
    };

    return (
        <Paper className="project-popup-container">
            <Box className="project-popup-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600">
                    {project.name}
                </Typography>
                <CloseIcon className="project-popup-close-button" onClick={onClose} sx={{
                    fontSize: {
                        xs: '3rem',
                        sm: '3.5rem',
                        md: '4.5rem',
                        lg: '5rem',
                        xl: '5.5rem',
                    },
                }} />
            </Box>
            <Divider sx={{ margin: "1rem 0", border: "3px solid black" }} />
            <Box className="project-popup-content">
                <Typography variant="body1" fontFamily="var(--secondary-font)" textAlign="justify">
                    {project.description}
                </Typography>
                <img src={project.image} alt={project.name} className="project-popup-image" />
                <Box className="skills-chip-list" component="ul">
                    {Object.entries(project.skills).map(([category, skills], index) => (
                        <ListItem key={index}>
                            {skills.map((skill, skillIndex) => (
                                <Chip
                                    key={skillIndex}
                                    label={skill}
                                    sx={{
                                        backgroundColor: categoryColors[category],
                                        border: "3px solid black",
                                        marginRight: ".5rem",
                                        fontFamily: "var(--secondary-font)",
                                        fontWeight: "600",
                                        fontSize: {
                                            xs: '.8rem',
                                            sm: '1rem',
                                            md: '1rem',
                                            lg: '1.2rem',
                                            xl: '1.2rem',
                                        },
                                    }}
                                />
                            ))}
                        </ListItem>
                    ))}
                </Box>
                <Divider sx={{ margin: ".5rem 0", border: "1px solid black" }} />
                <Box className="projects-footer">
                    <Typography variant="body1" fontFamily="var(--secondary-font)" fontWeight="bold" >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--blue-color)" }}>Go to page</a>
                    </Typography>
                    <Typography variant="body1" fontFamily="var(--secondary-font)" fontWeight="bold">
                        <a href={project.repository} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--magenta-color)" }}>GitHub repository</a>
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}

export default ProjectPopup;
