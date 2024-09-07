import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { MedicationLiquid, EditCalendar, AutoFixHigh, EmojiEmotions } from '@mui/icons-material';

export const HowitWork = (props) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box id="services" sx={{ textAlign: 'center', py: { xs: 2, md: 8 } }}>
      <Container>
        <Box sx={{ mb: 4 }}>
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
            How Invisalign Works
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.data
            ? props.data.map((d, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`${d.name}-${i}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
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
                      {/* Map MUI vector icons */}
                      {d.name === 'Consultation' && <MedicationLiquid fontSize="large" sx={{ fontSize: 60, color: '#13192d' }} />}
                      {d.name === 'Custom Aligners' && <AutoFixHigh sx={{ fontSize: 60, color: '#13192d' }} fontSize="large" />}
                      {d.name === 'Wear Your Aligners' && <EditCalendar sx={{ fontSize: 60, color: '#13192d' }} fontSize="large" />}
                      {d.name === 'Monitor Progress' && <EmojiEmotions sx={{ fontSize: 60, color: '#13192d' }} fontSize="large" />}
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
                        {d.name}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey' }}>
                        {d.text}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey', marginTop: 3, fontWeight: 'bold' }}>
                        {'Learn More'}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
            : "loading"}
        </Grid>
      </Container>
    </Box>
  );
};
