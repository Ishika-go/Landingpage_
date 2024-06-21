import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ModalForm from './ModalForm';

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="h5" component="h2" paragraph>
        We're excited to have you here. Learn more about what we do.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <ModalForm open={open} handleClose={handleClose} />
    </Container>
  );
};

export default LandingPage;
