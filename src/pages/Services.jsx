import { Typography,Box, Card, CardContent, Button, Grid } from "@mui/material";
import { Link } from 'react-router-dom';



const Services = () => {

  const onButtonClick = () => {
    const pdfUrl = "src/assets/image.png"; // Mettez le chemin relatif ici (le fichier dans public/assets)
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "tarifs2025.png"; // Spécifiez le nom du fichier
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
      <Box sx={{ mt:4 }}>
      {/* Titre Section */}
      <Box sx={{backgroundColor: '#187F92'}}>
      <Typography variant="h1" sx={{ color: '#E0E0E0', textAlign: 'center', marginBottom: '2rem' }}>
        Services
      </Typography>
      </Box>

      {/* Section: Entretien & Dépannage */}
      <Box sx={{ marginBottom: '3rem' }}>
      {/* Section header */}
      <Box sx={{ backgroundColor: '#D9D9D9' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#000',
            marginBottom: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Entretien & Dépannage
        </Typography>
      </Box>

      {/* Content grid */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#E0E0E0', borderRadius: '8px', boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              {/* Image */}
              <img
                src="src/assets/entretien.jpeg"
                alt="Entretien"
                style={{
                  width: '316px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  height: '154px',
                }}
              />
              <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                Un entretien régulier est essentiel pour assurer la performance et la sécurité de votre installation.
              </Typography>
              
              {/* Box for the services heading */}
              <Box
                sx={{
                  backgroundColor: '#FF6933',
                  color: 'white',
                  height: '67px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  FULLTHERM propose des services d'entretien pour :
                </Typography>
              </Box>

              {/* List of services with bullets */}
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '20px',
                  marginTop: '10px',
                  marginBottom: '1rem',
                }}
              >
                <li>Chauffage gaz et chaudière gaz propulsée</li>
                <li>Chauffage maison et chauffe-bain</li>
                <li>Installation solaire</li>
                <li>Contrôle et remplacement du Propylène-glycol LS</li>
                <li>Ramonage pour optimiser le rendement et la sécurité</li>
              </ul>

              <Typography variant="body&" sx={{ fontWeight: 'bold' }}>
               Besoin d’une intervention ou des tarifs ?
                </Typography>

              {/* Buttons */}
              <Box
  sx={{
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column', // Organize buttons in a column
    justifyContent: 'space-between', // Ensures buttons are spaced out (one at top, other at bottom)
    alignItems: 'center', // Centers the buttons horizontally
    height: '100px', // Adjust this based on the space needed for the buttons
  }}
>
<Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                >
                  Prise de rendez-vous
                </Button>
                {/* Button for "Tarifs" to download PDF */}
                <Button
                  variant="contained"
                  sx={{ mb: 3 }}
                  onClick={onButtonClick}
                >
                  Tarifs
                </Button>

</Box>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

      {/* Section:Solutions de Chauffage */}
      <Box sx={{ marginBottom: '3rem' }}>
      {/* Section header */}
      <Box sx={{ backgroundColor: '#D9D9D9' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#000',
            marginBottom: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Solutions de Chauffage
        </Typography>
      </Box>

      {/* Content grid */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#E0E0E0', borderRadius: '8px', boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              {/* Image */}
              <img
                src="src/assets/chauffage.jpeg"
                alt="Entretien"
                style={{
                  width: '316px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  height: '154px',
                }}
              />
              <Typography variant="body1" sx={{ marginTop: '1rem' }}>
              chauffage adaptées à vos besoins, avec des installations apparentes ou encastrées et différentes options de diffusion de chaleur.
              </Typography>
              
              {/* Box for the services heading */}
              <Box
                sx={{
                  backgroundColor: '#FF6933',
                  color: 'white',
                  height: '67px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Fulltherm vous propose ses plusieurs option de chauffage :
                </Typography>
              </Box>

              {/* List of services with bullets */}
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '20px',
                  marginTop: '10px',
                  marginBottom: '1rem',
                }}
              >
                <li>Radiateurs à : panneaux, éléments et decoratif </li>
                <li>Convecteurs : mural, encastrer, aérotherme et ventilo</li>
                <li>Chauffage rayonnant : sol, mural et plafond</li>
                <li>Tuyaux : lisse, ailette et panneau</li>
             
              </ul>

              <Typography variant="body&" sx={{ fontWeight: 'bold' }}>
               Besoin d’une intervention ou des tarifs ?
                </Typography>

              {/* Buttons */}
              <Box
  sx={{
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column', // Organize buttons in a column
    justifyContent: 'space-between', // Ensures buttons are spaced out (one at top, other at bottom)
    alignItems: 'center', // Centers the buttons horizontally
    height: '100px', // Adjust this based on the space needed for the buttons
  }}
>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                >
                  Prise de rendez-vous
                </Button>
  <Button variant="contained" sx={{mb:3}}>
    Tarifs
  </Button>
</Box>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

    
       {/* Section:  Solutions Électriques */}
       <Box sx={{ marginBottom: '3rem' }}>
      {/* Section header */}
      <Box sx={{ backgroundColor: '#D9D9D9' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#000',
            marginBottom: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
           Solutions Électriques
        </Typography>
      </Box>

      {/* Content grid */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#E0E0E0', borderRadius: '8px', boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              {/* Image */}
              <img
                src="src/assets/electricité.jpeg"
                alt="Entretien"
                style={{
                  width: '316px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  height: '154px',
                }}
              />
              <Typography variant="body1" sx={{ marginTop: '1rem' }}>
              Une installation électrique fiable et performante est essentielle pour garantir votre sécurité, votre confort et l’efficacité énergétique </Typography>
              
              {/* Box for the services heading */}
              <Box
                sx={{
                  backgroundColor: '#FF6933',
                  color: 'white',
                  height: '67px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Fulltherm vous propose ses plusieurs solutions électriques.
                </Typography>
              </Box>

              {/* List of services with bullets */}
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '20px',
                  marginTop: '10px',
                  marginBottom: '1rem',
                }}
              >
                <li>Détection de panne</li>
                <li>Rénovation électrique</li>
                <li>Câblage informatique & électrique</li>
                <li>Parlophonie & vidéophonie</li>
                <li>Installation d’alarmes & systèmes de surveillance</li>
                <li>Domotique intelligente</li>
             
              </ul>

              <Typography variant="body&" sx={{ fontWeight: 'bold' }}>
               Besoin d’une intervention ou des tarifs ?
                </Typography>

              {/* Buttons */}
              <Box
  sx={{
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column', // Organize buttons in a column
    justifyContent: 'space-between', // Ensures buttons are spaced out (one at top, other at bottom)
    alignItems: 'center', // Centers the buttons horizontally
    height: '100px', // Adjust this based on the space needed for the buttons
  }}
>
<Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                >
                  Prise de rendez-vous
                </Button>
  <Button variant="contained" sx={{mb:3}}>
    Tarifs
  </Button>
</Box>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

   

      {/* Section:   Solutions Sanitaire */}
      <Box sx={{ marginBottom: '3rem' }}>
      {/* Section header */}
      <Box sx={{ backgroundColor: '#D9D9D9' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#000',
            marginBottom: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
           Solutions Sanitaire
        </Typography>
      </Box>

      {/* Content grid */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#E0E0E0', borderRadius: '8px', boxShadow: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              {/* Image */}
              <img
                src="src/assets/plomberie.jpeg"
                alt="Entretien"
                style={{
                  width: '316px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  height: '154px',
                }}
              />
              <Typography variant="body1" sx={{ marginTop: '1rem',mx:4 }}>
              Un système de plomberie efficace optimise votre consommation d’eau et prolonge la durée de vie de vos installations.</Typography>
              
              {/* Box for the services heading */}
              <Box
                sx={{
                  backgroundColor: '#FF6933',
                  color: 'white',
                  height: '67px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Fulltherm vous accompagne pour l’installation et la rénovation de vos équipements sanitaires.
                </Typography>
              </Box>

              {/* List of services with bullets */}
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '20px',
                  marginTop: '10px',
                  marginBottom: '1rem',
                }}
              >
                <li>Détection de panne</li>
                <li>Rénovation électrique</li>
                <li>Câblage informatique & électrique</li>
                <li>Parlophonie & vidéophonie</li>
                <li>Installation d’alarmes & systèmes de surveillance</li>
                <li>Domotique intelligente</li>
             
              </ul>

              <Typography variant="body&" sx={{ fontWeight: 'bold' }}>
               Besoin d’une intervention ou des tarifs ?
                </Typography>

              {/* Buttons */}
              <Box
  sx={{
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column', // Organize buttons in a column
    justifyContent: 'space-between', // Ensures buttons are spaced out (one at top, other at bottom)
    alignItems: 'center', // Centers the buttons horizontally
    height: '100px', // Adjust this based on the space needed for the buttons
  }}
>
<Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                >
                  Prise de rendez-vous
                </Button>
  <Button variant="contained" sx={{mb:3}}>
    Tarifs
  </Button>
</Box>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
    );
  };
  
  export default Services;
  