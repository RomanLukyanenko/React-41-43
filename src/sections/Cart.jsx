import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  changeCartVisibility
} from '../store/CartSlice';
import CartNoResult from '../components/CartNoResult';
import CartItem from '../components/CartItem';
import CartButton from '../components/CartButton';
import config from '../store/config'; // Перевірте правильність шляху

export const Cart = () => {
  const dispatch = useDispatch();
  
  // Отримання даних корзини з Redux store
  const { cart, cartVisibility } = useSelector(state => state.cart);
  const cartCount = cart.length;

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
  const toggleCart = useCallback(() => {
    dispatch(changeCartVisibility());
  }, [dispatch]);

  return (
    <div className="cart-added-list">
      <CartButton cartCount={cartCount} toggleCart={toggleCart} />
      <div className={`cart-added-list__item-list ${cartVisibility ? 'show' : ''}`}>
        {cart.length === 0 ? (
          <CartNoResult />
        ) : (
          cart.map((product, index) => {
            const cartItemProps = {
              key: index,
              pathImg: config.pathImg,
              product,
              delCartProduct,
              setItemCountPlus,
              setItemCountMinus,
            };
            return <CartItem {...cartItemProps} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
