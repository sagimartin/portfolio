import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, createTheme, responsiveFontSizes, Modal } from "@mui/material";
import Footer from "./footer/Footer";

import AboutPopup from "./about/AboutPopup";
import aboutData from "../data/about.json";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

import aboutIcon from "/assets/icons/about.svg";
import cvIcon from "/assets/icons/cv.svg";
import githubIcon from "/assets/icons/github.svg";
import linkedinIcon from "/assets/icons/linkedin.svg";
import mailIcon from "/assets/icons/mail.svg";
import projectsIcon from "/assets/icons/projects.svg";
import skillsIcon from "/assets/icons/skills.svg";

import "./DesktopUI.css";
import Welcome from './welcome/Welcome';

export default function DesktopUI() {
    const { t } = useTranslation();
    const [showProjectsModal, setShowProjectsModal] = useState(false);
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [showAboutPopup, setShowAboutPopup] = useState(false);

    const theme = responsiveFontSizes(createTheme());

    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    const handleProjectsModalOpen = () => {
        setShowProjectsModal(true);
    };

    const handleSkillsModalOpen = () => {
        setShowSkillsModal(true);
    };

    return (
        <Box className="desktop-ui-container">
            <Welcome />
            <Box className="content-container">
                <Modal
                    className="modal"
                    open={showProjectsModal}
                    onClose={() => setShowProjectsModal(false)}
                    aria-labelledby="projects-modal-title"
                    aria-describedby="projects-modal-description"
                    BackdropComponent={null}
                >
                    <Projects onClose={() => setShowProjectsModal(false)} />
                </Modal>
                <Modal
                    className="modal"
                    open={showSkillsModal}
                    onClose={() => setShowSkillsModal(false)}
                    aria-labelledby="skills-modal-title"
                    aria-describedby="skills-modal-description"
                    BackdropComponent={null}
                >
                    <Skills onClose={() => setShowSkillsModal(false)} />
                </Modal>
                <Box className="icon-list">
                    <Box className="mail icon-box">
                        <a href="mailto:hello@sagimartin.com?subject=Hi%20there!" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <img src={mailIcon} alt="mail icon" className="icon" />
                            <Typography
                                variant="h5"
                                className="icon-text"
                                fontFamily="var(--secondary-font)"
                                fontWeight="600"
                                theme={theme}
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem',
                                    },
                                }}
                            >
                                {t('mail')}
                            </Typography>
                        </a>
                    </Box>
                    <Box className="projects icon-box" onClick={handleProjectsModalOpen}>
                        <img src={projectsIcon} alt="projects icon" className="icon" />
                        <Typography
                            variant="h5"
                            className="icon-text"
                            fontFamily="var(--secondary-font)"
                            fontWeight="600"
                            theme={theme}
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                        >
                            {t('projects')}
                        </Typography>
                    </Box>
                    <Box className="skills icon-box" onClick={handleSkillsModalOpen}>
                        <img src={skillsIcon} alt="skills icon" className="icon" />
                        <Typography
                            variant="h5"
                            className="icon-text"
                            fontFamily="var(--secondary-font)"
                            fontWeight="600"
                            theme={theme}
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                        >
                            {t('skills')}
                        </Typography>
                    </Box>
                    <Box className="linkedin icon-box">
                        <a href="https://www.linkedin.com/in/sagimartin/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <img src={linkedinIcon} alt="linkedin icon" className="icon" />
                            <Typography
                                variant="h5"
                                className="icon-text"
                                fontFamily="var(--secondary-font)"
                                fontWeight="600"
                                theme={theme}
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem',
                                    },
                                }}
                            >
                                LinkedIn
                            </Typography>
                        </a>
                    </Box>
                    <Box className="github icon-box">
                        <a href="https://github.com/sagimartin" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <img src={githubIcon} alt="github icon" className="icon" />
                            <Typography
                                variant="h5"
                                className="icon-text"
                                fontFamily="var(--secondary-font)"
                                fontWeight="600"
                                theme={theme}
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem',
                                    },
                                }}
                            >
                                GitHub
                            </Typography>
                        </a>
                    </Box>
                    <Box className="cv icon-box">
                        <a href="https://drive.google.com/file/d/1OwqnyrRkqY0UUMYh-DG_amTvR6Bc5XFY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <img src={cvIcon} alt="CV icon" className="icon" />
                            <Typography
                                variant="h5"
                                className="icon-text"
                                fontFamily="var(--secondary-font)"
                                fontWeight="600"
                                theme={theme}
                                sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem',
                                    },
                                }}
                            >
                            {t('cv')}
                            </Typography>
                        </a>
                    </Box>
                    <Box className="aboutme icon-box" onClick={() => setShowAboutPopup(true)}>
                        <img src={aboutIcon} alt="about icon" className="icon" />
                        <Typography
                            variant="h5"
                            className="icon-text"
                            fontFamily="var(--secondary-font)"
                            fontWeight="600"
                            theme={theme}
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                        >
                            {t('about')}
                        </Typography>
                    </Box>
                </Box>
                <Footer />
                {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
            </Box>
        </Box>
    );
}