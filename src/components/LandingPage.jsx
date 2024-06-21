import React, { useState } from 'react';
import { Button, Container, Slider, Stack, Typography } from '@mui/material';
import ModalForm from './ModalForm';
import Navbar from './Navbar/Navbar';
import Sliderview from './SliderComp/Slider';
import Cardnavigation from './Cardnavigation';
import Footer from './FAQ/Footer';
const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container style={{ margin: '0 ', padding:'0' , maxWidth: 'none' }}>
      <Navbar />
      <Stack  style={{ textAlign: 'center', margin:'auto', marginTop:'70px'}}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="h5" component="h2" paragraph>
        We're excited to have you here. Learn more about what we do.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} style={{ width:'40%' , margin: 'auto' }}>
        Learn More
      </Button>
      <ModalForm open={open} handleClose={handleClose} />
      </Stack>
      
      
      <Cardnavigation />
      <Sliderview  />
      <Footer/>
    </Container>
  );
};

export default LandingPage;
