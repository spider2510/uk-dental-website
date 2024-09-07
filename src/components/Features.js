import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BedIcon from '@mui/icons-material/Bed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';

export const Features = (props) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const featuresSection = document.getElementById("features");
    const sectionTop = featuresSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const getIcon = (title) => {
    switch (title) {
      case "Invisible Aligners":
        return <VisibilityOffIcon fontSize="large" sx={{ fontSize: 60, color: '#13192d' }} />;
      case "Personalized Care":
        return <BedIcon fontSize="large" sx={{ fontSize: 60, color: '#13192d' }} />;
      case "Comfortable Fit":
        return <AutoAwesomeIcon fontSize="large" sx={{ fontSize: 60, color: '#13192d' }} />;
      case "Quick Results":
        return <SpeedIcon fontSize="large" sx={{ fontSize: 60, color: '#13192d' }} />;
      default:
        return null;
    }
  };

  return (
    <Box id="features" sx={{ textAlign: 'center', py: { xs: 2, md: 8 } }}>
      <Container >
        <Box mb={4}>
          <Typography
            variant="h4"
            color="#13192d"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
            }}
            gutterBottom
          >
            Why We Love Invisalign
          </Typography>
          <Typography variant="h6" component="h3" color={'grey'}>
            Discover the benefits of Invisalign – the clear alternative to braces that fits seamlessly into your lifestyle.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.data
            ? props.data.map((d, i) => (
              <Grid item xs={12} sm={6} md={3} key={`${d.title}-${i}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                // variants={fadeInVariants}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      maxWidth: 345,
                      mx: 'auto',
                      textAlign: 'center',
                      boxShadow: 3, // Add shadow to the card
                      borderRadius: 0, // Remove card radius
                      height: '100%', // Ensure all cards have the same height
                      padding: 1
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 200, // Increased height of the image
                        // backgroundColor: '#13192d',
                      }}
                    >
                      <Box color="white" sx={{ fontSize: '2.5rem' }}> {/* Increase icon size */}
                        {getIcon(d.title)}
                      </Box>
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        color="#13192d"
                        sx={{
                          mb: 2, // Increased space between title and content
                          fontWeight: 'bold' // Add boldness to the title
                        }}
                      >
                        {d.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey' }}>
                        {d.text}
                      </Typography>
                      {/* <Typography variant="body1" sx={{ color: 'grey', marginTop: 3, fontWeight: 'bold' }}>
                        {'Learn More'}
                      </Typography> */}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
            : "Loading..."}
        </Grid>
      </Container>
    </Box>
  );
};
