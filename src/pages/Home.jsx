import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Avatar,Button } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';  

const Home = () => {
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);

  const services = [
    {
      title: 'Ventilation & Climatisation',
      image: 'src/assets/ventilation.jpeg',
    },
    {
      title: 'Entretien & Dépannage',
      image: '/src/assets/entretien.jpeg',
    },
    {
      title: 'Chauffage & Énergies Vertes',
      image: 'src/assets/chauffage.jpeg',
    },
    {
      title: 'Plomberie & Sanitaire',
      image: 'src/assets/plomberie.jpeg',
    },
    {
      title: 'Electricité & Domotique',
      image: 'src/assets/electricité.jpeg',
    },
  ];

  const reviews = [
    {
      name: 'Jane Cooper',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      review: 'Service excellent, très satisfait de la prestation.',
    },
    {
      name: 'Sarah Smith',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      review: 'Une expérience incroyable, je recommande à 100%!',
    },
  ];

  // Fonction pour changer l'image du carrousel
  const handleNext = (type) => {
    if (type === 'service') {
      setCurrentServiceSlide((prevSlide) => (prevSlide + 1) % services.length);
    } else if (type === 'review') {
      setCurrentReviewSlide((prevSlide) => (prevSlide + 1) % reviews.length);
    }
  };

  const handlePrevious = (type) => {
    if (type === 'service') {
      setCurrentServiceSlide((prevSlide) => (prevSlide - 1 + services.length) % services.length);
    } else if (type === 'review') {
      setCurrentReviewSlide((prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length);
    }
  };

  // Déclenchement automatique pour le changement de slide (auto-play)
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      handleNext('service');
    }, 5000); // 5 secondes pour le carrousel des services

    const reviewInterval = setInterval(() => {
      handleNext('review');
    }, 5000); // 5 secondes pour le carrousel des avis

    return () => {
      clearInterval(serviceInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  return (
    <Box>
      {/* Section 1: En-tête avec description et bouton "Prise de rendez-vous" */}
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '266px',
        background: 'url("src/assets/fond.jpg") center/cover no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
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
      
    
        

  {/* Contenu principal */}
  <Box sx={{ position: 'relative', zIndex: 2 ,mx:4}}>  {/* Positionner le contenu au-dessus de l'overlay */}
    <Typography sx={{ color: 'white', marginTop: '3rem' }}>
      FULLTHERM est une société spécialisée dans Les Techniques Spéciales du bâtiment
    </Typography>
    <Button 
  component={Link}  // Utiliser Link comme composant pour la redirection
  to="/contact"     // Définir la page de destination
  variant="outlined" 
  sx={{ marginTop: '1rem' }}
>
  Prise de rendez-vous
</Button>
  </Box>
</Box>


      {/* Section 2: Nos Services avec MUI (Carrousel) */}
      <Box sx={{ textAlign: 'center', padding: '2rem 0' }}>
      <Typography variant='h2' sx={{ marginBottom: '0.5rem' }}>Nos Services</Typography>

      <hr style={{ margin: '10px auto', width: '168px', borderColor: '#000', marginTop: '4px' }} />

      {/* Carrousel de services */}
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        {/* Encapsuler la carte avec un Link pour la redirection vers /services */}
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <Card elevation={0} sx={{ maxWidth: 220, backgroundColor: '#E0E0E0' }}>
            <CardMedia
              component="img"
              height="140"
              image={services[currentServiceSlide].image}
              alt="Service image"
              sx={{
                borderRadius: '20%', // Rendre l'image ronde
                width: '180px', // Ajuste la taille de l'image
                height: '180px', // Ajuste la taille de l'image
                objectFit: 'cover', // Garder l'image bien centrée et recadrée
                margin: '0 auto', // Centrer l'image
              }}
            />
            <CardContent>
              <Typography variant="body1">{services[currentServiceSlide].title}</Typography>
            </CardContent>
          </Card>
        </Link>

        {/* Contrôles du carrousel */}
        <IconButton
          sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => handlePrevious('service')}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => handleNext('service')}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>

      {/* Section 3: Avis Clients avec MUI (Carrousel) */}
      <Box sx={{ textAlign: 'center', padding: '2rem', backgroundColor: '#E0E0E0' }}>
      <Typography variant='h2' sx={{ marginBottom: '0.5rem' }}>Avis clients</Typography>

   
<hr style={{ margin: '10px auto', width: '168px', borderColor: '#000' ,marginTop: '4px'}} />

        {/* Carrousel des avis */}
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Afficher l'avis actuel */}
          <Card sx={{ maxWidth: 345 ,backgroundColor: '#E0E0E0' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                alt={reviews[currentReviewSlide].name}
                src={reviews[currentReviewSlide].avatar}
                sx={{ width: 80, height: 80, margin: '0 auto 1rem' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {reviews[currentReviewSlide].name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {reviews[currentReviewSlide].review}
              </Typography>
            </CardContent>
          </Card>

          {/* Contrôles du carrousel */}
          <IconButton
            sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => handlePrevious('review')}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => handleNext('review')}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>


        {/* Partenaires */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
      {/* Partenaire 1 */}
      <Box
        sx={{
          padding: '10px',
          backgroundColor: '#E0e0e0',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '80px',
        }}
      >
        <img
          src="src/assets/remeha.png"  // Remplacez par le chemin de votre image
          alt="Partenaire 1"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain', // Assurez-vous que l'image reste proportionnelle
          }}
        />
      </Box>

      {/* Partenaire 2 */}
      <Box
        sx={{
          padding: '10px',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '80px',
        }}
      >
        <img
          src="src/assets/vaillant.png"  // Remplacez par le chemin de votre image
          alt="Partenaire 2"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Partenaire 3 */}
      <Box
        sx={{
          padding: '10px',
          backgroundColor: '#E0e0e0',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '80px',
        }}
      >
        <img
          src="src/assets/companyname.png"  // Remplacez par le chemin de votre image
          alt="Partenaire 3"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
    </Box>
  );
};

export default Home;
