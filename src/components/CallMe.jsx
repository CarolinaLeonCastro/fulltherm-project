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
          width: '3rem', // Largeur de l'icône
          height: '3rem', // Hauteur de l'icône
          padding: 0, // Enlève tout le padding autour de l'icône
          backgroundColor: '#187F92', // Couleur de fond bleu turquoise
          borderRadius: '50%', // Rend l'icône ronde
          borderColor: '#FF6933',
          '&:hover': {
            backgroundColor: '#155E72', // Change la couleur du fond lors du survol
          },
        }}
      >
        <Call sx={{ fontSize: '2rem', color: 'white' }} />
      </IconButton>
    </a>
  );
};

export default CallMe;
