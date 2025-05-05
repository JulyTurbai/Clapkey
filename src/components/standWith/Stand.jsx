import React from 'react';
import './Stand.css';

const Stand = () => {
    return (
        <div className='stand'>
            <div className="container">
                <div className="stand-block">
                    <button className='support'>Підтримати</button>
                    <p className="stand-text">Збройні сили України під час російського вторгнення</p>
                    <p className='hashtag'>#StandWithUkraine</p>
                </div>
            </div>
        </div>
    );
};

export default Stand;