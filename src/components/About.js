import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about__desc">   
                    <p>I am Luca Carrozzo, a Front-End Developer based in Italy. I am primarily focused on website and interface development for web applications but I love taking on any good front end dev challenge.</p>
                    <p className="about__rev-txt">I have 6 years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
                    <p className="about__rev-txt">Continued education allows me to stay ahead of the curve and deliver exceptional work to each employer I’ve worked for - both full-time and contract.</p>
                    <div className="btn-read">Read more</div>
                </div>

                <div className="skills">
                    <div className="skill">
                        <div className="skill__box skill01"></div>
                        <div className="skill__text">
                            Html5               
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill__box skill02"></div>
                        <div className="skill__text">
                            Css3, Sass/Less          
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill__box skill03"></div>
                        <div className="skill__text">
                            Javascript
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill__box skill04"></div>
                        <div className="skill__text">
                            Responsive Design
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill__box skill05"></div>
                        <div className="skill__text">
                            Web Design
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;