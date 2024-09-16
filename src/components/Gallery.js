import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography, Paper,Box, Container } from "@mui/material";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image data array
const imageData = [
  {
    title: "Project Title",
    largeImage: "img/portfolio/041.jpeg",
  },
  {
    title: "Project Title",
    largeImage: "img/portfolio/009.jpeg",
  },
  {
    title: "Project Title",
    largeImage: "img/portfolio/018.jpeg",
  },
  {
    title: "Project Title",
    largeImage: "img/portfolio/027.jpeg",
  },
  {
    title: "Project Title",
    largeImage: "img/portfolio/044.jpeg",
  },
  {
    title: "Project Title",
    largeImage: "img/portfolio/047.jpeg",
  },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
    AOS.refresh();
  }, []);

  // Settings for the Slick Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Time between slides in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="gallery" sx={{ textAlign: 'center', py: { xs: 2, md: 8 } }}>
      <Container>
      <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                            mb: 2,
                            // borderBottom: '4px solid #13192d', // Adjust thickness and color as needed
                            color:"#13192d"
                        }}
                        gutterBottom
                    >
            Gallery
          </Typography>
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <Slider {...settings}>
            {imageData.map((image, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden', margin: 2 }}>
                  <img
                    src={image.largeImage}
                    alt={image.title}
                    style={{
                      width: '80%',
                      height: 'auto',
                      objectFit: 'cover',
                      display: 'block', // Ensure the image fills the Paper container
                    }}
                  />
                </Paper>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Box>
  );
};

export default Gallery;