import { useState, useMemo } from 'react';
import { Box, Typography, Modal } from "@mui/material";
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProjectPopup from './ProjectPopup';

import projectsData from '../../data/projects.json';
import folder from "/assets/icons/folder.svg";

import "./Projects.css";

export default function Projects({ onClose }) {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [view, setView] = useState('all'); 

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowProjectPopup(true);
    };

    const handleProjectPopupClose = () => {
        setShowProjectPopup(false);
        setSelectedProject(null);
    };

    const isShopifyProject = (project) => {
        const ecommerce = project?.skills?.["e-commerce-platforms"] || [];
        return ecommerce.includes("Shopify");
    };

    const shopifyProjects = useMemo(() => projectsData.projects.filter(isShopifyProject), []);
    const nonShopifyProjects = useMemo(() => projectsData.projects.filter(p => !isShopifyProject(p)), []);
    const visibleProjects = view === 'shopify' ? shopifyProjects : nonShopifyProjects;
    const headerTitle = view === 'shopify' ? '<Shopify/>' : t("projects_title");

    return (
        <Box className={`projects-container`}>
            {/* Header */}
            <Box className={`projects-header ${view === 'shopify' ? 'shopify' : ''}`}>
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                        lg: '3rem',
                        xl: '3.2rem',
                    },
                }}>
                    {headerTitle}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {view === 'shopify' && (
                        <ArrowBackIcon
                            className="projects-back-button"
                            onClick={() => setView('all')}
                            sx={{
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.5rem',
                                    md: '4rem',
                                    lg: '4rem',
                                    xl: '4rem',
                                },
                                mr: '0.5rem',
                            }}
                        />
                    )}
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
            </Box>
            {/* Projects list */}
            <Box className="projects-list">
                {/* Shopify folder tile in 'all' view */}
                {view === 'all' && (
                    <Box
                        key="folder-shopify"
                        className="project-box"
                        onClick={() => setView('shopify')}
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
                            Shopify
                        </Typography>
                    </Box>
                )}
                {/* Visible projects for current view */}
                {visibleProjects.map((project, index) => (
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
            {/* Project popup modal */}
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
