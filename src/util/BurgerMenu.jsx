import { useState } from "react";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <input type="checkbox" id="burger-toggle" onChange={toggleMenu} />
      <label htmlFor="burger-toggle" className="hamburger">
        {/* Ваш SVG код тут */}
      </label>

      {isMenuOpen && (
        <div className="js-mobile-menu">
          <ul className="menu navigation__item-list">
            <li className="menu__li navigation__item">
              <a href="index.html" className="menu__link link-hover">
                Головна
              </a>
            </li>
            <li className="menu__li navigation__item">
              <a href="delivery.html" className="menu__link link-hover">
                Доставка і оплата
              </a>
            </li>
            <li className="menu__li navigation__item">
              <a href="contacts.html" className="menu__link link-hover">
                Контакти
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
