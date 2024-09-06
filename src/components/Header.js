import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import backgroundVideo from '../assets/2.mp4';

export const Header = (props) => {
  const [showForm, setShowForm] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <header id="header">
      <Box className="video-container" sx={{ position: 'relative', overflow: 'hidden', height: '80vh' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box className="overlay" sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          color: 'white', textAlign: 'center', p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }} // Responsive font size
            >
              {props.data ? props.data.title : "Loading"}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} // Responsive font size
            >
              {props.data ? props.data.paragraph : "Loading"}
            </Typography>
            <Button
              variant="contained"
              onClick={handleFormToggle}
              sx={{
                mt: 3,
                backgroundColor: '#13192d',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
                padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' } // Responsive padding
              }}
            >
              Book a free consultation
            </Button>
          </motion.div>
        </Box>
      </Box>
      <ConsultationForm open={showForm} onClose={handleFormToggle} />
    </header>
  );
};
const ConsultationForm = ({ open, onClose }) => {
  const styleInputProps = {
    sx: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#13192d',
        },
        '&:hover fieldset': {
          borderColor: '#13192d',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#13192d',
        },
      },
      '& .MuiInputBase-input::placeholder': {
        color: '#13192d',
      },
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      // disableScrollLock // Add this line to enable scrolling
      sx={{
        '& .MuiPaper-root': {
          border: '2px solid #13192d', // Add border effect
        }
      }}
    >
      <DialogTitle
        marginBottom={1}
        sx={{
          backgroundColor: '#13192d',
          color: 'white'
        }}
      >
        Consultation Form
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#13192d' } }}
            InputProps={styleInputProps}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: '#13192d' } }}
            InputProps={styleInputProps}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#13192d' } }}
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#13192d',
                    },
                    '&:hover fieldset': {
                      borderColor: '#13192d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#13192d',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#13192d',
                  },
                },
              }}
            />
            <TextField
              // label="Preferred Consultation Date/Time" 
              type="datetime-local"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ style: { color: '#13192d' } }}
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#13192d',
                    },
                    '&:hover fieldset': {
                      borderColor: '#13192d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#13192d',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#13192d',
                  },
                },
              }}
            />
          </Box>
          <TextField
            label="Additional Comments"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: '#13192d' } }}
            InputProps={styleInputProps}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ mt: 2, gap: 1 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: '#13192d',
            borderColor: '#13192d',
            '&:hover': {
              borderColor: '#192655', // Update hover background color
            }
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#13192d',
            '&:hover': {
              backgroundColor: '#192655', // Update hover background color
            }
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
