import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Divider } from "@mui/material";
import { Facebook, Instagram, MusicNote,YouTube,Twitter } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WeekendIcon from '@mui/icons-material/Weekend';

export const Footer = (props) => {
    return (
        <Box sx={{ backgroundColor: "#13192d", color: 'white', py: 4 }}>
            <Container>
                <Grid container spacing={3} px={0} py={2}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                <strong>Address:</strong> {props.data ? props.data.address : "15 Cherry Orchard, Staines, Middlesex TW18 2DE"}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                <strong>Phone:</strong> {props.data ? props.data.phone : "01784 453448"}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                <strong>Email:</strong> {props.data ? props.data.email : "info@rothleylodgedentalpractice.co.uk"}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <a href={"https://www.facebook.com/RothleyLodgePractice/"} target='_blank'><Facebook sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#608dfd' } }} /></a>
                                <a href={"https://x.com/RothleyLodge"} target='_blank'><Twitter sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
                                
                                <a href={"https://www.youtube.com/channel/UCV65uZjeGHj1C0fo51v85kg/videos"} target='_blank'><YouTube sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                Opening Hours
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize:'16px' }} /> Monday - 8.00 am - 5.00 pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize:'16px' }} /> Tuesday - 8.00 am - 6.00 pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize:'16px' }} /> Wednesday - 8.00 am - 6.00 pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize:'16px' }} /> Thursday - 8.00 am - 5.30 pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <AccessTimeIcon sx={{ mr: 1, fontSize:'16px' }} /> Friday - 8.00 am - 4.30 pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <CalendarTodayIcon sx={{ mr: 1, fontSize:'16px', }} /> Saturday - By Appointment
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1, fontSize:'14px' }}>
                                <WeekendIcon sx={{ mr: 1, fontSize:'16px' }} /> Sunday: N/A
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                            Subscribe to our Newsletter
                        </Typography>
                        <form noValidate autoComplete="off">
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    placeholder="Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Box>
                            <Button variant="outlined" color="inherit" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: '#f6f6f6', textAlign: 'center', py: 2 }}>
                <Typography variant="body2" sx={{ color: '#888' }}>
                    Copyright &copy; 2024 Invasign All rights reserved
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <a href="#about" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>About Us</a>
                    <a href="#services" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Services</a>
                    <a href="#blog" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Blog</a>
                    <a href="#privacy-policy" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
                    <a href="#terms-conditions" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Terms & Conditions</a>
                </Box>
            </Box>
        </Box>
    );
};
