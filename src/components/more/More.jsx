import React from 'react';
import './More.css';

const More = () => {
    return (
        <div className='more'>
            <div className="container">
                <div className="more-block">
                    <div className="img"></div>
                    <div className="details">
                        <div className="details main-text">
                            <p>ПІДТРИМКА БІЗНЕСУ<br/>У ВСІХ АСПЕКТАХ</p>
                        </div>
                        <div className="details descr">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                In debitis at maiores sequi delectus ab! In mollitia ea natus repellat, 
                                quam nulla voluptatibus quia ad repudiandae vel aliquid ex quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eum minima reiciendis aut doloribus pariatur quaerat? Ut dolore odit, 
                                eligendi perspiciatis alias perferendis rerum praesentium fuga non amet minus 
                                ex eum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quam, nobis sunt quisquam, 
                                asperiores dolore dignissimos labore voluptatibus necessitatibus 
                                cumque ad deserunt numquam omnis mollitia quis nulla molestiae, veritatis earum?
                            </p>
                        </div>
                        <button className='details but'>ДЕТАЛЬНІШЕ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;