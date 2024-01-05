import { useState } from 'react';

export const Cart = () => {
  const [itemCount, setItemCount] = useState(1);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCountChange = (e) => {
    setItemCount(e.target.value);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="cart-added-list">
      <button className="cart-added-list__btn" id="js-cart-added-btn" onClick={toggleCartVisibility}>
        <span className="cart-added-summ js-cart-added-summ">0</span>
        <svg className="icon icon-cart-bag">
          <use xlinkHref="#icon-cart-bag"></use>
        </svg>
      </button>
      {isCartVisible && (
        <div className="cart-added-list__item-list">
          {/* ... інші елементи ... */}
          <div className="cart-added-list__item">
            {/* Контент корзини */}
            <button className="cart-added-list__item-btn-delete btn-light">
              <svg className="icon icon-close">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
            <img
              src="../../public/no-result/empty-cart.png"
              alt=""
              className="cart-added-list__item-img"
            />
            <p className="cart-added-list__item-text-hold">
              <a href="#" className="cart-added-list__item-title-link">
                Назва товару
              </a>
              <span className="cart-added-list__item-meta-list">
                <span className="cart-added-list__item-meta">Ціна: 6 999 грн</span>
              </span>
            </p>
            <input
              type="text"
              className="cart-added-list__item-count"
              value={itemCount}
              onChange={handleCountChange}
            />
            <button className="cart-added-list__item-btn-plus btn-light"></button>
            <button className="cart-added-list__item-btn-minus btn-light"></button>
          </div>
        </div>
      )}
    </div>
  );
};
