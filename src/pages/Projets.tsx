import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <Box sx={{ backgroundColor: "#e0e0e0" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "266px",
          background: 'url("src/assets/fond.jpg") center/cover no-repeat',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Superposition de couleur et flou */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#187F92",
            opacity: 0.7, // Opacité de la couleur
            filter: "blur(5px)", // Application de l'effet de flou
          }}
        />

        <Typography
          variant="h1"
          sx={{
            position: "relative",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Ombre du texte pour plus de contraste
          }}
        >
          Nos projets
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ padding: "20px", paddingTop: "50px", textAlign: "center" }}>
        {/* Project 1 */}
        <Box
          sx={{
            backgroundColor: "#187F92",
            borderRadius: 2,
            padding: "20px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "15px" }}>
            Ambassade de Corée
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              fontSize: "1rem",
            }}
          >
            <Typography>avant</Typography>
            <Typography>après</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Card sx={{ maxWidth: "30%", marginBottom: "15px" }}>
              <CardMedia
                component="img"
                image="src/assets/elec1.jpg"
                alt="Avant"
                sx={{ borderRadius: 1, boxShadow: 2, height: "224px" }}
              />
            </Card>
            <Card sx={{ maxWidth: "30%", marginBottom: "15px" }}>
              <CardMedia
                component="img"
                image="src/assets/elec2.jpg"
                alt="En cours"
                sx={{ borderRadius: 1, boxShadow: 2, height: "224px" }}
              />
            </Card>
            <Card sx={{ maxWidth: "30%", marginBottom: "15px" }}>
              <CardMedia
                component="img"
                image="src/assets/elec3.jpg"
                alt="Après"
                sx={{ borderRadius: 1, boxShadow: 2, height: "224px" }}
              />
            </Card>
          </Box>
        </Box>

        {/* Project 2 */}
        <Box
          sx={{
            backgroundColor: "#187F92", // Couleur du fond
            borderRadius: 2,
            padding: "20px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            Chaufferie Marie Louise
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={5} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image="src/assets/chauf1.jpg"
                  alt="Chauffage avant 1"
                  sx={{
                    borderRadius: 2,

                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
              <Typography sx={{ marginTop: "10px" }}>avant</Typography>
            </Grid>
            <Grid item xs={5} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image="src/assets/chauf2.jpg"
                  alt="Chauffage avant 2"
                  sx={{
                    borderRadius: 2,
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
              <Typography sx={{ marginTop: "10px" }}>après</Typography>
            </Grid>
            <Grid item xs={5} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image="src/assets/chauf3.jpg"
                  alt="Chauffage avant 3"
                  sx={{
                    borderRadius: 2,
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={5} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image="src/assets/chauf4.jpg"
                  alt="Chauffage après 4"
                  sx={{
                    borderRadius: 2,
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Project 3 */}
        <Box
          sx={{
            backgroundColor: "#187F92", // Couleur du fond
            borderRadius: 2,
            padding: "20px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            Chaufferie Marie-José
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: 350, textAlign: "center", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/chaufMJ1.jpg"
                  alt="Chauffage Marie-José avant"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
              <Typography sx={{ marginTop: "10px" }}>avant</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card sx={{ maxWidth: 350, textAlign: "center", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/chaufMJ2.jpg"
                  alt="Chauffage Marie-José après"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
              <Typography sx={{ marginTop: "10px" }}>après</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Project 4 */}
        <Box
          sx={{
            backgroundColor: "#187F92", // Couleur du fond
            borderRadius: 2,
            padding: "20px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            En chaufferie
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {/* Première ligne : 2 images côte à côte */}
            <Grid item xs={6} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c1.jpg"
                  alt="Chauffage 1"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c2.jpg"
                  alt="Chauffage 2"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>

            {/* Deuxième ligne : 2 images côte à côte */}
            <Grid item xs={6} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c3.jpg"
                  alt="Chauffage 3"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c4.jpg"
                  alt="Chauffage 4"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>

            {/* Troisième ligne : 2 images côte à côte */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c5.jpg"
                  alt="Chauffage 5"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/c6.jpg"
                  alt="Chauffage 6"
                  sx={{
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Project 5 */}
        <Box
          sx={{
            backgroundColor: "#187F92",
            borderRadius: 2,
            padding: "20px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            Sol
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {/* Première ligne : 2 images côte à côte */}
            <Grid item xs={6} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/s1.jpg"
                  alt="Sol 1"
                  sx={{
                    height: "auto",
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/s2.jpg"
                  alt="Sol 2"
                  sx={{
                    height: "auto",
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>

            {/* Deuxième ligne : 2 images côte à côte */}
            <Grid item xs={6} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/s3.jpg"
                  alt="Sol 3"
                  sx={{
                    height: "auto",
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="src/assets/s4.jpg"
                  alt="Sol 4"
                  sx={{
                    height: "auto",
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "250px",
                    margin: "0 auto",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
