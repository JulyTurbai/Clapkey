import './Header.css';

const Header = () => {
    
    return (
        <header className="header">
            <div className="container">
                <div className="header block">
                    <img className="logo" src="img/logo.png" alt="" />
                    <nav className="menu">
                        <ul className="menu-items">
                            <li className="menu-item"><a href="#">CRM та ERP <img src="img/arrow.png" alt="" /></a>
                                <ul>
                                    <li><a href="#"></a>CRM</li>
                                    <li><a href="#"></a>ERP</li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#">КІБЕР БЕЗПЕКА <img src="img/arrow.png" alt="" /></a>
                            
                                <ul>
                                    <li><a href="#"></a>Plagins</li>
                                    <li><a href="#"></a>Paroles</li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#">IT АУТСОРСИНГ <img src="img/arrow.png" alt="" /></a>
                                <ul>
                                    <li><a href="#"></a>Plagins</li>
                                    <li><a href="#"></a>Paroles</li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="#">ПРО НАС</a></li>
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