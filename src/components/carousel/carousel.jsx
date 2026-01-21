import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// Import the array from your data.js file
import { img } from './img/data';

function MyCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                interval={3000}
            >
                {/* Loop through your images from data.js */}
                {img.map((imageSource, index) => (
                    <div key={index}>
                        <img src={imageSource} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default MyCarousel;