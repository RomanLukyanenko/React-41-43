export const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <a href="index.html" className="logo">I-happy</a>

            <ul className="navbar-nav menu">
                <li className="nav-item menu__li">
                    <a className="nav-link menu__link link-hover" href="index.html#catalog">Каталог</a>
                </li>
                <li className="nav-item menu__li">
                    <a className="nav-link menu__link link-hover" href="about.html">Про нас</a>
                </li>
                <li className="nav-item menu__li">
                    <a className="nav-link menu__link link-hover" href="delivery.html">Доставка і оплата</a>
                </li>
                <li className="nav-item menu__li">
                    <a className="nav-link menu__link link-hover" href="contacts.html">Контакти</a>
                </li>
            </ul>

            <div className="footer__social">
                <div className="social">
                    <a href="#" rel="nofollow" target="_blank" className="social__item facebook"><svg
                            className='icon icon-facebook'>
                            <use xlinkHref='#icon-facebook'></use>
                        </svg></a>
                    <a href="#" rel="nofollow" target="_blank" className="social__item instagram"><svg
                            className='icon icon-instagram'>
                            <use xlinkHref='#icon-instagram'></use>
                        </svg></a>
                    <a href="#" rel="nofollow" target="_blank" className="social__item youtube"><svg
                            className='icon icon-youtube'>
                            <use xlinkHref='#icon-youtube'></use>
                        </svg></a>
                </div>
            </div>
            
            <div className="footer__social"> </div>

            <p className="footer__copyright">
                <span>Всі права на статті, ілюстрації, інші матеріали належать site.com та охороняються законом України
                    «Про авторське право і суміжні права».<br/>При використанні матеріалів посилання на сайт
                    обов'язкове!</span>
                <span className="footer__developer">Розробник сайту: <a href="#" target="_blank">Роман</a></span>
            </p>
        </div>
    </div>
     );
};