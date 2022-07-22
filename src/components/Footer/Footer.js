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
      <Row style={{marginLeft:'1rem',marginRight:'1rem',marginTop:'5rem',marginBottom:'2rem'}}>
      <Row >
        <Col xs={5} >
        <hr style={{marginTop:'2rem',color: 'white', fontWeight: 'bold' }}></hr>
        </Col>
        <Col xs={2}>
        <img src={logo} style={{ width: '90%', height: '4rem' }} />
        </Col>
        <Col xs={5}>
        <hr style={{marginTop:'2rem',color: 'white', fontWeight: 'bold' }}></hr>
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

      <Row>
        <h4 style={{color: '#808080'}}>Copyright 2022 © Bigtree Entertainment Pvt.Ltd. All Rights Reserved.</h4>
        <h4 style={{color: '#808080'}}>The content and images used on this site are copyright protected vests 
        with the respective owners. The usage of the content and images on this website is intended to promote the 
        works and no endorsement of the artist shall be implied.Unauthorized use is prohibited and punishable by law.</h4>
      </Row>

      </Row>
    </div>
  )
}

export default Footer