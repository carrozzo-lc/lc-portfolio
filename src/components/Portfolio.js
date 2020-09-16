import React, { useState } from 'react';

import parse from 'html-react-parser';

const Portfolio = props => {
    const [portfolioList] = useState(props.contentData.portfolio.list);
    const propsData = props.contentData;

    let portfolioListEl = portfolioList.map((prtItem, index) => {
        let prtContentClasses = ['portfolio__content'];
        let prtimgboxClasses = ['portfolio__imgbox'];
        if (Math.abs(index % 2) === 1) {
            prtContentClasses = ['portfolio__content' ,'portfolio__content--left'];
            prtimgboxClasses = ['portfolio__imgbox', 'portfolio__imgbox--right'];
        }

        return (
            <div className="portfolio__panel" key={index}>
                <div className="container">
                    <div className="portfolio__block clearfix">

                        <div className={prtContentClasses.join(' ')} style={{backgroundColor: prtItem.portfolio_color}}>
                            <h3 className="portfolio__title">{prtItem.portfolio_title}</h3>
                            <div className="portfolio__desc">
                                <div className="clampjs">
                                    {parse(prtItem.portfolio_desc)}
                                </div>
                            </div>
                            <a href={prtItem.portfolio_link} className="btn-sitelink portfolio__btn d-lg-none" target="_blank" rel="noopener noreferrer">
                                <i className="icon icon-link"></i><span>Website</span>
                            </a>
                        </div>

                        <div className={prtimgboxClasses.join(' ')}>
                            <img src={prtItem.portfolio_img} className="portfolio__img" alt="" />
                            <a href={prtItem.portfolio_link} className="btn-sitelink portfolio__btn d-none d-lg-block" target="_blank" rel="noopener noreferrer">
                                <i className="icon icon-link"></i><span>Website</span>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="portfolio__backside"></div>
            </div>
        );
    });

    return (
        <section className="portfolio">

            <div className="section-title">
                <h2>{propsData.portfolio.title}</h2>
            </div>

            {portfolioListEl}
            
        </section>
    );
};

export default Portfolio;