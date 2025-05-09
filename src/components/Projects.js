import React from 'react'
import { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography} from '@mui/material';
import bufandaItati from '../../src/assets/images/bufandaItati.jpg'
import camperaBlancaItati from '../../src/assets/images/camperaBlancaItati.jpg'
import camperaItati from '../../src/assets/images/camperaItati.jpg'
import camperaNarItati from '../../src/assets/images/camperaNarItati.jpg'
import chaleloDamaItati from '../../src/assets/images/chaleloDamaItati.jpg'
import chalecoItati from '../../src/assets/images/chalecoItati.jpg'

const projects = [
    { 
        title: 'Chaleco de niñ@',
        simpleDescription: 'Tejido en dos agujas con lana en colores naturales.', 
        img: chalecoItati 
    },
    { 
        title: 'Poncho Dama', 
        simpleDescription: 'Realizado a partir de dos rectángulos en telar. Lana hilada, tonos natural y teñida con colorante de torta', 
        img: chaleloDamaItati 
    },
    { 
        title: 'Campera', 
        simpleDescription: 'Con mangas anchas realizada en crochet.', 
        img: camperaNarItati 
    },
    { 
        title: 'Bufanda 🧣',
        simpleDescription: 'Tejida en telar al bies teñida con colorante de torta.', 
        img: bufandaItati 
    },
    { 
        title: 'Campera', 
        simpleDescription: 'Tejida en telar con lana de llama en tonos natural y diferentes marrones 🤍🤎.', 
        img: camperaItati 
    },
    { 
        title: 'Chaleco', 
        simpleDescription: 'Realizado en telar, con lana de oveja en tonos marrones y blanco con flecos 🤩🤎🤍.', 
        img: camperaBlancaItati 
    },
];

const Projects = () => {

  return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '40px 16px' ,
            }}
        >
            <Typography variant="h4" align="center" gutterBottom sx={{m: 8, textShadow: '0.5px 0.5px 1px #6C528A', color: '#6C528A'}}>
                Algunas Prendas Tejidas con Amor
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                <Grid item xs={11} md={3.5} key={index}>
                    <Card
                        sx={{
                            boxShadow: '0px 4px 8px #736593', // Sombra personalizada en azul
                            transition: 'box-shadow 0.3s ease-in-out', // Animación de la sombra
                            '&:hover': {
                            boxShadow: '0px 6px 12px #6C528A', // Sombra más intensa al hacer hover
                        }}}
                    >
                    <CardMedia component="img" height="450" image={project.img} />
                    <CardContent>
                        <Typography variant="h5"  sx={{color: '#6C528A'}}>{project.title}</Typography>
                        <Typography sx={{color: '#6C528A'}}>{project.simpleDescription}</Typography>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
    };

export default Projects