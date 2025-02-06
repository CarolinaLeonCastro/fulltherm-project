import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    gsm: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
        Contact
      </Typography>
        </Box>
      <Typography variant="h5" sx={{ marginTop: '1rem', mx: 4 }}>
        Nous serons heureux de vous répondre
      </Typography>
      <Box sx={{ padding: '3rem 1rem' }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
            <TextField
              fullWidth
              label="Nom"
              variant="outlined"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
             
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Société"
              variant="outlined"
              margin="normal"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Gsm"
              variant="outlined"
              margin="normal"
              name="gsm"
              value={formData.gsm}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Bouton centré */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  color: '#fff',
                  padding: '1rem',
                  borderRadius: '30px',
                  width: '175px', // Si vous voulez un bouton de taille fixe
                }}
              >
                ENVOYER
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
