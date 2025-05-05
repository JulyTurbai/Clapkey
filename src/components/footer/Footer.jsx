import React from 'react';
import './Footer.css';
import SendForm from '../sendForm/SendForm';
import { NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-block">
                    <ul className="footer__items--1">
                        <li className='footer__item--logo'><img src="img/logo.png" alt="" /></li>
                        <li className='footer__item'>+38 067 569 61 50</li>
                        <li className='footer__item--email'>info@clapkey.com</li>
                        <div className="footer__icons">
                            <img src="img/icons/facebook.png" alt="facebook" />
                            <img src="img/icons/insta.png" alt="instagram" />
                            <img src="img/icons/telegram.png" alt="telegram" />
                        </div>
                    </ul>
                    <ul className='footer__items--2'>
                        <li className='footer__item'>CRM ТА ERP</li>
                        <li className='footer__item'>КІБЕР БЕЗПЕКА</li>
                        <li className='footer__item'>IT АУТСОРСИНГ</li>
                        <li className='footer__item'><NavLink to="/about">ПРО НАС</NavLink></li>
                        <li className='footer__item'><NavLink to="/contacts">КОНТАКТИ</NavLink></li>
                    </ul>
                    <ul className='footer__items--3'>
                        <li className='footer__item'>ОФЕРТА</li>
                        <li className='footer__item'>КЛІЄНТИ</li>
                        <li className='footer__item'>ПРОЕКТИ</li>
                        <li className='footer__item'>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</li>
                        <li className='footer__item'>НОВИНИ</li>
                    </ul>
                    <div className='form'>
                        <SendForm/>
                    </div>
                </div>
                <hr className='footer-line' />
                <div className="dop">
                    <div className="dop__block">
                        <p>© Clapkey LLC 2016-2025 All rights Reserved</p>
                        <ul className="dop__icons">
                            <li className='dop__icon--pci'><img src="img/icons/pci.png" alt="" /></li>
                            <li className='dop__icon--visa'><img src="img/icons/visa.png" alt="" /></li>
                            <li className='dop__icon--master'><img src="img/icons/mastercard.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;