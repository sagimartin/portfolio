import { Container } from '@mui/material'
import Navbar from './components/navbar/Navbar'

import './App.css'

function App() {

  return (
    <Container style={{maxWidth: "1440px", minWidth: "320px"}}>
      <Navbar />
    </Container>
  )
}

export default App
