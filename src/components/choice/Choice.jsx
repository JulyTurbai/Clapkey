import React from 'react';
import './Choice.css';

const Chouce = () => {
    return (
        <div className='choice'>
            <div className="container">
                <div className="choice-block">
                    <div className="choice-text">
                        <p className='choice-text--olive'>ЧОМУ</p>
                        <p>ОБИРАЮТЬ<br/>НАС?</p>
                    </div>
                    <div className="main-img">
                        <img src="img/choice/choice.png" alt="" />
                    </div>
                    <div className="choice-descr">
                        <img className='descr__img' src="img/choice/analysis.png" alt="" />
                        <p className="descr__text">Зустріч та збір першочергового опису завдання від клієнта</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chouce;