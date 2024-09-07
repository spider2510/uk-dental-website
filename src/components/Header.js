import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import backgroundImage from '../assets/SimonChard2023_Gili_6633.jpg';

export const Header = (props) => {
  const [showForm, setShowForm] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <header id="header">
      <Box className="image-container" sx={{ position: 'relative', overflow: 'hidden', height: '80vh' }}>
        <img src={backgroundImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box className="overlay" sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          color: 'white', textAlign: 'center', p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4" // Changed from h3 to h4
              component="h3"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} // Reduced font size
              marginTop={'15%'}
            >
              {props.data ? props.data.title : "Loading"}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' } }} // Reduced font size
            >
              {props.data ? props.data.paragraph : "Loading"}
            </Typography>
            <Button
              variant="contained"
              onClick={handleFormToggle}
              sx={{
                mt: 3,
                backgroundColor: '#13192d',
                fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem' }, // Reduced font size
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
            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' }, // Reduced font size
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
            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' }, // Reduced font size
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
