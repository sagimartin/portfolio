import { Box } from "@mui/system"
import Footer from "./footer/Footer"
import hello from "../../public/assets/images/about/hello.svg"

export default function DesktopUI(){
    return(
        <Box style={{backgroundColor: "var(--tale-color)", height: "100vh", display: "flex", flexDirection: "column", justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <img src={hello} alt="hello svg" style={{
                    margin: "0 auto",
                }}/>
            </Box>
            <Footer/>
        </Box>
    )
}
