import React, { useState } from 'react';

import VisibilitySensor from "react-visibility-sensor";
import parse from 'html-react-parser';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = props => {
    const [readMore, setReadMore] = useState(false);
    const [skillActive, setSkillActive] = useState(true);
    const [skillsClasses, setSkillsClasses] = useState('skills');
    const [skills, setSkills] = useState(props.contentData.about.skills);
    const propsData = props.contentData;

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
                    percentage: 90
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
                    <h2>{propsData.about.title}</h2>
                </div>

                <div className="about__desc">   
                    <p>
                        {propsData.about.shortDesc}
                    </p>
                    <p className={attachedClasses.join(' ')}>
                        {parse(propsData.about.fullDesc)}
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