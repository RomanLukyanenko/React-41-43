export const Cart = () => {
    return (
        <div className="cart-added-list">
        <button className="cart-added-list__btn" id="js-cart-added-btn">
            <span className="cart-added-summ js-cart-added-summ">0</span>
            <svg className='icon icon-cart-bag'>
                <use xlinkHref='#icon-cart-bag'></use>
            </svg>
        </button>
        <div className="cart-added-list__item-list" id="js-cart-added-list">
        </div>
    </div>
     );
};