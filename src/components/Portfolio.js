import React, { useState } from 'react';

import parse from 'html-react-parser';

const Portfolio = () => {
    const [portfolioList] = useState([
        {
            portfolio_color: "#1785B3",
            portfolio_title: "True Protein",
            portfolio_desc: "I collaborated with the dev team to build a design system for the refactoring of the company e-commerce site, separating the main elements of the site in reusable and maintainable patterns and I improved the development workflow with a new solid and clean code structure, connecting all processes through a repository.",
            portfolio_link: "https://www.trueprotein.com.au/",
            portfolio_img: "/assets/images/portfolio-trueprotein.jpg"
        },    
        {
            portfolio_color: "#1A9958",
            portfolio_title: "Hoselink",
            portfolio_desc: "I collaborated with the dev team to build a design system for the refactoring of the company e-commerce site, separating the main elements of the site in reusable and maintainable patterns and I improved the development workflow with a new solid and clean code structure, connecting all processes through a repository.",
            portfolio_link: "https://www.hoselink.com.au/",
            portfolio_img: "/assets/images/portfolio-hoselink.jpg"
        }, 
        // {
        //     portfolio_color: "#31B9BD",
        //     portfolio_title: "Limitless Kite Tours",
        //     portfolio_desc: "I designed the layout choosing colors, typography and site structure. Then I built a Wordpress site developing a custom theme from scratch following the specifics request of my client.",
        //     portfolio_link: "http://www.limitlesskitetours.com/",
        //     portfolio_img: "/assets/images/portfolio-lkt.jpg"
        // },
        {
            portfolio_color: "#E75200",
            portfolio_title: "Iaki",
            portfolio_desc: "I collaborated in the development team on various projects, including:<br>- Website development <a style=\"color:black;\" href=\"https://www.tupassi.it\" target=\"_blank\">Tupassi</a>;<br>- Bug-fixing front-end <a style=\"color:black;\" href=\"https://www.bormiolirocco.com/it/tableware/\" target=\"_blank\">Bormiolirocco</a>;<br>- Development team on front-end mobile app <a style=\"color:black;\" href=\"https://play.google.com/store/apps/details?id=it.illibraio.illibraioipad\" target=\"_blank\">Il Libraio</a>;<br>- Front-end development restyling <a style=\"color:black;\" href=\"http://www.iaki.it\" target=\"_blank\">agency site</a>.",
            portfolio_link: "https://www.iaki.it/",
            portfolio_img: "/assets/images/portfolio-iaki.jpg"        
        },
        {
            portfolio_color: "#305E95",
            portfolio_title: "Wpfriendly",
            portfolio_desc: "It's my blog :-) It's all about new tricks, plugins and features of WordPress. I designed all graphic elements and developed a design system to organise all components of the site. Then I built the blog using WordPress developing a custom theme from scratch.",
            portfolio_link: "http://www.wpfriendly.it/",
            portfolio_img: "/assets/images/portfolio-blog.jpg"         
        },
        // {
        //     portfolio_color: "#4EB8DB",
        //     portfolio_title: "TouranGo",
        //     portfolio_desc: "I created this landing page designing each graphic element and then write all codes from scratch.",
        //     portfolio_link: "http://www.tourango.it/",
        //     portfolio_img: "/assets/images/portfolio-tourango.jpg"         
        // },
        {
            portfolio_color: "#D45819",
            portfolio_title: "Antonio Amato Ensemble",
            portfolio_desc: "I designed the layout choosing colors, typography and site structure. Then I built a Wordpress site developing from scratch following the specifics request of my client.",
            portfolio_link: "http://www.antonioamatoensemble.it/",
            portfolio_img: "/assets/images/portfolio-antonio-amato-ensemble.jpg"
        }               
    ]);

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
                <h2>Portfolio</h2>
            </div>

            {portfolioListEl}
            
        </section>
    );
};

export default Portfolio;