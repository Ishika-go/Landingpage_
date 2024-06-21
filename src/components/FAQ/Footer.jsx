import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  
  import FooterLink from "./FooterLink";
  
  export default function Footer() {
    return (
      <Box width="100%" bgcolor="black" pb={3} pt={6}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Conditions</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <FooterLink>Instagram</FooterLink>
                <FooterLink>Facebook</FooterLink>
                <FooterLink>Twitter</FooterLink>
                <FooterLink>Linkedin</FooterLink>
              </Stack>
            </Grid>
  
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Appointment</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </Stack>
            </Grid>
          </Grid>
  
          <Typography
            fontWeight={300}
            color="#fff"
            fontSize={14}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    );
  }
  