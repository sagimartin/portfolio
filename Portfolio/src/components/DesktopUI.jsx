import { Box, Typography } from "@mui/material"
import Footer from "./footer/Footer"
import hello from "../../public/assets/images/about/hello.svg"
import about from "../../public/assets/icons/about.svg"
import appsData from "../data/apps.json"


export default function DesktopUI() {
    const leftSide = appsData.apps.slice(1, 4)
    return (
        <Box style={{ backgroundColor: "var(--tale-color)", height: "100vh", display: "flex", flexDirection: "column", justifyContent: 'space-between', alignItems: 'center' }}>
            <Box style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: 'space-between' }}>
                <img src={hello} alt="hello svg" style={{
                    margin: "0 auto",
                }} />
                <Box style={{ display: "flex", justifyContent: "space-between", padding: "2rem", }}>
                    <Box style={{ display: "flex", flexDirection: 'column' }}>
                        {leftSide.map((app, index) => (
                            <Box
                                key={index}
                                sx={{
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginTop: "2rem"
                                }}
                            >
                                <img src={app.icon} alt={`${app.name} icon`} style={{ width: "7rem", height: "auto" }} />
                                <Typography variant="h5" sx={{
                                    fontFamily: "var(--primary-font)", fontWeight: "600",
                                    "&:hover": {
                                        color: "var(--blue-color)",
                                    },
                                }}>
                                    {app.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                        marginTop: "2rem"
                    }}>
                        <img src={about} alt="about icon" style={{ width: "7rem", height: "auto" }} />
                        <Typography variant="h5" sx={{
                            fontFamily: "var(--primary-font)", fontWeight: "600",
                            "&:hover": {
                                color: "var(--blue-color)",
                            },
                        }}>
                            About.me
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
