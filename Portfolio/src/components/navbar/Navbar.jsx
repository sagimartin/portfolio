import { AppBar, Box } from "@mui/material";
import { useState } from 'react';
import AboutPopup from "../about/AboutPopup";
import aboutData from "../../data/about.json"
import hello from "/assets/images/about/hello.svg"
import about from "../../../public/assets/icons/about.svg"

export default function Navbar() {
    const [showAboutPopup, setShowAboutPopup] = useState(false)
    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    return (
        <AppBar sx={{
            backgroundColor: "white",
            boxShadow: "none",
            position: "sticky"
        }}>
            <img src={hello} alt="Hello" style={{
                width: "100%",
                margin: "0 auto"
            }} />
            <Box sx={{
                cursor: "pointer",
                position: "absolute",
                top: "2rem",
                right: "10rem", 
            }} >
                <img src={about} alt="About me" style={{width: "10rem"}} onClick={() => setShowAboutPopup(true)} />
                {showAboutPopup && <AboutPopup memes={aboutData.memes} closePopup={closeAboutPopup} />}
            </Box>
        </AppBar>
    )
}