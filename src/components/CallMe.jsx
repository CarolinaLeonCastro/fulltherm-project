import { Call } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const CallMe = () => {
  return (
    <a href="tel:026541418" style={{ textDecoration: 'none' }}>
      <IconButton
        color="primary"
        sx={{
          position: 'fixed',
          right: '1rem', // Distance par rapport au côté droit
          bottom: '2rem', // Distance par rapport au bas de la page
          width: '2rem', // Largeur de l'icône
          height: '2rem', // Hauteur de l'icône
          padding: 0, // Pour enlever tout le padding par défaut autour de l'icône
        }}
      >
        <Call />
      </IconButton>
    </a>
  );
};

export default CallMe;
