import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselItem.css'
import { Carousel } from 'react-responsive-carousel';
import bg from '../../../images/header-bg.png'
const CarouselItems = () => {
    return (
        <Carousel>
                <div className="banner-content">
                    <div className="header-text">
                        <h1>SALOON <br/> & SPA</h1>
                        <h2>Welcome</h2>
                    </div>
                    <h3 className="text-center text-white">Lorem ipsum dolor sit amet</h3>
                    <button type="submit" className="banner-btn">Book Now</button>
                </div>
                <div className="banner-content">
                    <div className="header-text">
                        <h1>SALOON <br/> & SPA</h1>
                        <h2>Welcome</h2>
                    </div>
                    <h3 className="text-center text-white">Lorem ipsum dolor sit amet</h3>
                    <button type="submit" className="banner-btn">Book Now</button>
                </div>
                <div className="banner-content">
                    <div className="header-text">
                        <h1>SALOON <br/> & SPA</h1>
                        <h2>Welcome</h2>
                    </div>
                    <h3 className="text-center text-white">Lorem ipsum dolor sit amet</h3>
                    <button type="submit" className="banner-btn">Book Now</button>
                </div>
        </Carousel>
    );
};

export default CarouselItems;