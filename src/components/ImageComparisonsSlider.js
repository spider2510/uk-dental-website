import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { Slider } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const ImageComparisonSlider = ({ image1, image2 }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setSliderPosition(newValue);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img src={image1} alt="Before" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <img src={image2} alt="After" style={{ width: '100%', height: 'auto' }} />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }}>
        <Slider
          value={sliderPosition}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
          sx={{ color: '#fff', width: '100%' }}
        />
      </Box>
      <IconButton sx={{ position: 'absolute', top: '50%', left: 0 }} onClick={() => setSliderPosition(Math.max(0, sliderPosition - 1))}>
        <ArrowBack sx={{ color: '#fff' }} />
      </IconButton>
      <IconButton sx={{ position: 'absolute', top: '50%', right: 0 }} onClick={() => setSliderPosition(Math.min(100, sliderPosition + 1))}>
        <ArrowForward sx={{ color: '#fff' }} />
      </IconButton>
    </Box>
  );
};

export default ImageComparisonSlider;
