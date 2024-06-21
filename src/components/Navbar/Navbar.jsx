import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import logo from '../../assets/bird.png';
import './Navbar.css';

export default function NavBar() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuSelect = (event) => {
    setSelectedMenu(event.target.value);
  };

  return (
    <header>
      <Container style={{ margin: '0 ', padding: '20px', maxWidth: 'none' }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <img src={logo} className="logo" alt="Logo" />
          <Stack
            direction={{ md: 'row' }}
            spacing={2}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            {/* Dropdown Select */}
            <Select
              value={selectedMenu}
              onChange={handleMenuSelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Menu' }}
            >
              <MenuItem value="" disabled>
                Menu
              </MenuItem>
              <MenuItem value="paid-ads">Paid Ads</MenuItem>
              <MenuItem value="lead-generation">Lead Generation</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="facilities">Facilities</MenuItem>
              <MenuItem value="about-us">About us</MenuItem>
            </Select>
            <Select
              value={selectedMenu}
              onChange={handleMenuSelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Menu' }}
            >
              <MenuItem value="" disabled>
                Menu
              </MenuItem>
              <MenuItem value="paid-ads">Paid Ads</MenuItem>
              <MenuItem value="lead-generation">Lead Generation</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="facilities">Facilities</MenuItem>
              <MenuItem value="about-us">About us</MenuItem>
              
            </Select>
            <Select
              value={selectedMenu}
              onChange={handleMenuSelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Menu' }}
            >
              <MenuItem value="" disabled>
                Menu
              </MenuItem>
              <MenuItem value="paid-ads">Paid Ads</MenuItem>
              <MenuItem value="lead-generation">Lead Generation</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="facilities">Facilities</MenuItem>
              <MenuItem value="about-us">About us</MenuItem>
              
            </Select>
            <Select
              value={selectedMenu}
              onChange={handleMenuSelect}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Menu' }}
            >
              <MenuItem value="" disabled>
                Menu
              </MenuItem>
              <MenuItem value="paid-ads">Paid Ads</MenuItem>
              <MenuItem value="lead-generation">Lead Generation</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="facilities">Facilities</MenuItem>
              <MenuItem value="about-us">About us</MenuItem>
              
            </Select>
            {/* Contact Button */}
            <Button
              variant="contained"
              className="contactButton"
              disableElevation
            >
              Contact us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}
