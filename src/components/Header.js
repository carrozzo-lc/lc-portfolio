import React, { useState, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const animationTiming1 = {
    enter: 0,
    exit: 300
};
const animationTiming2 = {
    enter: 80,
    exit: 300
};
const animationTiming3 = {
    enter: 160,
    exit: 300
};

const Header = (props) => {
    const [socialBlock, setSocialBlock] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
        });
    }, [])    

    const socialToggleHandler = () => {
        setSocialBlock(!socialBlock);
    };

    let headerClasses = isVisible ? ['site-header', 'fixed-top', 'header-down'] : ['site-header', 'fixed-top', 'header-up'];

    return (
        <header className={headerClasses.join(' ')}>
            <nav className="navigation">

                <div className="button-left">
                    <a className="btn btn--tel" href="tel:+393207455658" title="Phone Luca Carrozzo">
                        <i className="icon icon-phone"></i> <span>+39 320 74 55 658</span>
                    </a>
                </div>

                <div className="brand">
                    <a href="http://www.lucacarrozzo.com" title="Luca Carrozzo - Front End Developer | Portfolio website">
                        <img className="logo" src="/assets/images/lucacarrozzo-logo.svg" alt="" />
                    </a>
                </div>

                <div className="button-right">
                    <a href="https://twitter.com/carrozzo_lc" className="btn btn--twitter d-none d-sm-block" title="twitter Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/lucacarrozzowebdesigner/?locale=en_US" className="btn btn--linkedin d-none d-sm-block" title="linkedin Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-linkedin"></i>
                    </a>
                    <a href="mailto:me@lucacarrozzo.com" className="btn btn--mail d-none d-sm-block" title="Email Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-mail-alt"></i>
                    </a>

                    <div className="d-block d-sm-none">
                        <div id="socialShare">
                            <div className="socialBox pointer">
                                <div className="btn btn--share" onClick={socialToggleHandler}>
                                    <i className="icon icon-share"></i>
                                </div>
                                <div id="socialGallery">
                                    <div className="socialToolBox">
                                        <CSSTransition
                                            mountOnEnter
                                            unmountOnExit
                                            in={socialBlock} 
                                            timeout={animationTiming1}
                                            classNames={{
                                                enterDone: 'bounce-in-top',
                                                exit: 'fade-out-top'
                                            }} >
                                            <a href="https://twitter.com/carrozzo_lc" className="btn btn--twitter bounce-in-top" title="twitter Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                                <i className="icon icon-twitter"></i>
                                            </a>  
                                        </CSSTransition>
                                        <CSSTransition
                                            mountOnEnter
                                            unmountOnExit
                                            in={socialBlock} 
                                            timeout={animationTiming2}
                                            classNames={{
                                                enterDone: 'bounce-in-top',
                                                exit: 'fade-out-top'
                                            }} >
                                            <a href="https://www.linkedin.com/in/lucacarrozzowebdesigner/?locale=en_US" className="btn btn--linkedin" title="linkedin Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                                <i className="icon icon-linkedin"></i>
                                            </a>    
                                        </CSSTransition>
                                        <CSSTransition
                                            mountOnEnter
                                            unmountOnExit
                                            in={socialBlock} 
                                            timeout={animationTiming3}
                                            classNames={{
                                                enterDone: 'bounce-in-top',
                                                exit: 'fade-out-top'
                                            }} >
                                            <a href="me@lucacarrozzo.com" className="btn btn--mail" title="Email Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                                <i className="icon icon-mail-alt"></i>
                                            </a> 
                                        </CSSTransition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
        </header>     
    );
}

export default Header;
