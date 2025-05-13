import React, { useState } from 'react';
import './Tarifes.css';

const plans = [
    {
      title: 'ЛАЙТ ПЛАН',
      price: '$ 152',
      details: ['Замовлення', 'Складський облік', 'Закупівлі та постачальники'],
      hasPrice: true,
    },
    {
      title: 'СУПЕР ПЛАН',
      price: 'ДІЗНАТИСЬ ЦІНУ',
      details: ['Замовлення', 'Складський облік', 'Закупівлі та постачальники'],
      hasPrice: false,
    },
    {
      title: 'БІЗНЕС ПЛАН',
      price: '$ 299',
      details: ['Замовлення', 'CRM', 'Звітність'],
      hasPrice: true,
    },
    {
      title: 'ІНДИВІДУАЛЬНИЙ',
      price: 'ДІЗНАТИСЬ ЦІНУ',
      details: ['Кастомізація', 'API', 'Супровід'],
      hasPrice: false,
    },
  ];

const Tarifes = () => {
    const [startIndex, setStartIndex] = useState(0);

    const prev = () => {
        setStartIndex((prev) => (prev === 0 ? plans.length - 2 : prev - 1));
    };

    const next = () => {
        setStartIndex((prev) => (prev + 2 >= plans.length ? 0 : prev + 1));
    };

    const visiblePlans = plans.slice(startIndex, startIndex + 2);
  
    return (
        <div className="tarifes">
            <div className="container">
                <div className="tarifes-block">
                    <h2>ТАРИФИ</h2>
                    <div className="slider">
                        <button className="arrow" onClick={prev}>←</button>
                
                        {visiblePlans.map((plan, idx) => (
                            <div className="card" key={idx}>
                                <div className="card-header">
                                    <p>{plan.title}</p>
                                    <a className="details" href="#">ДЕТАЛЬНІШЕ</a>
                                </div>
                                <p className="subtitle">ІДЕАЛЬНО ПІДХОДЕ ДЛЯ ВЕДЕННЯ ПРОДАЖІВ ТА АНАЛІТИКИ ТОВАРІВ</p>
                                <ul>
                                    {plan.details.map((item, i) => (
                                    <li key={i}>— {item}</li>
                                    ))}
                                </ul>
                                <div className="buttons">
                                    <div className="price-badge">
                                        {plan.hasPrice ? <span>$</span> : <span>?</span>}
                                        <strong>{plan.price.replace('$', '')}</strong>
                                    </div>
                                    {!plan.hasPrice && <button className="green">ДІЗНАТИСЬ ЦІНУ</button>}
                                    <button className="black">МЕНІ ЦЕ ТРЕБА</button>
                                </div>
                            </div>
                        ))}
                        <button className="arrow" onClick={next}>→</button>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Tarifes