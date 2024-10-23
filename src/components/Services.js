import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function Services() {
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
      <Container fluid className='bg-light mt-4 mb-4 text-start p-5'>
        <table className='table table-light table-borderless'> 
           <tr>
           <td>
                    <img src='./images/truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                
                <td>
                    <img src='./images/support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
           
            </tr> 

            <tr>
           <td>
                    <img src='./images/truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                
                <td>
                    <img src='./images/support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
           
            </tr> 
        </table>
      </Container>
    </div>
  )
}

export default Services
