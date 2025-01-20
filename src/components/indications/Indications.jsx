import React from 'react';
import './Indications.css';

const Indications = () => {
    return (
        <div className='indications'>
            <div className="container">
                <div className="indications-block">
                    <div className="indications__items">
                        <div className="indications__item">
                            <p className="indication__item num">98%</p>
                            <p className="indication__item name">ПОЗИТИВНИХ<br/> ВІДГУКІВ</p>
                        </div>
                        <div className="indications__item">
                            <p className="indication__item num">152</p>
                            <p className="indication__item name">ВИКОННИХ<br/> ПРОЕКТІВ</p>
                        </div>
                        <div className="indications__item">
                            <p className="indication__item num">60</p>
                            <p className="indication__item name">ПОЗИТИВНИХ<br/> ВІДГУКІВ</p>
                        </div>
                        <div className="indications__item">
                            <p className="indication__item num">8</p>
                            <p className="indication__item name">ПОЗИТИВНИХ<br/> ВІДГУКІВ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Indications;