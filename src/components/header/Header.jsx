import { NavLink,  } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <header className="header">
            <div className="container">
                <div className="header block">
                    <NavLink to='/'><img className="logo"  src="img/logo.png" alt="" /></NavLink>
                    <nav className="menu">
                        <ul className="items">
                            <li className="item"><a href="#">CRM та ERP <img src="img/arrow.png" alt="" /></a>
                                <ul>
                                    <li><a href="#"></a>CRM</li>
                                    <li><a href="#"></a>ERP</li>
                                </ul>
                            </li>
                            <li className="item"><a href="#">КІБЕР БЕЗПЕКА <img src="img/arrow.png" alt="" /></a>
                                <ul>
                                    <li><a href="#"></a>Plagins</li>
                                    <li><a href="#"></a>Paroles</li>
                                </ul>
                            </li>
                            <li className="item"><a href="#">IT АУТСОРСИНГ <img src="img/arrow.png" alt="" /></a>
                                <ul>
                                    <li><a href="#"></a>Plagins</li>
                                    <li><a href="#"></a>Paroles</li>
                                </ul>
                            </li>
                            <li className="item"><NavLink to="/about">ПРО НАС</NavLink></li>
                        </ul>
                    </nav>
                    <div className="dop-menu">
                        <div className='dop-menu lang'>UA</div>
                        <button className="dop-menu exit">ВХІД</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;