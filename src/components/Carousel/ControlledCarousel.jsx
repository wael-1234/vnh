import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./pictures/truck.jpg";
import img2 from "./pictures/plane.jpeg";
import img3 from "./pictures/House.jpg";
import img4 from "./pictures/clothes.jpg";



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ backgroundColor:'black'}}>
      <div className="container" style={{ width: "1000px", height: "600px",padding:'100px',ackgroundColor: 'rgba(var(--bs-dark-rgb)'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
              src={img1}
              style={{ height: "400px" , borderRadius:'10px'}}
              alt="First slide"
            />
            <Carousel.Caption style={{color:'lightblue'}}>
              <h2>First product</h2>
              <p>Representative Details for this product ... <NavLink>View more .. </NavLink></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
              src={img2}
              style={{ height: "400px" , borderRadius:'10px'}}
              alt="First slide"
            />
            <Carousel.Caption style={{color:'white'}}>
              <h2>Second product</h2>
              <p>Representative Details for this product ... <NavLink>View more .. </NavLink></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
              src={img3}
              style={{ height: "400px" , borderRadius:'10px'}}
              alt="First slide"
            />
            <Carousel.Caption style={{color:'orange'}}>
              <h2>Third product</h2>
              <p>Representative Details for this product ... <NavLink>View more .. </NavLink></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
              src={img4}
              style={{ height: "400px", borderRadius:'10px' }}
              alt="First slide"
            />
            <Carousel.Caption style={{color:'black'}}>
              <h2>First product</h2>
              <p>Representative Details for this product ... <NavLink>View more .. </NavLink></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ControlledCarousel;
