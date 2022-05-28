import React from 'react';
import { AppBar, Grid, Button, Toolbar, Typography, Box, TextField, IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import classes from './Header.css';
import logo from '../../images/logo.png';
import { Container, Row,Col, Nav } from 'react-bootstrap';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
  },
});

const Header = () => {

  const classes = useStyles();

  return (
    <div >
      <Container fluid st>
        <Row>
          <AppBar >

            <Row style={{ backgroundColor: '#22303C' }}>
            <Toolbar>


                <Col xs={7} >

                  <Row>
                  <Col xs={3} >
                    <img src={logo} style={{ width: '90%', height: '4rem' }} />
                  </Col>

                  <Col xs={9}>

                    <TextField fullWidth size="small"
                      placeholder="Search for Movies, Events, Plays, Sports and Activities"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">
                          <SearchIcon fontSize="large" /></InputAdornment>,
                        style: {
                          fontSize: 15,
                          backgroundColor: 'white',

                        }
                      }} />
                  </Col>
                  </Row>

                </Col>


                <Col xs={5} align="right" >

                  <Button
                    size="small"
                    endIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    style={{
                      backgroundColor: 'transparent',
                      marginRight: '1rem',
                    }}>
                    <Typography variant="h6" color="white">
                      Mumbai
                    </Typography>
                  </Button>


                  <Button variant="contained" size="small" style={{
                    backgroundColor: '#DC143C',
                    fontWeight: 'bold', fontSize: '1rem', marginRight: '1rem'
                  }}>
                    Sign In
                  </Button>


                  <IconButton style={{
                    justifyContent: 'right', position: 'relative'
                  }}><MenuIcon fontSize="large" style={{ color: 'white', fontSize: '3rem' }} /></IconButton>

                </Col>

            </Toolbar>
            </Row>

            <Row style={{ backgroundColor: '#DC143C',paddingLeft: '1.5rem',paddingRight: '1.5rem'}}>
                    <Col xs={6}>
                    <Nav >

                        <Nav.Item as="li" >
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Movies</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Stream</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Event</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Plays</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Sport</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Activities</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Buzz</h5> </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>

                    <Col xs={6}>
                    <Nav className="justify-content-end">

                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>ListYourShow</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Corporates</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Offers</h5> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/" style={{color: 'white'}}> <h5>Gift Cards</h5> </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                </Row>


          </AppBar>
 
      </Row>
     
      </Container>
    </div>
  )
}

export default Header

