import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import image from '../../src/assets/images/fondoHeaderItati.jpg' // importamos la image y en la llinea 140 la usamos

const About = () => {
    return (
        <Box
            sx={{
                height: '100vh', // Ocupa toda la altura de la pantalla
                backgroundImage: `url(${image})`, // Ruta de la imagen de fondo
                backgroundSize: 'cover', // La imagen cubrirá todo el contenedor
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex', // Para centrar el contenido dentro de la sección
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#736593',
                backgroundBlendMode: 'lighten'
            }}
        >
            <Container>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    Itatí - tejidos e hilados
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, fontStyle: 'italic' }}>
                    Mi nombre es Claudia Molina. En Itatí, encontrás piezas únicas, realizadas en todo tipo de lana o hilo.
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, fontStyle: 'italic' }}>
                    Además, la producción de hilados pasando por todo el proceso productivo. Desde el lavado, teñido e hilados de la lana.
                </Typography>
            </Container>
        </Box>  
    )
}

export default About
