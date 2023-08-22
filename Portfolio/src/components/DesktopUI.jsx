import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Footer from "./footer/Footer";

import AboutPopup from "./about/AboutPopup";
import aboutData from "../data/about.json";

import hello from "/assets/images/about/hello.svg";
import contactsIcon from "/assets/icons/contacts.svg";
import projectsIcon from "/assets/icons/projects.svg";
import skillsIcon from "/assets/icons/skills.svg";
import aboutIcon from "/assets/icons/about.svg";

import "./DesktopUI.css";

export default function DesktopUI() {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    return (
        <Box className="desktop-ui-container">
            <Box className="content-container">
                <img src={hello} alt="hello svg" className="hello-image" />
                <Box className="buttons-container">
                    <Box className="column">
                        <Box className="icon-box">
                            <img src={contactsIcon} alt="contact icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" >
                                Contact.me
                            </Typography>
                        </Box>
                        <Box className="icon-box">
                            <img src={projectsIcon} alt="projects icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" >
                                My-Projects.exe
                            </Typography>
                        </Box>
                        <Box className="icon-box">
                            <img src={skillsIcon} alt="skills icon" className="icon" />
                            <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" >
                                My-skills.rar
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="column" onClick={() => setShowAboutPopup(true)}>
                        <img src={aboutIcon} alt="about icon" className="icon" />
                        <Typography variant="h5" className="icon-text" fontFamily="var(--secondary-font)" fontWeight="600" >
                            About.me
                        </Typography>
                        {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
