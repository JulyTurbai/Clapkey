import React from 'react';
import Hero from '../components/hero/Hero';
import Indications from '../components/indications/Indications';
import Cases from '../components/cases/Cases';
import More from '../components/more/More';

export const Home = () => {
    return (
        <div className="home">
            
                <div className="main">
                    <Hero />
                    <Indications/>
                    <Cases/>
                    <More/>
                </div>
            
        </div>
    );
};


