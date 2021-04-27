import React from 'react';
import logo from '../../img/bank-logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__conteiner">
                <img className='header__logo' src={logo} alt='логотип банка'/>
                <ul className='header__list'>
                    <li className='list__element'><a href="" className="list__link">Услуги</a></li>
                    <li className='list__element'><a href="" className="list__link">Расcчитать кредит</a></li>
                    <li className='list__element'><a href="" className="list__link list__link-active">Конвертер валют</a></li>
                    <li className='list__element'><a href="" className="list__link">Контакты</a></li>
                    <li className='list__element'><a href="" className="list__link">Задать вопрос</a></li>
                </ul>
                <a className='header__login'>Войти в Интернет банк</a>
            </div>
        </header>
    )
};

export default Header;
