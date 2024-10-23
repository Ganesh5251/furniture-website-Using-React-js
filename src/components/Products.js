import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
function Products() {
    let chairs=[
        {
            id:1,
            image:"./images/product-3.png",
            name:"Nordiac Chair",
            price:50.00
        },
        {
            id:2,
            image:"./images/product-1.png",
            name:"Nordiac Chair",
            price:50.00
        },
        {
            id:3,
            image:"./images/product-2.png",
            name:"Kruzo Aero Chair",
            price:78.00
        },
        {
            id:4,
            image:"./images/product-3.png",
            name:"Ergonomic Chair",
            price:43.00
        },
        {
            id:5,
            image:"./images/product-3.png",
            name:"Nordiac Chair",
            price:50.00
        },
        {
            id:6,
            image:"./images/product-1.png",
            name:"Nordiac Chair",
            price:50.00
        },
        {
            id:7,
            image:"./images/product-2.png",
            name:"Kruzo Aero Chair",
            price:78.00
        },
        {
            id:8,
            image:"./images/product-3.png",
            name:"Ergonomic Chair",
            price:43.00
        }
    ]
  return (
    <div>
        <Container>
        <div className='row row-cols-1 row-cols-md-4 mt-4 mb-4 g-4'>
            {
                chairs.map((item,index)=>{
                    return (
                        <div className='col' key={index}>
<Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <h4>$ {item.price}</h4>
        </Card.Text>
        <Button variant="dark" className='btn1 rounded-circle w-25 fs-3 '>+</Button>
      </Card.Body>
    </Card>
                        </div>
                    )
                })
            }
        </div>
        </Container>
    </div>
  )
}

export default Products