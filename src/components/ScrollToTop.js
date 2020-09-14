import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            toggleVisibility();
        });
    }, [])

    const toggleVisibility = () => {
        window.pageYOffset > 500 ? setIsVisible(true) :  setIsVisible(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div id="return-to-top" onClick={scrollToTop} style={isVisible ? {opacity: '1'} : {opacity: '0'}}>
            <div>
                <i className="icon-up-open-1"></i>
            </div>
        </div>
    );
    
}

export default ScrollToTop;