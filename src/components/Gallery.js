import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import afterImage from '../assets/001.jpg';

// const afterImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ77-HkHcniJPT2chQC81ANv140C32CPOfQ&s";

export const Gallery = ({ data }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  const [isSwipeable, setIsSwipeable] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
        setIsSwipeable(false);
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50);
        setIsSwipeable(true);
      } else {
        setCenterSlidePercentage(33.33);
        setIsSwipeable(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#13192d', py: 4 }} id="gallery">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid white', // Adjust thickness and color as needed
              color:'white'
            }}>Gallery</Typography>
        </Box>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          showIndicators
          autoPlay
          interval={3000}
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          swipeable={isSwipeable}
          emulateTouch={isSwipeable}
          sx={{ width: '50%' }}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                ◀
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                ▶
              </button>
            )
          }
        >
          {data.map((image, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px' }}>
              <Box sx={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={image.largeImage} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, mb: 5, fontWeight: 'bold', textAlign: 'center' }}>
                {image.title}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

const arrowStyles = {
  position: 'absolute',
  top: '40%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  padding: '20px',
  cursor: 'pointer',
  zIndex: 2,
};
