import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import playbutton from '../../../../images/red-play-button.png';
import rupaylogo from '../../../../images/rupay-logo.png';

import Slider from "react-slick";
import movies from './data';
import mov1 from '../../../../images/movie4.png'


const Premiere = () => {
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
        <div style={{ backgroundColor: '#22303C' }}>
            <Row style={{ marginTop: '4rem' ,marginBottom: '4rem' }}>
                <Row>
                    <Col xs={2} algin="left"  style={{marginLeft:'-5rem'}}>
                        <img style={{ width: '30%' }} src={playbutton}></img>
                    </Col>
                    <Col xs={5} align="left" style={{ marginLeft: '-6rem' }}>
                        <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 'bold' }}>P R E M I E R E</h1>
                        <h3 style={{ fontSize: '1.5rem', color: 'white' }}>
                            Watch new movies at home, every Friday
                        </h3>
                    </Col>

                    <Col xs={5} align="right" >
                        <h2 style={{ color: 'white', marginRight:'-10rem',fontSize: '1.8rem' }}>powered by <img style={{ width: '25%' }} src={rupaylogo} /></h2>
                    </Col>
                    {/* <Col xs={2} align="left">
                    <img style={{width:'70%'}} src={rupaylogo}/>
                    </Col> */}
                </Row>

                <Row align="left" style={{ marginLeft:'2rem',marginTop: '3rem'  }}>
                <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 'bold' }}>Premieres</h1>
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Brand new releases every Friday</h3>
                </Row>

                <Row style={{margin:'2rem'}}>
                    <Slider {...settings}>

                        {movies.map((mov) => {
                            return (
                                <div>
                                    <Card style={{ width: '20rem',height: '4rem',border: 'none' }}>
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

export default Premiere;
