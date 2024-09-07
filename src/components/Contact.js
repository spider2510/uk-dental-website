import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";


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
  return (
    <Box paddingX={3}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{
          fontWeight: 'bold',
          position: 'relative',
          display: 'inline-block',
          mb: 2,
          borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
        }}
          gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          Please fill out the form below to send us an email, and we will get back to you as soon as possible.
        </Typography>
      </Box>
      <Grid container spacing={4} marginBottom={2}>
        <Grid item xs={12} md={12}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', color: '#000' }}>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={name}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={email}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    // multiline
                    rows={4}
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={message}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    // color="primary"
                    // fullWidth
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
  )
}