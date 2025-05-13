import { Link } from "react-router-dom";
import './NotFound.css';

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <div className="main-info">
                    <img className="main-info__img" src="img/notFound/notFound.png" alt="" />
                    <div className="main-info__descr">
                        <h3>СТОРІНКА НЕ ЗНАЙДЕНА</h3>
                        <h4>Текст про те, що сторінка не знайдена і користувач зробив помилку</h4>
                        <button className="not-found__link"><Link to="/">НА ГОЛОВНУ</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};