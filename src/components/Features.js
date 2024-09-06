import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BedIcon from '@mui/icons-material/Bed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TableChartIcon from '@mui/icons-material/TableChart';
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
    <Box id="features" textAlign="center" py={4} sx={{paddingLeft:'5%',paddingRight:'5%'}}>
      <Container maxWidth="md">
        <Box mb={4}>
          <Typography  variant="h4" sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
            }} gutterBottom>
            Why We Love Invisalign
          </Typography>
          <Typography variant="h6" component="h3">
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
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Paper
                        elevation={4}
                        sx={{
                          width: 80,
                          height: 80,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          mb: 2,
                          bgcolor: '#13192d',
                        }}
                      >
                        <Box color="white">{getIcon(d.title)}</Box>
                      </Paper>
                      <Typography variant="h6" component="h3" mt={2}>
                        {d.title}
                      </Typography>
                      <Typography variant="body1" mt={1}>
                        {d.text}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))
            : "Loading..."}
        </Grid>
      </Container>
    </Box>
  );
};
