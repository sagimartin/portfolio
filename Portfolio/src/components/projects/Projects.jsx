import { useState } from 'react';
import { Box, Typography, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ProjectPopup from './ProjectPopup';

import projectsData from '../../data/projects.json';
import folder from "/assets/icons/folder.svg";

import "./Projects.css";

export default function Projects({ onClose }) {
    const [showProjects, setShowProjects] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showProjectPopup, setShowProjectPopup] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowProjectPopup(true);
    };

    const handleProjectPopupClose = () => {
        setShowProjectPopup(false);
        setSelectedProject(null);
    };

    return (
        <Box className={`projects-container ${showProjects ? 'open' : 'closed'}`}>
            <Box className="projects-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '3rem',
                        lg: '3rem',
                        xl: '3.2rem',
                    },
                }}>
                    {"<Projects/>"}
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
            <Box className="projects-list">
                {projectsData.projects.map((project, index) => (
                    <Box
                        key={index}
                        className="project-box"
                        onClick={() => handleProjectClick(project)}
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
            <Modal
                className='modal'
                open={showProjectPopup}
                onClose={handleProjectPopupClose}
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                BackdropComponent={null}
            >
                <ProjectPopup project={selectedProject} onClose={handleProjectPopupClose} />
            </Modal>
        </Box>
    );
}
