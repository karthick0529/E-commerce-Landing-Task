import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; 2024 E-commerce Store. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
