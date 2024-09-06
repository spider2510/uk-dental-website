import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const qnaData = [
  { question: "What is Invisalign?", answer: "Invisalign is an orthodontic treatment that uses a series of clear, removable aligners to straighten your teeth. Unlike traditional braces, Invisalign aligners are nearly invisible and can be taken out when eating or brushing your teeth." },
  { question: "How does Invisalign work?", answer: "Invisalign works by gradually shifting your teeth into the desired position using a set of custom-made aligners. Each aligner is worn for about 1-2 weeks before moving on to the next one in the series, with periodic check-ups at the practice to monitor your progress." },
  { question: "Is Invisalign right for me?", answer: "Invisalign can treat a wide range of orthodontic issues, including crowded teeth, gaps, and bite problems. During your consultation, our team will assess your needs and determine if Invisalign is the best option for you." },
  { question: "How long does Invisalign treatment take?", answer: "Treatment duration varies depending on the complexity of your case, but most patients start seeing results within a few months. On average, complete treatment takes between 6 to 18 months." },
  { question: "How often do I need to wear my aligners?", answer: "For optimal results, Invisalign aligners should be worn for 20-22 hours a day, only removing them to eat, drink (except water), brush, and floss." },
  { question: "Is Invisalign painful?", answer: "While Invisalign is generally more comfortable than traditional braces, some patients may experience mild discomfort or pressure when switching to a new set of aligners. This is normal and usually subsides after a few days as your teeth adjust." },
  { question: "How much does Invisalign cost?", answer: "The cost of Invisalign varies based on the complexity of your treatment. During your consultation, we will provide a detailed breakdown of costs and discuss financing options to help you achieve your dream smile affordably." },
  { question: "Can I eat and drink with Invisalign?", answer: "Yes, one of the advantages of Invisalign is that you can remove the aligners when eating and drinking. However, it’s important to brush your teeth before putting the aligners back in to avoid trapping food particles." },
  { question: "How do I care for my aligners?", answer: "To keep your aligners clean and clear, rinse them regularly with lukewarm water and brush them gently with a soft toothbrush. Avoid using hot water, which can warp the plastic." },
  { question: "How do I get started with Invisalign?", answer: "To get started, simply book a consultation with us at Rothley Lodge Dental Practice. We’ll assess your smile, discuss your goals, and create a customized treatment plan to begin your journey to a straighter smile." },
];

export const QnA = () => {
  return (
    <Box id="qna" sx={{ backgroundColor: '#FFF', py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
            }}
            gutterBottom>
            Frequently Asked Questions
          </Typography>
          {/* <Divider sx={{ width: '60px', height: '3px', backgroundColor: '#007bff', mx: 'auto', mb: 3 }} /> */}
        </Box>
        <Box>
          {qnaData.map((item, index) => (
            <Accordion key={index} sx={{ mb: 2, boxShadow: 3, borderRadius: '8px', borderColor:'transparent' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ backgroundColor: '#FFF', color: '#000', fontWeight: 'bold' }}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#555' }}>
                <Typography variant="body1">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
