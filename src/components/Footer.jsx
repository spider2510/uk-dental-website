import { Box, Container, Typography, TextField, Button, Grid, Paper, Divider, SvgIcon } from "@mui/material";
import { Facebook, Instagram, MusicNote } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WeekendIcon from '@mui/icons-material/Weekend';

export const Footer = (props) => {
    return (
        <Box backgroundColor={"#13192d"} color={'white'}>
            <Container >
                <Grid my={3} container spacing={3} paddingX={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ color: '#fff', display: 'flex', alignItems: "start", flexDirection: 'column' }}>
                            <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1, alignItems: "start" }}>
                                <strong>Address:</strong> {props.data ? props.data.address : "4321 Invasign St, CA 12345 "}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1, alignItems: "start" }}>
                                <strong>Phone:</strong> {props.data ? props.data.phone : "+1 123 456 789"}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                <strong>Email:</strong> {props.data ? props.data.email : "info@company.com"}
                            </Typography>
                            {/* <Divider sx={{ mb: 3, bgcolor: '#fff' }} />
            <Typography variant="h6" sx={{ mb: 2 }}>
              Follow Us
            </Typography> */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <a href={props.data ? props.data.twitter : "/"}><Instagram sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
                                <a href={props.data ? props.data.facebook : "/"}><Facebook sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#608dfd' } }} /></a>
                                <a href={props.data ? props.data.youtube : "/"}><MusicNote sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>

                        <Box sx={{ display: 'flex', alignItems: 'start', paddingX: '16px', flexDirection: 'column' }}>
                            <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
                                Opening Hours
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'satrt', mb: 1 }} >
                                <AccessTimeIcon sx={{ mr: 1 }} /> Monday - Friday: 9am - 8pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'satrt', mb: 1 }}>
                                <CalendarTodayIcon sx={{ mr: 1 }} /> Saturday: 10am - 6pm
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'satrt', mb: 1 }} >
                                <WeekendIcon sx={{ mr: 1 }} /> Sunday: Closed
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h5" component="h2" >
                            Subscribe to our Newsletter
                        </Typography>
                        <form noValidate autoComplete="off">
                            <Box paddingY={'19px'}>
                                <TextField
                                    placeholder="Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '10px', border: "red" }}
                                />
                            </Box>
                            <Button variant="outlined" color="inherit" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: '#f6f6f6', textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" sx={{ color: '#888' }}>
                    Copyright &copy; 2024 Invasign All rights reserved
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <a href="#about" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>About Us</a>
                    <a href="#services" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Services</a>
                    <a href="#blog" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Blog</a>
                    <a href="#privacy-policy" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
                    <a href="#privacy-policy" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Terms & Conditions</a>
                </Box>
            </Box>
        </Box>
    )
}
