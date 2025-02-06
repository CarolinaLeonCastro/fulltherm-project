import { createTheme } from '@mui/material/styles';

// Définition des couleurs et de la police
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6933', // Couleur du bouton "prise de rendez-vous"
    },
    secondary: {
      main: '#187F92', // Couleur des boutons header
    },
    background: {
      default: '#E0E0E0', // Couleur de fond
    },
    text: {
      primary: '#000000', // Couleur du texte
      secondary: '#FFFFFF', // Couleur du texte dans le header
    },
    error: {
      main: '#FF6933', // Couleur d'urgence
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif', // Police de caractères
    h1: {
      fontWeight: 600,
      fontSize: '48px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '24px',
    },
    h3: {
      fontWeight: 400,
      fontSize: '20px',
    },
    h4: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 500,
      fontSize: '15px',
    },
    body2: {
      fontWeight: 500,
      fontSize: '11px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Coins arrondis
          fontWeight: 'bold',
          width: '175px',
          height: '30px',
          fontSize: '12px',
          textTransform: 'none', // Eviter que le texte soit en majuscules
          '&:focus': {
            outline: 'none', // Retirer l'outline si le bouton est focus
          },
        },
      },
      variants: [
        {
          props: { variant: 'outlined' }, // Style pour le bouton avec contour
          style: {
            backgroundColor: '#187F92',
            color: '#FFFFFF',
            border: '1px solid ##187F92',
            '&:hover': {
              backgroundColor: '#187F92',
              opacity: 0.9,
            },
          },
        },
        {
          props: { variant: 'contained' }, // Style pour le bouton plein
          style: {
            backgroundColor: '#FF6933',
            color: '#FFFFFF',
            border: '1px solid #FF6933',
            '&:hover': {
              backgroundColor: '#FF6933',
              opacity: 0.9,
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white', // Fond blanc pour les TextField
          '& .MuiInputLabel-root': {
            color: '#808080', // Label en gris
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#808080', // Bordure grise pour le TextField
            },
            '&:hover fieldset': {
              borderColor: '#187F92', // Bordure turquoise au survol
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF6933', // Bordure orange lorsqu'il est focus
            },
          },
        },
      },
    },
  },
});

// Exporter le thème pour l'utiliser dans ton application
export default theme;
