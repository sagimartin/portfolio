import { useState } from 'react';
import { Box, Typography, createTheme, responsiveFontSizes } from "@mui/material";
import Footer from "./footer/Footer";

import AboutPopup from "./about/AboutPopup";
import aboutData from "../data/about.json";
import LayerPopup from './popup-layer/PopupLayer';
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"

import hello from "/assets/images/about/hello.svg";
import aboutIcon from "/assets/icons/about.svg";
import cvIcon from "/assets/icons/cv.svg";
import githubIcon from "/assets/icons/github.svg";
import linkedinIcon from "/assets/icons/linkedin.svg";
import mailIcon from "/assets/icons/mail.svg";
import projectsIcon from "/assets/icons/projects.svg";
import skillsIcon from "/assets/icons/skills.svg";

import "./DesktopUI.css";

export default function DesktopUI() {
    const [showProjects, setShowProjects] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showAboutPopup, setShowAboutPopup] = useState(false);

    const theme = responsiveFontSizes(createTheme());


    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    const handleProjectsClose = () => {
        setShowProjects(false);
    };

    return (
        <Box className="desktop-ui-container">
            <Box className="content-container">
                <img src={hello} alt="hello svg" className="hello-image" />
                {showProjects && (
                    <LayerPopup>
                        <Projects onClose={handleProjectsClose} />
                    </LayerPopup>
                )}                {showSkills && <Skills />}
                <Box className="buttons-container">
                    <Box className="left-row">
                        <Box className="icon-box">
                            <a href="mailto:contact@sagimartin.com?subject=Hi%20there!" target="_blank"
                                rel="noopener noreferrer" className="icon-link">
                                <img src={mailIcon} alt="mail icon" className="icon" />
                                <Typography
                                    variant="h5"
                                    className="icon-text"
                                    fontFamily="var(--secondary-font)"
                                    fontWeight="600"
                                    theme={theme} sx={{
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.2rem',
                                            md: '1.7rem',
                                            lg: '2rem',
                                            xl: '2.2rem',
                                        },
                                    }}
                                >
                                    Mail.me
                                </Typography>
                            </a>
                        </Box>
                        <Box className="icon-box" onClick={() => setShowProjects(true)}>
                            <img src={projectsIcon} alt="projects icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                            >
                                Projects
                            </Typography>
                        </Box>
                        <Box className="icon-box" onClick={() => setShowSkills(true)}>
                            <img src={skillsIcon} alt="skills icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                            >
                                Skills.rar
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="middle-row">
                        <Box className="icon-box">
                            <a href="https://www.linkedin.com/in/sagimartin/" target="_blank"
                                rel="noopener noreferrer" className="icon-link">
                                <img src={linkedinIcon} alt="linkedin icon" className="icon" />
                                <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1.2rem',
                                        md: '1.7rem',
                                        lg: '2rem',
                                        xl: '2.2rem',
                                    }
                                }}

                                >
                                    LinkedIn
                                </Typography>
                            </a>
                        </Box>
                        <Box className="icon-box">
                            <a href="https://github.com/sagimartin" target="_blank"
                                rel="noopener noreferrer" className="icon-link">
                                <img src={githubIcon} alt="github icon" className="icon" />
                                <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
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
                    </Box>
                    <Box className="right-row">
                        <Box className="icon-box" onClick={() => setShowAboutPopup(true)}>
                            <img src={aboutIcon} alt="about icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                            >
                                About.me
                            </Typography>
                        </Box>
                        <Box className="icon-box">
                            <img src={cvIcon} alt="CV icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" theme={theme} sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.2rem',
                                    md: '1.7rem',
                                    lg: '2rem',
                                    xl: '2.2rem',
                                },
                            }}
                            >
                                CV.pdf
                            </Typography>
                        </Box>
                        {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
