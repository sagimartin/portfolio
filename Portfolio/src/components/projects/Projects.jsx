import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import projectsData from '../../data/projects.json';
import folder from "/assets/icons/folder.svg";

import "./Projects.css";

export default function Projects({ onClose }) {
    const [showProjects, setShowProjects] = useState(true);

    const handleCloseProjects = () => {
        setShowProjects(false);
        onClose();
    };

    return (
        <Box className={`projects-container ${showProjects ? 'open' : 'closed'}`}>
            <Box className="projects-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{
                    fontSize: {
                        xs: '1.2rem',
                        sm: '1.7rem',
                        md: '2rem',
                        lg: '2.2rem',
                        xl: '2.2rem',
                    },
                }}>
                    {"<Projects/>"}
                </Typography>
                <Typography onClick={handleCloseProjects} variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-close-button" sx={{
                    fontSize: {
                        xs: '1.2rem',
                        sm: '1.7rem',
                        md: '2rem',
                        lg: '2.2rem',
                        xl: '2.2rem',
                    },
                }}>
                    X
                </Typography>
            </Box>
            <Box className="projects-list">
                {projectsData.projects.map((project, index) => (
                    <Box
                        key={index}
                        className="project-box"
                    >
                        <img src={folder} alt="folder icon" className="folder-icon" />
                        <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="project-name" sx={{
                            fontSize: {
                                xs: '1rem',
                                sm: '1.2rem',
                                md: '1.7rem',
                                lg: '2rem',
                                xl: '2.2rem',
                            },
                        }}>
                            {project.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

