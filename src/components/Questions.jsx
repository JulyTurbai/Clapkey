import React, { useState } from 'react';
import './Questions.css';

const Questions = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleItem = () => setIsOpen(!isOpen);
  
    return (
    <div className='questions'>
        <div className="container">
            <div className={`question-item ${isOpen ? 'open' : ''}`}>
                    <div className="question-header" onClick={toggleItem}>
                        <span>{title}</span>
                        <span className="arrow">{isOpen ? <img src="img/icons/arrow-abowe.png" alt="" /> : <img src="img/icons/arrow-down.png" alt="" />}</span>
                    </div>
                    {isOpen && <div className="question-content">{content}</div>}
                </div>
            </div>
        </div>
  )
}

export default Questions