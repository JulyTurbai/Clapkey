import React from 'react';
import './Private.css';

const Private = () => {
    return (
        <div className='private'>
            <div className="container">
                <div className="private-block">
                    <div className="private head">
                        <img className='head__img' src="img/private/padlock.png" alt="" />
                        <p className='head__text'>ДБАЄМО ПРО АНОНІМНІСТЬ</p>
                    </div>
                    <div className="private descr">
                        <p>Комплексно підходимо до аудиту бізнес-процесів, 
                            IT інфраструктури та кібер безпеки компанії
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Private;