import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { MedicationLiquid, Visibility, Build, CheckCircle } from '@mui/icons-material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export const HowitWork = (props) => {
  // Define animation variants
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
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
            }}
            gutterBottom
          >
            How Invisalign Works
          </Typography>
          <Typography variant="h6" component="h3">
            Step-by-Step Process:
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.data
            ? props.data.map((d, i) => (
              <Grid item xs={12} md={6} key={`${d.name}-${i}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
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
                      {/* Map MUI icons */}
                      {d.name == 'Consultation' && <MedicationLiquid fontSize="large" sx={{ fontSize: 40, color: '#FFF' }} />}
                      {d.name == 'Custom Aligners' && <AutoFixHighIcon sx={{ fontSize: 40, color: '#FFF' }} fontSize="large" />}
                      {d.name == 'Wear Your Aligners' && <EditCalendarIcon sx={{ fontSize: 40, color: '#FFF' }} fontSize="large" />}
                      {d.name == 'Monitor Progress' && <EmojiEmotionsIcon fontSize="large" sx={{ fontSize: 40, color: '#FFF' }} />}
                    </Paper>
                    <Typography variant="h6" gutterBottom>
                      {d.name}
                    </Typography>
                    <Typography variant="body1">
                      {d.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))
            : "loading"}
        </Grid>
      </Container>
    </Box>
  );
};
