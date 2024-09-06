import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';


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


export const Testimonials = (props) => {
  const videoMap = {
    '../assets/1.mp4': video1,
    '../assets/2.mp4': video2
  };

  return (
    <Box id="testimonials" sx={{ py: 4, backgroundColor: '#13192d' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block',
            mb: 2,
            borderBottom: '4px solid white', // Adjust thickness and color as needed
            color: 'white'
          }}>What our clients say</Typography>

        </Box>
        <Carousel
          // showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
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
          {props.data
            ? props.data.map((d, i) => (
              <motion.div
                key={`${d.name}-${i}`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '280px',
                    mb: 2,
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  {d.video ? (
                    <ReactPlayer
                      url={videoMap[d.video]}
                      width="100%"
                      height="100%"
                      controls
                      playing
                      style={{ borderRadius: '8px' }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={d.img}
                      alt=""
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  )}
                </Box>
                <Box sx={{ textAlign: 'center', color: 'white', maxWidth: '500px' }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {d.text}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: '8%' }}>
                    - {d.name}
                  </Typography>
                </Box>
              </motion.div>
            ))
            : "loading"}
        </Carousel>
      </Container>
    </Box>
  );
};
