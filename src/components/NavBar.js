import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#13192d', height: 'auto', top: 0, paddingTop: '1%', paddingBottom: '1%' }}>
        <Toolbar
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'space-between',
          }}
        >
          {/* Logo */}
          <IconButton
            edge="start"
            sx={{
              padding: 0,
              ...(isMobile && { justifyContent: 'center', flex: 1 }),
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: isMobile ? 200 : 300,
                height: isMobile ? 60 : 90,
                objectFit: 'contain',
              }}
            />
          </IconButton>

          {/* Menu Icon for mobile */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer(true)} sx={{ color: 'white', position: 'absolute', right: 16 }}>
              <MenuIcon />
            </IconButton>
          )}

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                {/* <a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Gallery</Button>
                </a>
                <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Features</Button>
                </a> */}
                <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">About Us</Button>
                </a>
                {/* <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Invisalign</Button>
                </a> */}
                <a href="#team" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Our Team</Button>
                </a>
                <a href="#qna" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">FAQ</Button>
                </a>
                {/* <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Testimonials</Button>
                </a> */}
                <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
                  <Button color="inherit" size="large">Contact</Button>
                </a>
                <a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none' }}>
                  <IconButton color="inherit">
                    <Button startIcon={<CallIcon />} color="inherit" size="large">+1 123 456 789</Button>
                  </IconButton>
                </a>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#13192d', color: 'white' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* <ListItem button>
              <ListItemText primary={<a href="#gallery" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Gallery</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#features" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Features</a>} />
            </ListItem> */}
            <ListItem button>
              <ListItemText primary={<a href="#about" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>About Us</a>} />
            </ListItem>
            {/* <ListItem button>
              <ListItemText primary={<a href="#services" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Invisalign</a>} />
            </ListItem> */}
            <ListItem button>
              <ListItemText primary={<a href="#team" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Our Team</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#qna" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>FAQ</a>} />
            </ListItem>
            {/* <ListItem button>
              <ListItemText primary={<a href="#testimonials" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Testimonials</a>} />
            </ListItem> */}
            <ListItem button>
              <ListItemText primary={<a href="#contact" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Contact</a>} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={<a href="#contact" style={{ display:"flex", alignItems:"center", color: 'white', fontWeight: 'bold', textDecoration: 'none' }}> <CallIcon />  {'+1 123 456 789'}</a>} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
