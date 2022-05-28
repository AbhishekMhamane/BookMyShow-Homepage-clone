import logo from './logo.svg';
import { Button, Typography } from '@mui/material'
import Header from './components/Header/Header';
import Demo from './components/Header/Demo';
import './App.css';
import { Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Header/>
        </Row>
      
      </Container>      
    </div>
  );
}

export default App;
