import logo from './logo.svg';
import { Button, Typography } from '@mui/material'
import './App.css';
import { Container, Row,Nav } from 'react-bootstrap';
import Header from './components/Header/Header';
import Demo from './components/Header/Demo';
import Subheader from './components/Subheader/Subheader.js';

function App() {
  return (
    <div className="App">
      <Container fluid>

        <Row>
        <Header/>
        </Row>
        {/* <Row>
          <Subheader/>
        </Row> */}

      </Container>      
    </div>
  );
}

export default App;
