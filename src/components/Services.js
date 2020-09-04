import React from 'react';

const Services = () => {

    return (

        <section className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                </div>

                <div className="row">
                    <div className="column col-sm-12 col-md-4">
                        <div className="service">
                            <div className="service__icon icon-code"></div>                    
                            <h3 className="service__title">
                                Development
                            </h3>
                            <div className="service__desc">
                                I build any web applications following up-to-date coding practice. I can work for small and specific projects and also manage and structure large projects.
                            </div>
                        </div>
                    </div>
                    <div className="column col-sm-12 col-md-4">
                        <div className="service">
                            <div className="service__icon icon-desktop"></div>
                            <h3 className="service__title">
                                Web Design
                            </h3>
                            <div className="service__desc">
                                Every projects that I worked on are developed with passion to look and perform beautifully on every device. I can design web elements and layouts following the latest techniques and trends.
                            </div>
                        </div>
                    </div>
                    <div className="column col-sm-12 col-md-4">
                        <div className="service">
                            <div className="service__icon icon-wordpress"></div>
                            <h3 className="service__title">
                                WordPress Development
                            </h3>
                            <div className="service__desc">
                                I develop WordPress sites from scratch with best practices and clean code, assuring that your website is fast, safe and secure.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-slider swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="service">
                                <div className="service__icon icon-code"></div>
                                <h3 className="service__title">
                                    Development
                                </h3>
                                <div className="service__desc">
                                    I build any web applications following up-to-date coding practice. I can work for small and specific projects and also manage and structure large projects.
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service">
                                <div className="service__icon icon-desktop"></div>
                                <h3 className="service__title">
                                    Web Design
                                </h3>
                                <div className="service__desc">
                                    Every projects that I worked on are developed with passion to look and perform beautifully on every device. I can design web elements and layouts following the latest techniques and trends.
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service">
                                <div className="service__icon icon-wordpress"></div>
                                <h3 className="service__title">
                                    WordPress Development
                                </h3>
                                <div className="service__desc">
                                    I develop WordPress sites from scratch with best practices and clean code, assuring that your website is fast, safe and secure.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>

            </div>
        </section>

    );
};

export default Services;