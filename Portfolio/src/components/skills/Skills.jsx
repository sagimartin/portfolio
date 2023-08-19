import { Box, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import categories from "../../data/skills.json";

export default function Skills() {
    const firstThreeCategories = Object.entries(categories).slice(0, 3);
    const restCategories = Object.entries(categories).slice(3);
    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    return (
        <Box
            sx={{
                backgroundColor: "var(--beige-color)",
                width: "100%",
                margin: "5rem auto",
                border: "3px solid black",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "var(--yellow-color)",
                    borderBottom: "3px solid black",
                    padding: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer"
                }}
            >
                <Typography
                    variant="h3"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginLeft="1rem"
                >
                    {"<Skills/>"}
                </Typography>
                <Typography
                    variant="h3"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginRight="1rem"
                >
                    _ ▢ X
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    gap: "5rem",
                    cursor: "default",
                }}
            >
                {/* LEFT SIDE */}
                <Box
                    sx={{ flex: 2 }}
                >
                    {firstThreeCategories.map(([categoryName, categoryData], categoryIndex) => (
                        <div key={categoryIndex}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "var(--secondary-font)",
                                    fontWeight: "600",
                                    "&:hover": {
                                        color: "black",
                                    },
                                }}
                            >
                                {categoryName}
                            </Typography>
                            <Box
                                component="ul"
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    listStyle: "none",
                                    padding: ".5rem",
                                    margin: "0",
                                    fontWeight: "600",
                                }}
                            >
                                {Object.entries(categoryData.skills).map(([label], skillIndex) => (
                                    <ListItem key={skillIndex}>
                                        <Chip
                                            label={label}
                                            sx={{
                                                backgroundColor: categoryData.color,
                                                padding: "1rem",
                                                margin: "0.25rem",
                                                fontFamily: "var(--secondary-font)",
                                                fontSize: "1rem",
                                                color: "white",
                                                border: "3px solid black",
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </Box>
                        </div>
                    ))}
                </Box>

                {/* RIGHT SIDE */}
                <Box
                    sx={{ flex: 2 }}
                >
                    {restCategories.map(([categoryName, categoryData], categoryIndex) => (
                        <div key={categoryIndex}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "var(--secondary-font)",
                                    fontWeight: "600",
                                    "&:hover": {
                                        color: "black",
                                    },
                                }}
                            >
                                {categoryName}
                            </Typography>
                            <Box
                                component="ul"
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    listStyle: "none",
                                    padding: "0.5rem",
                                    margin: "0",
                                    fontWeight: "600",
                                }}
                            >
                                {Object.entries(categoryData.skills).map(([label], skillIndex) => (
                                    <ListItem key={skillIndex}>
                                        <Chip
                                            label={label}
                                            sx={{
                                                backgroundColor: categoryData.color,
                                                padding: "1rem",
                                                margin: "0.25rem",
                                                fontFamily: "var(--secondary-font)",
                                                fontSize: "1rem",
                                                color: "white",
                                                border: "3px solid black",
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </Box>
                        </div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
