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
        return <VisibilityOffIcon fontSize="large" />;
      case "Custom Treatment Plan":
        return <BedIcon fontSize="large" />;
      case "Comfortable Fit":
        return <AutoAwesomeIcon fontSize="large" />;
      case "Quick Results":
        return <SpeedIcon fontSize="large" />;
      default:
        return null;
    }
  };

  return (
    <Box id="features" textAlign="center">
      <Container maxWidth="md">
        <Box mb={4}>
          <Typography
            variant="h4"
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
                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                    animate={controls}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 500, // Increase card width
                        minHeight: 350, // Increase card height
                        mx: 'auto',
                        textAlign: 'center',
                        boxShadow: 4,
                        borderRadius: 0,
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 200, // Increase image (icon) height
                          // width: 200, // Set width to 100%
                          backgroundColor: '#13192d',
                        }}
                      >
                        <Box color="white" sx={{ fontSize: '2.5rem' }}> {/* Increase icon size */}
                          {getIcon(d.title)}
                        </Box>
                      </CardMedia>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{ mb: 2, fontWeight: 'bold' }}
                        >
                          {d.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey' }}>
                          {d.text}
                        </Typography>
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
