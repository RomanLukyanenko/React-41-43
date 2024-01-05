// Компонент ProductCard для відображення інформації про продукт
export const ProductCard = ({ title, price, oldprice, img, formatPrice, onAddToCart }) => {
  return (
    <div className="card-product">
      {/* Блок з зображенням продукту */}
      <div className="card-product__img-hold">
        <img src={`../../../../public/catalog/${img}`} alt={title} className="card-product__img" />
      </div>

      {/* Блок з текстовою інформацією про продукт */}
      <div className="card-product__text-hold">
        {/* Посилання на сторінку продукту */}
        <a href="#" className="card-product__title-link">{title}</a>

        {/* Відображення ціни та старої ціни */}
        <span className="card-product__price js-currency-num">
          <span>{formatPrice(price)}</span>
          <small>{formatPrice(oldprice)}</small>
        </span>

        {/* Кнопка для додавання продукту до кошика */}
        <button className="card-product__add-to-cart">
          Додати до кошика
        </button>
      </div>
    </div>
  );
};
