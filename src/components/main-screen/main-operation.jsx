import React from 'react';

const Operation = (props) => {
    const {data} = props;
    console.log(data)
    return (
        <div className="section-operation__conteiner">
            <span className="section-operation__text">{data.date}</span>
            <span className="section-operation__text">{data.acceptedCurrency}</span>
            <span className="section-operation__text section-operation__text-arrow">{data.issuedCurrency}</span>
        </div>
    )
}

export default Operation;
