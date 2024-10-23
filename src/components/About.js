import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Why from './Why';
import Testimonials from './Testimonials';
import Card from 'react-bootstrap/Card';
function About() {
  return (
    <div>
      <Container fluid>
      <Row className='bg-success text-white p-3 text-start '>
        <Col className='ps-5'>
              <h1 className='fw-bold  w-75 mt-5'>About</h1>
              <p className='fs-6 mt-4 mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <Button variant="warning rounded-pill fw-bold p-3 w-25 mb-4">Shop Now</Button>
              <Button variant="outline-light rounded-pill fw-bold p-3 ms-4 w-25 mb-4">Explore</Button>
        </Col>
        <Col>
           <img src='./images/couch.png' alt='' className='img-fluid w-100 mx-auto d-block' />
        </Col>
      </Row>
      </Container>
      <Why/>
      <Container>
      <Row className='mt-4 mb-4'>
        <h1 className='text-center'>Our Team</h1>
       <Col>
       <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_1.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
         <h4> <u>Lawson Arnold</u></h4>
          <p>CEO, Founder,Atty</p>
        </Card.Title>
        <Card.Text>
         <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
       </Col> 
       <Col>
       <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_2.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
         <h4> <u>Jeremy Walker</u></h4>
          <p>CEO, Founder,Atty</p>
        </Card.Title>
        <Card.Text>
         <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
       </Col> 
       <Col>
       <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_3.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
         <h4> <u>Patrik White</u></h4>
          <p>CEO, Founder,Atty</p>
        </Card.Title>
        <Card.Text>
         <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
       </Col> 
       <Col>
       <Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src="./images/person_4.jpg" />
      <Card.Body className='text-start'>
        <Card.Title>
         <h4> <u>Kathryn Ryan</u></h4>
          <p>CEO, Founder,Atty</p>
        </Card.Title>
        <Card.Text>
         <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
       </Col> 
      </Row>
      </Container>
      <Testimonials/>
    </div>
  )
}


export default About
