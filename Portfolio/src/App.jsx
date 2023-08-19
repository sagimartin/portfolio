import { Container } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

import './App.css';

function App() {
  return (
    <Container style={{ maxWidth: "1440px", minWidth: "320px" }}>
      <Navbar />
      <Skills />
      <Projects />
    </Container>
  );
}

export default App;
