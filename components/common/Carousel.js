import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const ImageSlider = ({ images }) => { 
  return (
  <Carousel autoPlay={true} infiniteLoop={true} interval={2000} stopOnHover={false} showThumbs={false} >
      {images.map((image)=>{
        return( 
        <div onClick={()=>{window.open(image.href)}}>
        <img src={image.src}/>
    </div>)
      })}
    </Carousel>
  );
}
export default ImageSlider;