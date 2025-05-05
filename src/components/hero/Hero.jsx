import './Hero.css';
import Events from '../events/Events';


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

                    <Events/>
                </div>
            </div>
        </div>
    );
};

export default Hero;

