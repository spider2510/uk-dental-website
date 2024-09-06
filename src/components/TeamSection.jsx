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
        name: 'John Doe',
        experience: '5 years',
        introduction: 'John is a seasoned developer with expertise in frontend technologies.',
        image: 'https://img.freepik.com/free-photo/portrait-friendly-smiling-male-doctor-man_171337-5064.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'Jane Smith',
        experience: '8 years',
        introduction: 'Jane is a project manager who ensures everything runs smoothly.',
        image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'John Doe',
        experience: '5 years',
        introduction: 'John is a seasoned developer with expertise in frontend technologies.',
        image: 'https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    // Add more team members as needed
];

export const TeamSection = () => {
    return (
        <Box id="team" sx={{ backgroundColor: '#13192d', py: 4, paddingX: 'none' }} >
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2 }}>
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
                        Our Team
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                        Meet our dedicated team of professionals who work tirelessly to deliver the best results.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={2.4} key={index}>
                            <Box>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 150,
                                        width: 150, // Ensure the width and height are equal
                                        objectFit: 'cover',
                                        borderRadius: '50%' // Make the image circular
                                    }}
                                    src={member.image}
                                    alt={member.name}
                                />
                                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }} color={"white"}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Experience: {member.experience}
                                </Typography>
                                <Typography variant="body2" color="white">
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
