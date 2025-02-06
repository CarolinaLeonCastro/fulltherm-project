import { Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#FF6933', padding: '10px' }}>
      {/* Titre du footer */}
      <Typography variant="body1" sx={{ color: '#fff', textAlign: 'center', marginBottom: '10px' }}>
        Coordonnées
      </Typography>
      <hr style={{ margin: '10px auto', width: '120px', borderColor: '#fff' }} />

      {/* Contenu avec Grid pour disposition */}
      <Grid container spacing={4} sx={{ justifyContent: 'left' }}>
        {/* Colonne gauche */}
        <Grid item xs={6} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          {/* Logo */}
          <img 
            src="src/assets/logoFulltherm.png" 
            alt="Logo"
            style={{ width: '94px', height: 'auto', marginBottom: '20px' }}
          />

          {/* Informations de contact */}
          <Typography variant="body2" sx={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>
            Service client : Devis client - Assurance
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>
            SAV téléphone : +32 (0)0 00 00 00
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>
            Email : Email@email.be
          </Typography>
        </Grid>

        {/* Colonne droite */}
        <Grid item xs={6} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Carte */}
          <Box sx={{ display: 'flex', justifyContent: 'left', marginBottom: '20px' }}>
            <img
              src="src/assets/image.png" // Remplacer par le chemin de ton image de la carte
              alt="Carte"
              style={{ width: '200px', height: '100px' }}
            />
          </Box>

          {/* Adresse */}
          <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center', marginTop: '10px' }}>
            Bergensesteenweg 159 BE-1600 Sint-Pieters-Leeuw
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center', marginTop: '10px' }}>
        © 2025 MonSite, Tous droits réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
