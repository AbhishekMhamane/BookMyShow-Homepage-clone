import React from 'react'
import { Container, Row,Col, Nav } from 'react-bootstrap';

const Subheader = () => {
    return (
        <div>
            <Container fluid>
                <Row style={{ paddingLeft: '2rem',paddingRight: '2rem', backgroundColor: "#242526", marginTop: '6.5rem' }}>
                    <Col xs={6}>
                    <Nav >

                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>

                    <Col xs={6}>
                    <Nav className="justify-content-end">

                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>ListYourShow</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/"> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subheader