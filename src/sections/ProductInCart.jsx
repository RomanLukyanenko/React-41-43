const ProductInCart = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.title} />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <button onClick={() => onRemove(item.id)}>Видалити</button>
    </div>
  );
};

export default ProductInCart;
