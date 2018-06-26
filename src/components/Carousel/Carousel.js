import React from 'react';
import {Carousel}  from 'react-bootstrap';
import './Carousel.css';
import house from './house.jpg';
import key from './key.jpg';
import location from './location.jpg';
import meeting from './meeting.jpg';
import relax from './relax.jpg';
import sold from './sold.jpg';



const carousel = () => {
    return (
        <div className='cat d-block w-100 sl-slider-wrapper' style={{left:'-4px', top: '15px'}}>
      
            <Carousel>

  <Carousel.Item>
    <img width={739} height={497} alt="900x500" src={house}  />
    <Carousel.Caption>
      <h3 className='house ttu f1'>we stand tall</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={739} height={497} alt="900x500" src={key} />
    <Carousel.Caption>
      <h3 className='key ttu f1'>we own it</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={739} height={497} alt="900x500" src={location}   />
    <Carousel.Caption>
      <h3 className='location ttu f1'>our branch location</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={739} height={497} alt="900x500" src={meeting}  />
    <Carousel.Caption>
      <h3 className='meeting ttu f1'>we help our client make better business</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={739} height={497} alt="900x500" src={relax} />
    <Carousel.Caption>
      <h3 className='relax ttu f1'>peace of mind</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={739} height={5497} alt="900x500" src={sold}  />
    <Carousel.Caption>
      <h3 className='sold ttu f1'>bank on a name you can trust</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
      
    )
}
export default carousel;