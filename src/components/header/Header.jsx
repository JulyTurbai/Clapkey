// import './Header.scss';
const Header = () => {
 
    
    return (
        <header className="header">
            <nav className="menu">
                <img className="menu logo" src="img/logo.png" alt="" />
                <ul className="menu-items">
                    <li className="menu-item">CRM та ERP</li>
                    <li className="menu-item">КІБЕР БЕЗПЕКА</li>
                    <li className="menu-item">IT АУТСОРСИНГ</li>
                    <li className="menu-item">ПРО НАС</li>
                </ul>
                <div className="menu dop">
                    <div className='dop-lang'>UA</div>
                    <div className="dop-exit">Вхід</div>
                   
                </div>
            </nav>
      </header>
    );
};

export default Header;