import React from 'react'
import Cases from '../../components/cases/Cases'
import Indications from '../../components/indications/Indications'
import Clients from '../../components/clients/Clients'
import Private from '../../components/private/Private'
import QuestionsItems from '../../components/QuestionsItems'
import './CrmErp.css';
import Tarifes from '../../components/tarifes/Tarifes'

const CrmErp = () => {
  return (
    <div className="crmErp">
    <div className='container'>
        <p className='main-text'>
            Оптимізуйте роботу бізнесу<br/> 
            з CRM та ERP
        </p>
        <Cases/>
    </div>
    <Indications/>
    <div className="container">
        <div className="about-crm">
            <div className="product">
                <p className="name">Що таке<br/>ERP-система?</p>
                <p className='descr'>Наша команда складається з кваліфікованих спеціалістів, які  знають,  як вирішити будь-яку 
                    проблему, з якою ви можете  зіткнутися. Це створює основу для довготривалих відносин з 
                    нашими клієнтами, побудованих на довірі та взаєморозумінні. Ми прагнемо створювати 
                    унікальні та інноваційні рішення разом із високоякісними допоміжними послугами.
                    CRM та ERP системи, Кібер безпека
                    Аудит, побудова та супровід ІТ інфраструктури
                    Власний хостинг для безпеки Ваших данних
                </p>
            </div>
            <div className="product">
                <p className='descr'>Наша команда складається з кваліфікованих спеціалістів, які  знають,  як вирішити будь-яку 
                    проблему, з якою ви можете  зіткнутися. Це створює основу для довготривалих відносин з 
                    нашими клієнтами, побудованих на довірі та взаєморозумінні. Ми прагнемо створювати 
                    унікальні та інноваційні рішення разом із високоякісними допоміжними послугами.
                    CRM та ERP системи, Кібер безпека
                    Аудит, побудова та супровід ІТ інфраструктури
                    Власний хостинг для безпеки Ваших данних
                </p>
                <p className="name">CRP-система?</p>
            </div>
        </div>
    </div>
    <Clients/>
    <Private/>
    <div className="advantages">
        <div className="main-advantages">
            <img src="img/advantages/advantages.png" alt="" />
            <p>ПЕРЕВАГИ ERP-системи</p>
        </div>
        <div className="dop-advantages">
            <div className="indication">
                <img src="img/icons/arrow-down.png" alt="" />
                <p>ПЕРЕВАГИ ERP-системи</p>
            </div>
        </div>
    </div>
    <QuestionsItems/>
    <Tarifes/>
    </div>
    
  )
}

export default CrmErp