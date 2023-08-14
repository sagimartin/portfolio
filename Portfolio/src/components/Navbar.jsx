import { AppBar, Box, Typography } from "@mui/material";
import { useState } from 'react';
import AboutPopup from "./about/AboutPopup";
import aboutData from "../data/about.json"

import html from "/assets/icons/html.svg"
import glyph from "/assets/icons/glyph.svg"


export default function Navbar() {
    const [showGlyph, setShowGlyph] = useState(false)
    const [showAboutPopup, setShowAboutPopup] = useState(false)
    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    return (
        <AppBar className="navbar" elevation={{}} sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white", color: "black" }}>
            <Box className="intro" sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h1" color={"#290BA2"} marginBottom={"1.5rem"} style={{
                    fontFamily: "var(--secondary-font)",
                    fontWeight: "600"
                }}>
                    Hello!
                </Typography>
                <Typography variant="h3" textAlign={"justify"} style={{ fontFamily: "var(--secondary-font)" }}>
                    I'm <span style={{ backgroundColor: 'yellow', padding: ".2rem" }}><strong>Martin.</strong></span>*
                </Typography>
                <Typography className="introSub" variant='h6' style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--secondary-font)", marginTop: ".25rem" }} >
                    * a frontend developer based in Budapest.
                </Typography>
                <img className="rollingHTML" src={showGlyph ? glyph : html} alt="logo" style={{ width: "2.5rem", margin: "0 .5rem" }} onMouseEnter={() => setShowGlyph(true)} onMouseLeave={() => setShowGlyph(false)} />
            </Box>
            <Box className="menuButtons" style={{ display: "flex", flexDirection: "column", gap: ".5rem", width: "max-content" }}>
                <Typography variant='h6' className="menuButton">{'<Home/>'}</Typography>
                <Typography variant='h6' className="menuButton">{'<Skills/>'}</Typography>
                <Typography variant='h6' className="menuButton">{'<Projects/>'}</Typography>
                <Typography variant='h6' className="menuButton" onClick={() => setShowAboutPopup(true)} >{'<About/>'}</Typography>
                {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
            </Box>
        </AppBar>
    )
}