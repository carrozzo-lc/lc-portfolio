import React, { useState } from 'react';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Services = () => {
    const [servicesList] = useState([
        {
            title: 'Development',
            description: 'I build any web applications following up-to-date coding practice. I can work for small and specific projects and also manage and structure large projects.'
        }, 
        {
            title: 'Web Design',
            description: 'Every projects that I worked on are developed with passion to look and perform beautifully on every device. I can design web elements and layouts following the latest techniques and trends.'
        }, 
        {
            title: 'Shopify and WordPress Devs',
            description: 'I develop Shopify and WordPress sites from scratch with best practices and clean code, assuring that your website is fast, safe and secure.'        
        }
    ]);

    return (

        <section className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                </div>             

                <div className="row">
                    {servicesList.map((service, index) => (
                        <div className="column col-sm-12 col-md-4" key={index}>
                            <div className="service">
                                <div className="service__icon icon-code"></div>                    
                                <h3 className="service__title">
                                    {service.title}
                                </h3>
                                <div className="service__desc">
                                    {service.description}                            
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Swiper
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="service-slider"
                >
                    {servicesList.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service">
                                <div className="service__icon icon-code"></div>
                                <h3 className="service__title">
                                    {service.title}
                                </h3>
                                <div className="service__desc">
                                    {service.description} 
                                </div>
                            </div>      
                        </SwiperSlide>
                    ))}
                </Swiper>   

            </div>
        </section>

    );
};

export default Services;