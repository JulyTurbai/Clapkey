import Choice from "../../components/choice/Choice";
import Clients from "../../components/clients/Clients";
import Events from "../../components/events/Events";
import Indications from "../../components/indications/Indications";
import OrderCall from "../../components/orderCall/OrderCall";
import Private from "../../components/private/Private";
import Stand from "../../components/standWith/Stand";
import './About.css';

export const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h1>ПРО КОМПАНІЮ</h1>
                <div className="about block">
                    <div className="about__main">
                        <img className="about__img" src="img/about/about-img.png" alt="" />
                        <p className="about__descr">
                        Наша команда складається з кваліфікованих спеціалістів, які знають, як вирішити будь-яку проблему, з якою ви можете зіткнутися. 
                        Це створює основу для довготривалих відносин з нашими клієнтами, побудованих на довірі та взаєморозумінні.
                        Наша команда складається з кваліфікованих спеціалістів, які знають, як вирішити будь-яку проблему, з якою ви можете зіткнутися. 
                        Це створює основу для довготривалих відносин з нашими клієнтами, побудованих на довірі та взаєморозумінні.Наша команда складається з 
                        кваліфікованих спеціалістів, які знають, як вирішити будь-яку проблему, з якою ви можете зіткнутися. Це створює основу для довготривалих 
                        відносин з нашими клієнтами, побудованих на довірі та взаєморозумінні.<br/><br/>
                        
                        Наша команда складається з кваліфікованих спеціалістів, які знають, як вирішити будь-яку проблему, з якою ви можете зіткнутися. 
                        Це створює основу для довготривалих відносин з нашими клієнтами, побудованих на довірі та взаєморозумінні.
                        </p>
                    </div>
                    <Events/>
                </div>
            </div>
            <Clients/>
            <Private/>
            <Choice/>
            <Indications/>
            <div className="container">
                
                    <OrderCall/>
                
            </div>
            <Stand/>
        </div>
    );
};