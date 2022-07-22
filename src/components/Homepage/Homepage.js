import React from 'react';
import { Container, Row, Nav, Carousel, Card } from 'react-bootstrap';
import './Homepage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RecommendedCarousel from './Components/RecommendedCarousel/RecommendedCarousel';
import Premiere from './Components/Premiere/Premiere';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import Entertainment from './Components/Entertainment/Entertainment';


function Homepage() {
    return (
        <div >
            <Container fluid>

                <Row>
                    <Header />
                </Row>

                <Row style={{ marginTop: '11rem' }}>
                    <Carousel variant="dark" style={{ height: '30rem'}}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>

                <Row style={{ padding: '1%' }}>
                    <Row>
                        <h1 align="left" style={{ fontWeight: 'bold', margin: '0.5rem' }}>Recommended Movies</h1>
                    </Row>
                    <Row style={{ marginTop: '0.5rem', marginLeft: '0.2rem' }}>
                        <RecommendedCarousel />
                    </Row>
                </Row>

                <Row >
                    <Premiere />
                </Row>

                <Row>
                    <Entertainment/>
                </Row>

                <Row>
                    <Footer/>
                </Row>

            </Container>
        </div>
    );
}

export default Homepage;