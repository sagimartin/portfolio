import { AppBar, Box, Typography } from "@mui/material";
import { useState } from 'react';
import AboutPopup from "../about/AboutPopup";
import aboutData from "../../data/about.json"
import hello from "/assets/images/about/hello.svg"

import './Navbar.css';

export default function Navbar() {
    const [showAboutPopup, setShowAboutPopup] = useState(false)
    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    return (
        <AppBar id="AppBar">
            <img src={hello} alt="Hello" />
            <Box className="menuButtons" >
                <Typography style={{ fontFamily: 'var(--secondary-font)' }} variant='h3' >{'<Home/>'}</Typography>
                <Typography style={{ fontFamily: 'var(--secondary-font)' }} variant='h3' >{'<Skills/>'}</Typography>
                <Typography style={{ fontFamily: 'var(--secondary-font)' }} variant='h3' >{'<Projects/>'}</Typography>
                <Typography style={{ fontFamily: 'var(--secondary-font)' }} variant='h3' onClick={() => setShowAboutPopup(true)}>{'<About/>'}</Typography>
                {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
            </Box>
        </AppBar>
    )
}