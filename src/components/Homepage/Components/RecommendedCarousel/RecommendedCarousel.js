import React from 'react'
import Slider from "react-slick";
import movies from './data';
import {  Card } from 'react-bootstrap';
import mov1 from '../../../../images/movie1.png'
import mov2 from '../../../../images/movie2.png'
import mov3 from '../../../../images/movie3.png'
import mov4 from '../../../../images/movie4.png'
import mov5 from '../../../../images/movie5.png'

const RecommendedCarousel = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
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
        <Slider {...settings}>
                       
                        {movies.map((mov) => {
                            return (
                                    <div>
                                    <Card style={{ width: '22rem', border: 'none' }}>
                                        <Card.Img variant="top" src={mov1} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                                        <Card.Body align="left">
                                            <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                                {mov.title}
                                            </Card.Title>
                                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                                {mov.type}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </div>
                            )
                        })}
        </Slider>
      )
}

export default RecommendedCarousel