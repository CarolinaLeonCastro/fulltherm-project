import { Box, Typography, Grid, Card, } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#E0e0e0' }}>
         <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '266px',
        background: 'url("src/assets/fond.jpg") center/cover no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Superposition de couleur et flou */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#187F92',
          opacity: 0.7, // Opacité de la couleur
          filter: 'blur(5px)', // Application de l'effet de flou
        }}
      />
      
      <Typography
        variant="h1"
        sx={{
          position: 'relative',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Ombre du texte pour plus de contraste
        }}
      >
        A propos
      </Typography>
        </Box>
    
        <Box sx={{ padding: '2rem', backgroundColor: '#E0E0E0' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          FULLTHERM est une société dont le siège social se situe à Tubize
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
          Son centre opérationnel est basé à Sint-Pieters-Leeuw.
        </Typography>
        <Typography variant="body1">
          Fondée en 1996 par Mr Eric KERRES, elle est rachetée en 2004 par les frères VANGU.
        </Typography>
      </Box>

      {/* Certifications Section */}
      <Box sx={{ marginBottom: '3rem' }}>
        <Card sx={{ padding: '1rem', backgroundColor: '#187F92', color: 'white' }}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>Habilitations</Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            CERGA, SOLTHERM - QUALIWALL, KNX protocole universel domotique
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            Nos techniciens sont en possession des habilitations chauffage PEB
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            GI dans les trois régions, G II dans les trois régions, L dans les trois régions
          </Typography>
          <Typography variant="body2">
            Mais aussi : Technicien frigoriste de classe 1, Conseiller chauffage PEB de Type 1 et 2
          </Typography>
        </Card>
      </Box>

      {/* Team Members Section */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
          Notre Équipe
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>Vangu Laurent</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                Manager & Partner
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                Installateur chauffage et interventions plomberie
              </Typography>
            
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>Dath Jérémy</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                Coordinateur
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                Installateur & Moteur
              </Typography>
             
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>Vangu Jean-Jacques</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                Manager & Partner
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                Technicien Chauffagiste
              </Typography>
           
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>Storme Daphné</Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                Assistante de direction
              </Typography>
             
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>

      
    </Box>
  );
};

export default About;
