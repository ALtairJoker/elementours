import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/carrucel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='contenedorCarrusel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/17413647/pexels-photo-17413647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel'/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/17413652/pexels-photo-17413652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel '/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/14867010/pexels-photo-14867010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel'/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/15607011/pexels-photo-15607011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel'/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/14937750/pexels-photo-14937750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel'/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <img src="img/element-tour-2.png" alt="" style={{width: '6em'}}/>
        </Carousel.Caption>
        <img src="https://images.pexels.com/photos/14867015/pexels-photo-14867015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='d-block w-100 imagenCarrusel'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;


