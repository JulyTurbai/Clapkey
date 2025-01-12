import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-block">
                    <div className="hero text">
                        <p className='text main'>
                            ПІДТРИМКА БІЗНЕСУ<br/>
                            У ВСІХ АСПЕКТАХ
                        </p>
                        <p className='text dop'>
                            Комплексно підходимо до аудиту бізнес процесів<br/>
                            IT інфраструктури та кібер безпеки компанії
                        </p>
                    </div>
                    <div className="hero main-info">
                        <div className="main-info info">
                            <div className="main-info__outsourse">
                                <p>IT OUTSOURCE</p>
                            </div>
                            <div className="buttons-and-info">
                                <div className="buttons">
                                    <button className=' button__more'>ДЕТАЛЬНІШЕ</button>
                                    <button className=' button__order'>ЗАМОВИТИ</button>
                                </div>
                                <div className='info-middle'>
                                    <div className="main-info__crm">
                                        <p>CRM + ERP</p>
                                    </div>
                                    <div className="main-info__cyber">
                                        <p>КІБЕР БЕЗПЕКА</p>
                                    </div>
                                    <div className="main-info__consult">
                                        <p>БІЗНЕС КОНСАЛТИНГ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-info__help">
                                <button className='main-info__button'><img src="img/hero/arrow.png" alt="" /></button>
                                <div className="main-info__info">
                                    <p className='main-info__phone'>+38 067 569-61-50</p>
                                    <p>info@lapkey.com</p>
                                </div>
                                <p className='main-info__immed'>ТЕРМІНОВА <br/>ДОПОМОГА</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

