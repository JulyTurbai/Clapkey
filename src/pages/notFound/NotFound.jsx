import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <h1>CLAPKEY</h1>
                <hr className="not-found line"/>
                <div className="main-info">
                    <img src="img/notFound/notFound.png" alt="" />
                    <div className="main-info__descr">
                        <h3>СТОРІНКА НЕ ЗНАЙДЕНА</h3>
                        <h4>Текст про те, що сторінка не знайдена і користувач зробив помилку</h4>
                        <button><Link to="/">Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};