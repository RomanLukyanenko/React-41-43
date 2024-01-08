import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseItemCount, decreaseItemCount, changeCartVisibility } from '../store/CartSlice';

export const Cart = () => {
  const dispatch = useDispatch();

  // Отримання даних корзини з Redux store
  const { cart, cartVisibility } = useSelector(state => state.cart);

  // Видалення товару з корзини
  const delCartProduct = useCallback((productId) => {
    dispatch(removeFromCart({ id: productId }));
  }, [dispatch]);

  // Додавання кількості товарів
  const setItemCountPlus = useCallback((productId) => {
    dispatch(increaseItemCount({ id: productId }));
  }, [dispatch]);

  // Зменшення кількості товарів
  const setItemCountMinus = useCallback((productId) => {
    dispatch(decreaseItemCount({ id: productId }));
  }, [dispatch]);

  // Перемикач видимості корзини
  const toggleCartVisibility = useCallback(() => {
    dispatch(changeCartVisibility());
  }, [dispatch]);

  return (
    <div className="cart-added-list">
      <button className="cart-added-list__btn" onClick={toggleCartVisibility}>
        {/* Іконка та кількість товарів у кошику */}
        <span className="cart-added-summ js-cart-added-summ">{cart.length}</span>
        <svg className="icon icon-cart-bag">
          <use xlinkHref="#icon-cart-bag"></use>
        </svg>
      </button>

      {cartVisibility && (
        cart.length === 0 ? (
          <span className="no-result no-result--inline">
            {/* Повідомлення про порожню корзину */}
            <img src="../../public/no-result/no-result-v2.png" alt="No results" className="no-result__img" />
            <span className="no-result__title">Результатів не знайдено</span>
          </span>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-added-list__item">
              {/* Вміст товару у кошику */}
              <button className="cart-added-list__item-btn-delete btn-light" onClick={() => delCartProduct(product.id)}>
                <svg className='icon icon-close'>
                  <use xlinkHref='#icon-close'></use>
                </svg>
              </button>
              <img src={`../../public/catalog/${product.img}`} alt={product.name} className="cart-added-list__item-img" />
              <p className="cart-added-list__item-text-hold">
                <span className="cart-added-list__item-title-link">{product.title}</span>
                <span className="cart-added-list__item-meta-list">
                  <span className="cart-added-list__item-meta">Ціна: {product.price} грн</span>
                </span>
              </p>
              <input type="text" className="cart-added-list__item-count" value={product.count} readOnly/>
              <button className="cart-added-list__item-btn-plus btn-light" onClick={() => setItemCountPlus(product.id)}></button>
              <button className="cart-added-list__item-btn-minus btn-light" onClick={() => setItemCountMinus(product.id)}></button>
            </div>
          ))
        )
      )}
    </div>
  );
};