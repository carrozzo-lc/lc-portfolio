import React, { useState, useEffect } from 'react';
import { useBreakpoint } from '../shared/breakpoint';
import { scroller } from "react-scroll";

const Masthead = props => {
    const [mastheadHeight, setMastheadHeight] = useState(window.innerHeight - 50);
    const propsData = props.contentData;

    const breakpoints = useBreakpoint();

    useEffect(() => {
        function handleResize() {
            if (breakpoints.minWth1400 ) {
                //console.log('(min-width: 1400px)')  
                setMastheadHeight(window.innerHeight - 90)      
            } else if (breakpoints.minWth768 && breakpoints.maxWth1399) {
                //console.log('(min-width: 768px and max-width: 1399.98px)')
                setMastheadHeight(window.innerHeight - 50)
            } else if (breakpoints.minWth576 && breakpoints.maxWth767) {
                //console.log('(min-width: 576px and max-width: 767.98px)')
                setMastheadHeight(window.innerHeight - 20)
            } else if (breakpoints.maxWth575) {
                //console.log('(max-width: 575.98px)')
            }      
            return _ => {
                window.removeEventListener('resize', handleResize)
            }
        }
        window.addEventListener('resize', handleResize)
    }, [breakpoints.minWth1400, 
        breakpoints.minWth768, 
        breakpoints.maxWth1399, 
        breakpoints.minWth576, 
        breakpoints.maxWth767, 
        breakpoints.maxWth575
    ]);

    const scrollTo = () => {
        scroller.scrollTo('about', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -90
        })
    }

    return (
        <section className="masthead" style={{ height: mastheadHeight + 'px' }}>
            
            <div className="container">
                <div className="grid">
                    <div className="column masthead__image">
                        <img src="/assets/images/masthead-img.svg" alt=""/>
                    </div>
                    <div className="column masthead__intro">
                        <div className="intro">
                            <h1 className="intro__title">
                                {propsData.name}
                            </h1>
                            <h2 className="intro__subtitle">
                                {propsData.role}
                            </h2>
                            <p className="intro__desc">
                                {propsData.roleDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-down" onClick={scrollTo}>
                <div>
                    <span className="icon icon-down-open"></span>
                </div>
            </div>

        </section>  
    );
}

export default Masthead;