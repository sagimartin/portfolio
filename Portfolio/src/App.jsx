import { Container } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <Container style={{ maxWidth: "2560px", minWidth: "320px" }}>
      <Navbar />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </Container>
  );
}

export default App;
