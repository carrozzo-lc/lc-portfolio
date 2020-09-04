import React from 'react';

const Header = (props) => {

    return (
        <header className="site-header fixed-top">
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
                                <div className="btn btn--share">
                                    <i className="icon icon-share"></i>
                                </div>
                                <div id="socialGallery">
                                    <div className="socialToolBox">
                                        <a href="https://twitter.com/carrozzo_lc" className="btn btn--twitter" title="twitter Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                            <i className="icon icon-twitter"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/lucacarrozzowebdesigner/?locale=en_US" className="btn btn--linkedin " title="linkedin Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                            <i className="icon icon-linkedin"></i>
                                        </a>
                                        <a href="me@lucacarrozzo.com" className="btn btn--mail" title="Email Luca Carrozzo" target="_blank" rel="noopener noreferrer">
                                            <i className="icon icon-mail-alt"></i>
                                        </a>
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
