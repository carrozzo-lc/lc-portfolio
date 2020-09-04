import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">

            <div className="footer-block">
                <p className="footer-block__intro">Did you like my work?<br />I can do something similar for you.</p>

                <div className="footer-block__contact">
                    <a href="tel:+393207455658" className="btn-fancy btn-fancy--footer" title="telephon">
                        <i className="icon icon-phone"></i><span>+39 320 74 55 658</span>
                    </a>
                    <a href="mailto:me@lucacarrozzo.com" className="btn-fancy btn-fancy--footer" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-mail-alt"></i>me@lucacarrozzo.com            </a>
                </div>

                <div className="footer-block__social">
                    <a href="https://twitter.com/carrozzo_lc" className="btn-social" title="twitter" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/lucacarrozzowebdesigner/?locale=en_US" className="btn-social" title="linkedin" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="sub-footer">
                Copyright &copy; 2019 | Luca Carrozzo
            </div>

        </footer>     
    );
};

export default Footer;