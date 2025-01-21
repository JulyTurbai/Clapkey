import React from 'react';
import Hero from '../components/hero/Hero';
import Indications from '../components/indications/Indications';
import Cases from '../components/cases/Cases';
import More from '../components/more/More';
import Clients from '../components/clients/Clients';
import Private from '../components/private/Private';
import Choice from '../components/choice/Choice';
import Stand from '../components/standWith/Stand';

export const Home = () => {
    return (
        <div className="home">

                <Hero />
                <Indications/>
                <Cases/>
                <More/>
                <Clients/>
                <Private/>
                <Choice/>
                <Stand/>
        </div>
    );
};


