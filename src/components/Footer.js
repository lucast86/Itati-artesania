import React from 'react'
import { Container, Typography, Box, IconButton } from '@mui/material';
import { Email } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box 
        component="footer" 
        sx={{ 
            backgroundColor: '#736593', 
            color: 'white',
            textAlign: 'center', 
            py: 1.5, 
            mt: 'auto', 
            width: '100%',
            position: 'relative', // Para evitar problemas de superposición
            bottom: 0, // En caso de que sea necesario forzarlo hacia abajo
        }}
    >
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between', 
                alignItems: 'center' 
            }}
        >
            <Typography>©2025 Itati</Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1, // Espaciado entre íconos
                    justifyContent: 'center',
                }}
            >
                <IconButton sx={{ color: 'white' }} href="mailto:claudiamolina386@gmail.com">
                <Email />
                </IconButton>
                <IconButton sx={{ color: 'white' }} href="https://wa.me/542954270863">
                <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  sx={{ color: 'white' }} 
                  href="https://www.instagram.com/itati.artesanias/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <InstagramIcon />
                </IconButton>
            </Box>
        </Container>
  </Box>
  )
}

export default Footer

