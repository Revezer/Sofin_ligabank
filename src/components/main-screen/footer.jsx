import React from 'react';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import youtube from '../../img/youtube.svg';
import logo from '../../img/bank-logo.svg';
import phone from '../../img/phone.svg';

const Footer = () => {
    return (
    <footer className="footer">
            <div className="footer__conteiner">
                    <div className="conteiner">
                        <img className='footer__logo' src={logo} alt='логотип банка'/>
                        <span className="footer__text footer__text-address">
                        150015, г. Москва, ул. Московская, д. 32
                        Генеральная лицензия Банка России №1050
                        Ⓒ Лига Банк, 2019
                        </span>
                    </div>
                    <ul className="footer__list footer__list-services">
                        <li className="footer-list__element"><a href="" className="footer-list__link">Услуги</a></li>
                        <li className="footer-list__element"><a href="" className="footer-list__link">Рассчитать кредит</a></li>
                        <li className="footer-list__element"><a href="" className="footer-list__link">Контакты</a></li>
                        <li className="footer-list__element"><a href="" className="footer-list__link">Задать вопрос</a></li>
                    </ul>
                    <div className="footer__aside">
                        <img src={phone} className="footer__number-icon"></img>
                        <a className="footer__number" href="tel:*0904">*0904</a>
                        <span className="footer__text footer__text-number">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</span>
                    </div>
                    <div className="footer__aside footer__aside-urban">
                        <a className="footer__number" href="tel:8 800 111 22 33">8 800 111 22 33</a>
                        <span className="footer__text footer__text-urban">Бесплатный для всех городов России</span>
                    </div>
                    <ul className="footer__list footer__list-social">
                        <li>
                            <a href="">
                                <img src={facebook} alt="иконка социальной сети facebook"></img>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={instagram} alt="иконка социальной сети instagram"></img>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={twitter} alt="иконка социальной сети twitter"></img>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={youtube} alt="видеохостинг youtube"></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer;