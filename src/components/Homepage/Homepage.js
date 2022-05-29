import React from 'react';
import { Container, Row, Nav, Carousel, Card } from 'react-bootstrap';
import './Homepage.css';
import Header from '../Header/Header';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import mov1 from '../../images/movie1.png'
import mov2 from '../../images/movie2.png'
import mov3 from '../../images/movie3.png'
import mov4 from '../../images/movie4.png'
import mov5 from '../../images/movie5.png'


const movies = [
    {
        title: 'Bhool Bhulaiyaa 2',
        type: 'Comedy/Horror',
        source: 'mov1'
    },
    {
        title: 'Jurassic World:Dominion',
        type: 'Action/Adventure/Sci-Fi/Thriller',
        source: 'mov2'
    },
    {
        title: 'Top Gun',
        type: 'Action/Drama',
        source: 'mov3'
    },
    {
        title: 'Sarsenapati Hambirrao',
        type: 'Action/Drama/Historical',
        source: 'mov4'
    },
    {
        title: 'Doctor Strange: In The Multiverse Of Madness',
        type: 'Action/Adventure/Fantasy',
        source: 'mov5'
    }
];

function Homepage() {
    return (
        <div >
            <Container fluid>

                <Row>
                    <Header />
                </Row>

                <Row style={{ marginTop: '11rem' }}>
                    <Carousel variant="dark" style={{ height: '30rem' }}>
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

                <Row style={{ padding: '2%' }}>
                    <Row>
                        <h1 align="left" style={{ fontWeight: 'bold' }}>Recommended Movies</h1>
                    </Row>
                    <Row style={{ marginTop: '0.5rem' }}>
                        <Card style={{ width: '24rem', border: 'none' }}>
                            <Card.Img variant="top" src={mov1} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                            <Card.Body align="left">
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                    {movies[0].title}
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                    {movies[0].type}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '24rem', border: 'none' }}>
                            <Card.Img variant="top" src={mov2} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                            <Card.Body align="left">
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                    {movies[1].title}
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                    {movies[1].type}
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card style={{ width: '24rem', border: 'none' }}>
                            <Card.Img variant="top" src={mov3} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                            <Card.Body align="left">
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                    {movies[2].title}
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                    {movies[2].type}
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card style={{ width: '24rem', border: 'none' }}>
                            <Card.Img variant="top" src={mov4} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                            <Card.Body align="left">
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                    {movies[3].title}
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                    {movies[3].type}
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card style={{ width: '24rem', border: 'none' }}>
                            <Card.Img variant="top" src={mov5} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                            <Card.Body align="left">
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                    {movies[4].title}
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                    {movies[4].type}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* {movies.map((mov) => {
                            return (
                               
                                    <Card style={{ width: '24rem', border: 'none' }}>
                                        <Card.Img variant="top" src={mov.source} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
                                        <Card.Body align="left">
                                            <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                                {mov.title}
                                            </Card.Title>
                                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                                {mov.type}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            )
                        })} */}
                    </Row>
                </Row>

            </Container>
        </div>
    );
}

export default Homepage;