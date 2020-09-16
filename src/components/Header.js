import React, { useState, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Header = props => {
    const [socialBlock, setSocialBlock] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const propsData = props.contentData;

    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
        });
    }, [])    

    const socialToggleHandler = () => {
        setSocialBlock(!socialBlock);
    };

    let btnClasses = socialBlock ? ["btn", "btn--share", "hover"] : ["btn", "btn--share"];
    let headerClasses = isVisible ? ['site-header', 'fixed-top', 'header-down'] : ['site-header', 'fixed-top', 'header-up'];   
    const phoneNumber = propsData.phoneNumber.split(' ').join('');

    return (
        <header className={headerClasses.join(' ')}>
            <nav className="navigation">

                <div className="button-left">
                    <a className="btn btn--tel" href={"tel:" + phoneNumber} title={propsData.phoneNumberTitle}>
                        <i className="icon icon-phone"></i> 
                        <span>{propsData.phoneNumber}</span>
                    </a>
                </div>

                <div className="brand">
                    <a href={propsData.siteUrl} title={propsData.brandTitle}>
                        <img className="logo" src={propsData.logo} alt="" />
                    </a>
                </div>

                <div className="button-right">
                    {propsData.socialLinks.map((item, index) => (
                        <a 
                            href={item.url} 
                            className={"btn btn--" + item.name + " d-none d-sm-block"} 
                            title={item.name + "Luca Carrozzo"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            key={index}>
                            <i className={"icon icon-" + item.name}></i>
                        </a>
                    ))}                
                    <div className="d-block d-sm-none">
                        <div id="socialShare">
                            <div className="socialBox pointer">
                                <div className={btnClasses.join(' ')} onClick={socialToggleHandler}>
                                    <i className="icon icon-share"></i>
                                </div>
                                <div id="socialGallery">
                                    <div className="socialToolBox">
                                        {propsData.socialLinks.map((item, index) => (
                                            <CSSTransition
                                                key={index}
                                                mountOnEnter
                                                unmountOnExit
                                                in={socialBlock} 
                                                timeout={item.animationTiming}
                                                classNames={{
                                                    enterDone: 'bounce-in-top',
                                                    exit: 'fade-out-top'
                                                }} >
                                                <a 
                                                    href={item.url} 
                                                    className={"btn btn--" + item.name} 
                                                    title={item.name + "Luca Carrozzo"} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    key={index}>
                                                    <i className={"icon icon-" + item.name}></i>
                                                </a>  
                                            </CSSTransition>                                            
                                        ))}                                    
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
