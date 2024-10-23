import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
  return (
    <div className='bg-body-tertiary text-center mt-5'>
        <h1 className='pt-4'>Testimonials</h1>
        <Carousel>
      <Carousel.Item>
        <p className='fs-5 p-5 w-75 mx-auto d-block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <img src='./images/person-1.jpg' alt=''className='img-fluid mx-auto d-block rounded-circle' height={80} width={80}/>
       
          <h5>Maria Jones</h5>
          <p className='mb-4'>CEO, Co-Founder, XYZ Inc.</p>
       
      </Carousel.Item>
      <Carousel.Item>
      <p className='fs-5 p-5 w-75 mx-auto d-block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <img src='./images/person-1.jpg' alt=''className='img-fluid mx-auto d-block rounded-circle' height={80} width={80}/>
       
          <h5>Maria Jones</h5>
          <p className='mb-4'>CEO, Co-Founder, XYZ Inc.</p>
      </Carousel.Item>
      <Carousel.Item>
      <p className='fs-5 p-5 w-75 mx-auto d-block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <img src='./images/person-1.jpg' alt=''className='img-fluid mx-auto d-block rounded-circle' height={80} width={80}/>
       
          <h5>Maria Jones</h5>
          <p className='mb-4'>CEO, Co-Founder, XYZ Inc.</p>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Testimonials