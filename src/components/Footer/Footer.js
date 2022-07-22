import React from 'react'
import {  Row,Col, Table } from 'react-bootstrap';
import logo from '../../images/logo.png';
import youtubeLogo from '../../images/youtube-logo.jpg';
import facebookLogo from '../../images/facebook-logo.png';
import instagramLogo from '../../images/instagram-logo.png';
import printerestLogo from '../../images/printerest-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import twitterLogo from '../../images/twitter-logo.png';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#22303C'}}>
      <Row style={{margin:'3rem'}}>
      <Row >
        <Col>
        <img src={logo} style={{ width: '15%', height: '4rem' }} />
        </Col>
      </Row>

      <Row  style={{marginTop:'4rem',marginBottom:'3rem',justifyContent: 'center'}} >
        <Table style={{width: '15%', height: '4rem'}}>
          <tr>
            <td><img src={facebookLogo} style={{ width: '5rem'}} /></td>
            <td><img src={twitterLogo} style={{ width: '5rem'}} /></td>
            <td><img src={instagramLogo} style={{ width: '5rem'}} /></td>
            <td><img src={youtubeLogo} style={{ width: '5rem'}} /></td>
            <td><img src={printerestLogo} style={{ width: '5rem'}} /></td>
            <td><img src={linkedinLogo} style={{ width: '5rem'}} /></td>
          </tr>
        </Table>
      </Row>

      </Row>
    </div>
  )
}

export default Footer