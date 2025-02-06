import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assure-toi d'importer tes pages correctement

import Header from './components/Header'; // Assurez-vous d'importer le Header correctement
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projets';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import CallMe from './components/CallMe';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      
      <Header /> {/* Ton header avec la navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <CallMe />
      <Footer/>
    
    </Router>
    </ThemeProvider>
  );
};

export default App;
