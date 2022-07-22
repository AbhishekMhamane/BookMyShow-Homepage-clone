import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import playbutton from '../../../../images/red-play-button.png';
import rupaylogo from '../../../../images/rupay-logo.png';

import Slider from "react-slick";
import movies from './data';
import mov1 from '../../../../images/Entertainment-img.png'


const Entertainment = () => {
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
        <div >
            <Row style={{ marginLeft: '2rem',marginTop: '5rem' ,marginBottom: '4rem' }}>
                <Row>
                    <Col align="left">
                        <h1 style={{marginBottom:'2rem',fontSize: '2.5rem', fontWeight: 'bold' }}>The Best of Entertainment</h1>
                    </Col>
                </Row>

                <Row >
                    <Slider {...settings}>

                        {movies.map((mov) => {
                            return (
                                <div>
                                    <Card style={{ width: '22rem',height: '4rem',border: 'none' }}>
                                        <Card.Img variant="top" src={mov1} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                                    </Card>
                                </div>
                            )
                        })}
                    </Slider>
                </Row>

            </Row>
        </div>
    )
}

export default Entertainment;