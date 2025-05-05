import React from 'react';
import './Indications.css';
import { useEffect, useState } from 'react';


const Indications = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('https://cms.clapkey.space/api/main?locale')
            .then((res) => res.json())
            .then((data) => setData(data.data))
            .catch((err) => console.error('Помилка', err));
    }, []);

    if (!data) return null;

    return (
        <div className='indications'>
            <div className="container">
                <div className="indications-block">
                    <div className="indications__items">
                        <div className="indications__item">
                            <p className="indication__item num">{data.project_success_score}</p>
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