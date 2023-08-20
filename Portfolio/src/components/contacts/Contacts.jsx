import { Box, Typography } from "@mui/material";
import contactData from "../../data/contacts.json";

export default function Contacts() {

    return (
        <Box
            sx={{
                backgroundColor: "var(--beige-color)",
                width: "80%",
                margin: "5rem auto",
                border: "3px solid black",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "var(--magenta-color)",
                    borderBottom: "3px solid black",
                    padding: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h4"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginLeft="1rem"
                    sx={{
                        "&:hover": {
                            color: "black",
                        },
                    }}
                >
                    {"<Contacts/>"}
                </Typography>
                <Typography
                    variant="h4"
                    fontFamily="var(--secondary-font)"
                    fontWeight="600"
                    marginRight="1rem"
                    sx={{
                        "&:hover": {
                            color: "black",
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
                    justifyContent: "space-evenly",
                }}
            >
                {contactData.contacts.map((contact, index) => (
                    <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                        <Box
                            sx={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1rem",
                                marginTop: "2rem"
                            }}
                        >
                            <img src={contact.icon} alt={`${contact.name} icon`} style={{ width: "10rem" }} />
                            <Typography variant="h4" sx={{
                                fontFamily: "var(--primary-font)", fontWeight: "600",
                                "&:hover": {
                                    color: "var(--blue-color)",
                                },
                            }}>
                                {contact.name}.exe
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Box>
        </Box>
    );
}
