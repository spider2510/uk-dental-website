import React from "react";
import { Box, Container, Grid, Typography, List, ListItem, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImage from '../assets/002.jpg';
import afterImage from '../assets/001.jpg';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
export const About = (props) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box id="about" pt={{ xs: 6, md: 15, }} sx={{ backgroundColor: '#13192d', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              {/* Before-After Slider */}
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}

                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <Box>
                <Typography variant="h4" gutterBottom sx={{ position: 'relative', mb: 2, pb: 2, color: 'white' }}>
                  About Us
                  <Divider
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'white'
                    }}
                  />
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }} paragraph >
                  {props.data ? props.data.paragraph : "loading..."}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontSize: '22px', mb: 3, color: 'white' }}>
                  Why Choose Rothley Lodge for Invisalign?
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <List sx={{ padding: 0 }}>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                          <ListItem key={`${d}-${i}`} sx={{ paddingLeft: 1, paddingBottom: 0.5, color: 'white' }}>
                            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box component="span" sx={{ color: '#5ca9fb', fontSize: '11px', fontWeight: 300, pr: 1 }}>
                                {/* &#xf00c; */}
                                <FileDownloadDoneIcon />
                              </Box>
                              {d}
                            </Typography>
                          </ListItem>
                        ))
                        : "loading"}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};