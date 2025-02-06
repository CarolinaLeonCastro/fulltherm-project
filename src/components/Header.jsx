import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Importer l'icône de fermeture
import { Link } from 'react-router-dom'; // Si vous utilisez react-router pour la navigation

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FF6933', zIndex: 10 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="src/assets/logoFulltherm.png"
            alt="Logo"
            style={{ width: '94px', height: 'auto' }}
          />
        </Box>

        {/* Hamburger Menu / Close Icon */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color="inherit" onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon sx={{ color: 'white' }} /> // Afficher la croix quand le menu est ouvert
            ) : (
              <MenuIcon sx={{ color: 'white' }} /> // Afficher l'icône hamburger quand le menu est fermé
            )}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Navigation Menu */}
      <Box
        sx={{
          display: { xs: menuOpen ? 'block' : 'none', md: 'flex' },
          justifyContent: 'center',
          backgroundColor: '#187F92',
          position: 'absolute',
          width: '40%',
          top: '55px',
          right: 0,  // Place the menu on the right side
          zIndex: 1,
          height: '266px',
        }}
        id="myLinks"
      >
        <List sx={{ margin: 0, padding: 0 }}>
          <ListItem button sx={{ textAlign: 'center' }}>
            <Link to="/" style={{ color: 'black', textDecoration: 'none', padding: '4px 6px' }}>
              <ListItemText primary="Accueil" />
            </Link>
          </ListItem>
          <ListItem button sx={{ textAlign: 'center' }}>
            <Link to="/about" style={{ color: 'black', textDecoration: 'none', padding: '4px 6px' }}>
              <ListItemText primary="A propos" />
            </Link>
          </ListItem>
          <ListItem button sx={{ textAlign: 'center' }}>
            <Link to="/services" style={{ color: 'black', textDecoration: 'none', padding: '4px 6px' }}>
              <ListItemText primary="Services" />
            </Link>
          </ListItem>
          <ListItem button sx={{ textAlign: 'center' }}>
            <Link to="/contact" style={{ color: 'black', textDecoration: 'none', padding: '4px 6px' }}>
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
          <ListItem button sx={{ textAlign: 'center' }}>
            <Link to="/projects" style={{ color: 'black', textDecoration: 'none', padding: '4px 6px' }}>
              <ListItemText primary="Nos projets" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </AppBar>
  );
};

export default Header;
