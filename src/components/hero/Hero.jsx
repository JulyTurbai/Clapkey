import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-block">
                    <div className="hero text">
                        <h1 className='text main'>
                            ПІДТРИМКА БІЗНЕСУ<br/>
                            У ВСІХ АСПЕКТАХ
                        </h1>
                        <p className='text dop'>
                            Комплексно підходимо до аудиту бізнес процесів<br/>
                            IT інфраструктури та кібер безпеки компанії
                        </p>
                    </div>
                    <div className="services">
                        <div className="block-one">
                            <div className="service">
                                <div className="service outsourse">
                                    <p>IT OUTSOURCE</p>
                                </div>
                            </div>
                        </div>
                        <div className="block-two">
                            <div className="buttons">
                                <button className="button__more">ДЕТАЛЬНІШЕ</button>
                                <button className="button__order">ЗАМОВИТИ</button>
                            </div>
                            <div className="blocks">
                                <div className="service">
                                    <div className="service crm">
                                        <p>CRM + ERP</p>
                                    </div>   
                                </div>
                                <div className="service">
                                    <div className="service cyber">
                                        <p>КІБЕР БЕЗПЕКА</p>
                                    </div>   
                                </div>
                                <div className="service">
                                    <div className="service consult">
                                        <p>БІЗНЕС<br/>КОНСАЛТИНГ</p>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="block-three">
                            <div className="service">
                                <div className="service help">
                                    <button className='help__button'><img src="img/hero/arrow.png" alt="" /></button>
                                    <div className="help__info">
                                        <p className='help__phone'>+38 067 569-61-50</p>
                                        <p>info@lapkey.com</p>
                                    </div>
                                    <div className='help__immed'>ТЕРМІНОВА <br/>ДОПОМОГА</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

