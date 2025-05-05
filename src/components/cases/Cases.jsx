import React from 'react';
import './Cases.css';

const Cases = () => {
    return (
        <div className='cases'>
            <div className="container">
                <div className="cases main">
                    <div className="main-box">
                    <div className="text">
                        <p>ГОТОВІ КЕЙСИ</p>
                    </div>
                    <button className='cases__button'>БІЛЬШЕ КЕЙСІВ</button>
                </div>
                </div>
                <div className="cases-block">
                    <div className="cases__items">
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--blue"> <p>Технологія</p></div>
                                <div className="technology technology--olive"> <p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service"><p>Послуга</p></div>
                            </div>
                        </div>
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--olive"><p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service"><p>Послуга</p></div>
                            </div>
                        </div>
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--blue"> <p>Технологія</p></div>
                                <div className="technology technology--violet"> <p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service"><p>Послуга</p></div>
                            </div>
                        </div>
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--blue"><p>Технологія</p></div>
                                <div className="technology technology--violet"><p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service">Послуга</div>
                            </div>
                        </div>
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--blue"><p>Технологія</p></div>
                                <div className="technology technology--olive"><p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service"><p>Послуга</p></div>
                            </div>
                        </div>
                        <div className="cases__item">
                            <div className="technologys">
                                <div className="technology technology--olive"><p>Технологія</p></div>
                            </div>
                            <div className="companys">
                                <div className="company__name"><p>НАЗВА КОМПАНІЇ</p></div>
                                <div className="company__service"><p>Послуга</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='line' />
            </div>
        </div>
    );
};

export default Cases;