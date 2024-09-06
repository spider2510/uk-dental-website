import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const teamMembers = [
    {
        name: 'John Doe',
        experience: '5 years',
        introduction: 'John is a seasoned developer with expertise in frontend technologies.',
        image: 'https://img.freepik.com/free-photo/female-doctor-lab-coat-white-isolated-confident-smile_343596-6556.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'Jane Smith',
        experience: '8 years',
        introduction: 'Jane is a project manager who ensures everything runs smoothly.',
        image: 'https://img.freepik.com/premium-photo/doctor-physician-person-concept_1194-605094.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'Jane Smith',
        experience: '8 years',
        introduction: 'Jane is a project manager who ensures everything runs smoothly.',
        image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
];

export const TeamSection = () => {
    return (
        <Box id="team" marginBottom={4} sx={{ backgroundColor: '#13192d', py: 4, paddingX: 'none' }} >
            <Box sx={{ maxWidth: '1000px', margin: '0 auto', px: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                            mb: 2,
                            borderBottom: '4px solid #13192d', // Adjust thickness and color as needed
                            color: 'white'
                        }}
                        gutterBottom
                    >
                        Our Professionals work with you to provide all the dental treatment you need
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ backgroundColor: 'white', padding: 2, boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)', height: '100%' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 250, // Increased height
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                    src={member.image}
                                    alt={member.name}
                                />
                                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }} color={"black"}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" color="grey">
                                    Doctor
                                </Typography>
                                <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                                    Experience: {member.experience}
                                </Typography>
                                <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                                    {member.introduction}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
