import React from 'react';
import Hero from '../components/hero/Hero';
import Indications from '../components/indications/Indications';

export const Home = () => {
    return (
        <div className="home">
            
                <div className="main">
                    <Hero />
                    <Indications/>
                </div>
            
        </div>
    );
};


