import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Typography, TextField, Button, Grid, Paper, useTheme, useMediaQuery } from "@mui/material";
import backgroundImage from '../assets/contact-us-background.jpg';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [{ name, email, message }, setState] = useState(initialState);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      {!isMobile && (
        <Box
          component="img"
          src={backgroundImage}
          alt="Background"
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      )}

      <Grid
        sx={{
          position: 'absolute',
          top: 10,
          marginLeft: isMobile ? '0' : '10%',
          width: isMobile ? '100%' : 'auto',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 450,
        }}
      >
        <Grid item xs={12} md={4}>
          <Paper elevation={24} sx={{ p: 4, bgcolor: '#fff', color: '#000', opacity: 0.97 }}>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Box sx={{ textAlign: 'center', my: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      position: 'relative',
                      display: 'inline-block',
                      mb: 3,
                      color: '#13192d',
                    }}
                    gutterBottom
                  >
                    How can we help? Contact us now
                  </Typography>
                  <Typography variant="subtitle" component="h3" color="grey">
                    Fill out the form below to email us, and we’ll respond promptly.
                  </Typography>
                </Box>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="Enter Your Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={name}
                    InputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "grey",
                          fontSize: "14px",
                        },
                      },
                    }}
                    sx={{
                      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={email}
                    InputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "grey",
                          fontSize: "14px",
                        },
                      },
                    }}
                    sx={{
                      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    placeholder="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={message}
                    InputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "grey",
                          fontSize: "14px",
                          fontWeight: 'bold',
                        },
                      },
                    }}
                    sx={{
                      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ py: 1.5, backgroundColor: "#13192d", color: 'white' }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
