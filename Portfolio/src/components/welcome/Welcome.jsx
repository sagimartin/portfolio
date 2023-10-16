import { Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./Welcome.css";

export default function Welcome() {

    return (
        <Box className="welcome projects-container">
            <Box className="welcome-header projects-header">
                <Typography variant="h4" fontFamily="var(--secondary-font)" fontWeight="600" className="projects-title" sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                    },
                }}>
                    {"Alert_message"}
                </Typography>
                <CloseIcon sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '4rem',
                    }, cursor: "pointer"
                }} />
            </Box>
            <Box className="welcome-message">
                <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                    }, color: "var(--blue-color)"
                }}>Hello</Typography>
                <Box className="intro-message">
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '3rem',
                            md: '4rem',
                        },
                    }}>I'm</Typography>
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '3rem',
                            md: '4rem',
                        }, backgroundColor: "yellow", padding: ".2rem .4rem", marginLeft: ".5rem"
                    }}>Martin</Typography>
                    <Typography variant="h1" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '3rem',
                            md: '4rem',
                        },
                    }}>*</Typography>
                </Box>
                <Typography variant="h3" fontFamily="var(--secondary-font)" fontWeight="600" sx={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                        md: '2rem',
                    },
                }}>* a frontend developer based in Budapest.</Typography>
            </Box>
        </Box>
    )
}