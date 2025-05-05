import OrderCall from '../../components/orderCall/OrderCall';
import Stand from '../../components/standWith/Stand';
import './Contacts.css';

export const Contacts = () => {
    console.log('hello');
  return (
    <div className='contacts'>
        <div className="container">
            <h1>КОНТАКТИ</h1>
            <div className="contacts categoryes">
                <div className="category social">
                    <p className="socail descr">МИ ТАМ - ДЕ ТОБІ ЗРУЧНО!</p>
                    <img className="social img" src="img/choice/choice.png" alt="" />
                    <ul className="icons">
                        <li className="icons__icon"><img src="img/icons/facebook.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/insta.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/telegram.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/viber.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/icon1.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/icon2.png" alt="" /></li>
                        <li className="icons__icon"><img src="img/icons/icon3.png" alt="" /></li>
                    </ul>
                </div>
                <div className="category emails">
                    <button className="emails__button"><img src="img/icons/arrow.png" alt="" /></button>
                    <ul className="emails__phones">
                        <li className="email__phones phone">+380675696150</li>
                        <li className="email__phones phone">+380532698181</li>
                    </ul>
                    <ul className="emails__mails">
                        <li className="emails__mails mail">support@clapkey.com служба підтримки</li>
                        <li className="emails__mails mail">info@clapkey.com відділ по роботі з клієнтами</li>
                        <li className="emails__mails mail">docs@clapkey.com фінансова служба</li>
                    </ul>
                </div>
                <div className="category address">
                    <ul className="info">
                        <li className="info__img"><img src="img/icons/letter.png" alt="" /></li>
                        <li className="info__location">офіс 403, вул. Гоголя 38, м.Полтава, Україна, 36000</li>
                        <li className="info__letters"> * для листування </li>
                    </ul>
                </div>
            </div>
            <hr className='line' />
            <OrderCall/>
        </div>
        <Stand/>
    </div>
  );
};

