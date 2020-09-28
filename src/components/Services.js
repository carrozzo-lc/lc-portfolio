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

const Services = props => {
    const [servicesList] = useState(props.contentData.services.list);
    const propsData = props.contentData;

    return (
        <section className="services">
            <div className="container">
                <div className="section-title">
                    <h2>{propsData.services.title}</h2>
                </div>             

                <div className="row">
                    {servicesList.map((service, index) => (
                        <div className="column col-sm-12 col-md-4" key={index}>
                            <div className="service">
                                <div className={"service__icon " + service.icon}></div>                    
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
                                <div className={"service__icon " + service.icon}></div>
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