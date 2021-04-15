import React from 'react';
import CarouselItems from '../CarouselItems/CarouselItems';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="gender-card">
                <div className="gender">
                    <h2>Gender</h2>
                    <ul>
                        <li><a href="/male">Male</a></li>
                        <li><a href="/female">Female</a></li>
                    </ul>
                </div>
                <div className="appointment">
                    <h2>Book Appointment</h2>
                    <ul>
                        <li><a href="/service">Home Service</a></li>
                        <li><a href="/appointment">Appointment</a></li>
                    </ul>
                </div>
                <div className="empty">

                </div>
            </div>
            <CarouselItems/>
        </div>
    );
};

export default Banner;