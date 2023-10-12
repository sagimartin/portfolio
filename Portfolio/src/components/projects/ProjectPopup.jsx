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
        "front-end-frameworks": "var(--magenta-color)",
        "styles": "var(--blue-color)",
        "back-end-frameworks": "var(--green-color)",
        "development-tools": "var(--tale-color)",
        "design-tools": "var(--neon-color)",
        "databases": "var(--orange-color)",
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
            <Divider sx={{ margin: "1rem 0", border: "3px solid black" }} />
            <Box className="project-popup-content">
                <Typography variant="body1" fontFamily="var(--secondary-font)" textAlign="justify" style={{ maxWidth: "95%", margin: '0 auto', }}>
                    {project.description}
                </Typography>
                <img src={project.image} alt={project.name} className="project-popup-image" />
                <Typography variant="h6" fontFamily="var(--secondary-font)" fontWeight="bold" style={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                        md: '2rem',
                        lg: '3rem',
                        xl: '3.2rem',
                    }, margin: "0 auto"
                }}> /// Stack /// </Typography>
                <Box className="skills-chip-list" component="ul">
                    {Object.entries(project.skills).map(([category, skills], index) => (
                        <ListItem key={index}>
                            {skills.map((skill, skillIndex) => (
                                <Chip
                                    className="skills-chip"
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
        </Paper>
    );
}

export default ProjectPopup;
