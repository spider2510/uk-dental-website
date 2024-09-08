import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Avatar, Container } from "@mui/material";
import { Star } from "@mui/icons-material";


const arrowStyles = {
  position: 'absolute',
  top: '40%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  zIndex: 2,
  Visibility: 'hidden'
};


const reviewData = [
  {
    user: {
      name: "John Doe",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid"
    },
    review: {
      appreciation: "Amazing service!", // A couple of words of appreciation
      comment: "I had a fantastic experience with my dental treatment. The staff was incredibly friendly, and the results were outstanding!",
      rating: 4, // Rating out of 5
    }
  },
  {
    user: {
      name: "John Doe",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid"
    },
    review: {
      appreciation: "Amazing service!", // A couple of words of appreciation
      comment: "I had a fantastic experience with my dental treatment. The staff was incredibly friendly, and the results were outstanding!",
      rating: 4, // Rating out of 5
    }
  },
  {
    user: {
      name: "John Doe",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid"
    },
    review: {
      appreciation: "Amazing service!", // A couple of words of appreciation
      comment: "I had a fantastic experience with my dental treatment. The staff was incredibly friendly, and the results were outstanding!",
      rating: 4, // Rating out of 5
    }
  },
  {
    user: {
      name: "John Doe",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid"
    },
    review: {
      appreciation: "Amazing service!", // A couple of words of appreciation
      comment: "I had a fantastic experience with my dental treatment. The staff was incredibly friendly, and the results were outstanding!",
      rating: 4, // Rating out of 5
    }
  },
  {
    user: {
      name: "John Doe",
      profession: "Software Engineer",
      image: "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid"
    },
    review: {
      appreciation: "Amazing service!", // A couple of words of appreciation
      comment: "I had a fantastic experience with my dental treatment. The staff was incredibly friendly, and the results were outstanding!",
      rating: 5, // Rating out of 5
    }
  }
]


export const ProductReviewCard = ({ user, review }) => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 345,
      mx: 'auto',
      textAlign: 'center',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow effect
      borderRadius: 1, // Slight border radius
      overflow: 'visible', // Ensure the shadow is visible
      height: '100%', // Ensure all cards have the same height
      padding: 1,
      marginBottom:5
    }}>
    
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            src={user.image}
            alt={user.name}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold" color="#13192d">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.profession}
            </Typography>
          </Box>
        </Box>

        {/* Comment Section */}
        <Typography variant="h6" component="h2" textAlign={"left"} >
          {review.appreciation} {/* Example: "Amazing service!" */}
        </Typography>
        <Typography variant="body2" color="text.primary" textAlign={"left"}>
          {review.comment}
        </Typography>

        {/* Rating Section */}
        <Box display="flex" alignItems="center" mt={2}>
          <Typography
            variant="h6"
            color="#FABC3F"
            sx={{ fontWeight: 'bold', mr: 1 }}
          >
            {review.rating}
          </Typography>
          <Box>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                sx={{
                  color: i < review.rating ? "#FABC3F" : "grey",
                  fontSize: 24,
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};



export const Testimonials = (props) => {

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box id="testimonials" mb={2} sx={{ py: 4, backgroundColor: 'white' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            color="#13192d"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
            }}
            gutterBottom
          >
            What our patient are saying about us
          </Typography>
          <Typography variant="h6" component="h3" color={'grey'}>
            What our patient have to say. Thanks you for your trust and support!
          </Typography>
        </Box>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}  // Enable center mode
          centerSlidePercentage={centerSlidePercentage}  // Show 70% of the center slide
          style={{ overflow: 'visible' }} // Add this line

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
          {reviewData.map((d, i) => (
            <motion.div
              key={`${d.user.name}-${i}`}
              style={{ display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -20, transition: { duration: 0.3 } }}  // Add lift-up effect on hover
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <ProductReviewCard user={d.user} review={d.review} />
            </motion.div>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};
