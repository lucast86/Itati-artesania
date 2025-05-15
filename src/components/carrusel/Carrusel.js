import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataSlick } from './carruselData';
import './carrusel.css';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Typography} from '@mui/material';

// botones personalizados 
const PreviousBtn = (props) => {

    const { className, onClick } = props;

    return(
        <div className={className} onClick={onClick}>
        <ArrowBackIos className="iconSlick"/>
        </div>
    );
};

const NextBtn = (props) => {

    const {className, onClick} = props;
    
    return(
        <div className={className} onClick={onClick}>
        <ArrowForwardIos className="iconSlick"/>
        </div>
    );
};

const Carrusel = () => {

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    centerMode: false, // Asegúrate de que esté en false
    centerPadding: "0", // Sin padding adicional en el centro
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
};
    
return (
    <div className="container">
        <div className="container_slinder">
            <Typography variant="h4" align="center" gutterBottom sx={{m: 1, textShadow: '0.5px 0.5px 1px #6C528A', color: '#6C528A'}}>
                Algunas Prendas Tejidas con Amor
            </Typography>
            <Slider {...settings}>
                {dataSlick.map(item =>(
                        <figure className="cards" key={item.id}>
                            <div className="cards_img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h5>{item.simpleDescription}</h5>
                        </figure>
                    ))
                }
            </Slider>
        </div>
    </div>

    )
}

export default Carrusel
