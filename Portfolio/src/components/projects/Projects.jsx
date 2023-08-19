import { Box, Typography } from "@mui/material";

export default function Projects() {

    return (
        <Box
            sx={{
                backgroundColor: "var(--beige-color)",
                width: "100%",
                margin: "5rem auto",
                border: "3px solid black",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "var(--tale-color)",
                    borderBottom: "3px solid black",
                    padding: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h3"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginLeft="1rem"
                    sx={{
                        "&:hover": {
                            color: "var(--beige-color)",
                        },
                    }}
                >
                    {"<Projects/>"}
                </Typography>
                <Typography
                    variant="h3"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginRight="1rem"
                    sx={{
                        "&:hover": {
                            color: "var(--beige-color)",
                        },
                    }}
                >
                    _ ▢ X
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    gap: "5rem"
                }}
            >
            </Box>
        </Box>
    );
}
