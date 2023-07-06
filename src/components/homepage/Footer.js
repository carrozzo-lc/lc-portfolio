import React, { useState } from 'react';

import parse from 'html-react-parser';

const Footer = props => {
    const [socialList] = useState(props.contentData.footer.socialList);
    const propsData = props.contentData;
    let copyright= new Date();
    const phoneNumber = propsData.phoneNumber.split(' ').join('');

    return (
        <footer className="site-footer">

            <div className="footer-block">
                <p className="footer-block__intro">{parse(propsData.footer.intro)}</p>

                <div className="footer-block__contact">
                    <a href={"tel:" + phoneNumber} className="btn-fancy btn-fancy--footer" rel="noopener noreferrer">
                        <i className="icon icon-phone"></i><span>{propsData.phoneNumber}</span>
                    </a>
                    <a href={"mailto:" + propsData.email} className="btn-fancy btn-fancy--footer" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-mail-alt"></i>{propsData.email}
                    </a>
                </div>

                <div className="footer-block__social">
                    {socialList.map((item, index) => (
                        <a
                            key={index}
                            href={item.url} 
                            className="btn-social" 
                            title={item.name}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className={item.iconClass}></i>
                        </a>  
                    ))}                
                </div>
            </div>

            <div className="sub-footer">
                Copyright &copy; {copyright.getFullYear()} | {propsData.name}
            </div>

        </footer>  
    );
};

export default Footer;