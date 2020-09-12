import React, { useState } from 'react';

import VisibilitySensor from "react-visibility-sensor";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
    const [readMore, setReadMore] = useState(false);
    const [skillActive, setSkillActive] = useState(true);
    const [skillsClasses, setSkillsClasses] = useState('skills');
    const [skills, setSkills] = useState({
        skill01: {
            id: 10,
            percentage: 0, 
            skillTitle: 'Html5'
        }, 
        skill02: {
            id: 11,
            percentage: 0, 
            skillTitle: 'Css3, Sass/Less'
        }, 
        skill03: {
            id: 12,
            percentage: 0,
            skillTitle: 'Javascript'
        }, 
        skill04: {
            id: 13,
            percentage: 0,
            skillTitle:'Responsive Design'
        }, 
        skill05: {
            id: 14,
            percentage: 0,  
            skillTitle:'Web Design'
        }
    })

    const readMoreToggleHandler = () => {
        setReadMore(!readMore);
    };

    let attachedClasses = readMore ? ['about__rev-txt', 'open'] : ['about__rev-txt'];

    const skillHandler = isVisible => {
        if (isVisible) {
            setSkillActive(false);
            setSkillsClasses('skills show-el')
            setSkills({
                ...skills,
                skill01: {
                    ...skills.skill01,
                    percentage: 99
                },
                skill02: {
                    ...skills.skill02,
                    percentage: 99
                },
                skill03: {
                    ...skills.skill03,
                    percentage: 88
                },
                skill04: {
                    ...skills.skill04,
                    percentage: 90
                },
                skill05: {
                    ...skills.skill05,
                    percentage: 90
                }                 
            });
        }
    }

    let skillCircles = Object.keys(skills).map((item, index) => {
        return (
            <div className="skill" key={index}>
                <div className="skill__box"> 
                    <CircularProgressbar
                        value={skills[item].percentage}
                        text={`${skills[item].percentage}%`}
                        strokeWidth={2}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '24px',
                            pathTransitionDuration: 0.9,
                            pathColor: `rgba(25, 239, 204, ${skills[item].percentage / 100})`,
                            textColor: skills[item].percentage === 0 ? '#ffffff' : 'rgb(85, 85, 85)',
                            trailColor: '#ffffff'
                        })}                                                        
                    />              
                </div>
                <div className="skill__text">
                    {skills[item].skillTitle}          
                </div>
            </div>
        );
    });    
    
    return (
        <section className="about" id="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about__desc">   
                    <p>
                        I am Luca Carrozzo, a Front-End Developer based in Italy. I am primarily focused on website and interface development for web applications but I love taking on any good front end dev challenge.
                    </p>
                    <p className={attachedClasses.join(' ')}>
                        I have 6 years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. I actively seek out new technologies and stay up-to-date on industry trends and advancements.
                        <span style={{ display: 'block', marginBottom: '20px' }}></span>
                        Continued education allows me to stay ahead of the curve and deliver exceptional work to each employer I’ve worked for - both full-time and contract.
                    </p>
                    <div className="btn-read" onClick={readMoreToggleHandler}>Read more</div>
                </div>

                <VisibilitySensor 
                    onChange={skillHandler} 
                    active={skillActive}>
                    <div className={skillsClasses}>
                        {skillCircles}
                    </div>
                </VisibilitySensor> 

            </div>
        </section>
    );
}

export default About;