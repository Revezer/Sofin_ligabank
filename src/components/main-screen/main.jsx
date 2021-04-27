import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {fetchСourse} from '../../store/api-action';
import HeaderComponent from './header';
import FooterComponent from './footer';
import {clearingHistory, currencySelectionHave, currencySelectionWant, inputAvailableCurrency, inputDesiredCurrency, performedConversions} from '../../store/action'
import OperationComponent from './main-operation';
import whiteCard from '../../img/white-card.png';
import blackCard from '../../img/black-card.png';
import arrows from '../../img/arrows.svg';


const Main = (props) => {
    const {course, onLoadData, isDataLoaded, chooseTypeHave, chooseTypeWant, currencyHave, currencyWant, selectedHave, selectedWant, inputAvailable, inputDesired, conversionsPerformed, performed, clearingHistory} = props;

    const [newConversion, setNewConversion] = useState({
        date: `2021-04-28`,
        acceptedCurrency: ``,
        issuedCurrency: ``,
    });

    const acceptedCurrencyRef = useRef(null);
    const issuedCurrencyRef = useRef(null);


    useEffect(() => {
        if (!isDataLoaded) {
          onLoadData();
        }
    }, [isDataLoaded]);

    const handleHave = (evt) => {
        const issuedCurrency = Math.round(parseFloat(evt.target.value / course.rates[selectedHave] * course.rates[selectedWant]) * 100) / 100;
        inputDesired(issuedCurrency);
        inputAvailable(evt.target.value);
        if (acceptedCurrencyRef?.current) {
            acceptedCurrencyRef.current.value = issuedCurrency;
        }
        setNewConversion({
            ...newConversion,
            acceptedCurrency: evt.target.value + ` ` + selectedHave,
            issuedCurrency: issuedCurrency + ` ` + selectedWant,
        })
    };

    const handleWant = (evt) => {
        const acceptedCurrency = Math.round(parseFloat(evt.target.value / course.rates[selectedWant] * course.rates[selectedHave]) * 100) / 100;
        inputAvailable(acceptedCurrency);
        inputDesired(evt.target.value);
        if (issuedCurrencyRef?.current) {
            issuedCurrencyRef.current.value = acceptedCurrency;
        }
        setNewConversion({
            ...newConversion,
            issuedCurrency: evt.target.value + ` ` + selectedWant,
            acceptedCurrency: acceptedCurrency + ` ` + selectedWant,
        })
    };

    const typeWant = (evt) => {
        chooseTypeWant(evt.target.value);
    }

    const typeHave = (evt) => {
        chooseTypeHave(evt.target.value);
    }

    const handleDate = (evt) => {
        setNewConversion({
            ...newConversion,
            date: evt.target.value
        })
    }
    const copyPerformed = performed.slice();

    const savingСonversion = () => {
        if (copyPerformed.length >= 10) {
            copyPerformed.pop();
            copyPerformed.unshift(newConversion);
            conversionsPerformed(copyPerformed)
        } else {
            copyPerformed.unshift(newConversion);
            conversionsPerformed(copyPerformed)
        }
    }

    return (
        <div>
            <HeaderComponent />
            <main className='main'>
                <div className="sentence">
                    <div className="sentence-background"></div>
                    <div className="sentence__conteiner">
                        <h2 className="sentence__title">Лига Банк</h2>
                        <h3 className="sentence__text">Кредиты на любой случай</h3>
                        <a className="sentence__link" href="">Рассчитать кредит</a>
                        <img className="sentence__img" src={whiteCard} alt="изображение карты банка"></img>
                        <img className="sentence__pic" src={blackCard} alt="изображение карты банка"></img>
                    </div>
                    <div className="sentence-background"></div>
                </div>
                <section className="section">
                    <h2 className="section__title">Конвертер валют</h2>
                    <div className="section__conteiner">
                        <div className="section-conteiner">
                            <span className="section__text">У меня есть</span>
                            <div className="conteiner__input">
                                <input className="section__input" ref={issuedCurrencyRef} id="have" type="number" defaultValue={currencyHave} onChange={handleHave} />
                                <select className="section__choice" value={selectedHave} onChange={typeHave}>
                                    <option className="section-choice__text" value="RUB">RUB</option>
                                    <option className="section-choice__text" value="USD">USD</option>
                                    <option className="section-choice__text" value="EUR">EUR</option>
                                    <option className="section-choice__text" value="GBP">GBP</option>
                                    <option className="section-choice__text" value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <img className="section__img" src={arrows}></img>
                        </div>
                        <div className="section-conteiner">
                            <span className="section__text">Хочу приобрести</span>
                            <div className="conteiner__input">
                                <input className="section__input" ref={acceptedCurrencyRef} id="want" type="number" defaultValue={currencyWant} onChange={handleWant} />
                                <select className="section__choice" value={selectedWant} onChange={typeWant}>
                                    <option className="section-choice__text" value="RUB">RUB</option>
                                    <option className="section-choice__text" value="USD">USD</option>
                                    <option className="section-choice__text" value="EUR">EUR</option>
                                    <option className="section-choice__text" value="GBP">GBP</option>
                                    <option className="section-choice__text" value="CNY">CNY</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="section__datepicker">
                        <input className="section__date" type="date" defaultValue="2021-04-28" min="2021-04-21" max="2021-04-28" onChange={handleDate}></input>
                        <button className="section__button" onClick={() => savingСonversion()}>Сохранить результат</button>
                    </div>
                    <div className="section__history">
                        <span className="section-history__text">История конвертация</span>
                        <div className="section__operations">
                            {
                                performed.map((data, index) => <OperationComponent key={data + index} data={performed[index]} />)
                            }
                        </div>
                        <button className="section-history__button" onClick={() => clearingHistory([])}>Очистить историю</button>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isDataLoaded: state.isDataLoaded,
    course: state.course,
    selectedWant: state.selectedWant,
    selectedHave: state.selectedHave,
    currencyHave: state.thereCurrencies,
    currencyWant: state.wantCurrency,
    performed: state.performedConversions,
})

const mapDispatchToProps = (dispatch) => ({
    onLoadData() {
        dispatch(fetchСourse());
    },
    chooseTypeHave(currency) {
        dispatch(currencySelectionHave(currency))
    },
    chooseTypeWant(currency) {
        dispatch(currencySelectionWant(currency))
    },
    inputAvailable(quality) {
        dispatch(inputAvailableCurrency(quality))
    },
    inputDesired(quality) {
        dispatch(inputDesiredCurrency(quality))
    },
    conversionsPerformed(performed) {
        dispatch(performedConversions(performed))
    },
    clearingHistory(clear) {
        dispatch(clearingHistory(clear))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
