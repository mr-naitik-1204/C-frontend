import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const DetailPage = () => {
  // Fetching data passed via the router
  const location = useLocation();
  const { title, description, image } = location.state || {};  // Destructure from passed data

  return (
    <>
      <Nav />
      <Box sx={{ padding: '20px', textAlign: 'center',marginTop:"50px" }}>
        <Container maxWidth="md">
        <Box sx={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#000',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: 3,
        }}>
          <img 
            src={image || './image/cup2.png'} 
            alt="Coffee Beans" 
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
          />
          <Typography 
            variant="h3" 
            sx={{ 
              marginTop: '20px', 
              fontWeight: '600', 
              color: 'white', 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },  // Responsive font size
            }}
          >
            {title || 'Special Coffee Beans'}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              marginTop: '15px', 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },  // Responsive font size
              color: 'white',
              lineHeight: 1.6,
            }}
          >
            {description || 'Coffee is flavoursome, fragrant and deeply rich in taste. It is often earthy with a discernible bitterness, but well-made coffee (using freshly roasted coffee beans) is defined by an enjoyable balance of flavours where sweet, bitter and acidic notes all work pleasantly together. Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content.'}
          </Typography>
        </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
