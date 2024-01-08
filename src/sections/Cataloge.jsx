// /components/Cataloge.js
import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CurrencySwitcher } from '../components/CurrencySwitcher';
import { useCurrencyRates } from '../urls/Api'; // Припускаючи, що це кастомний хук
import { FormatPrice as formatPriceUtil } from '../util/FormatPrice'; // Припускаючи, що це функція утиліта для форматування ціни

export const Cataloge = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCurrency, setCurrentCurrency] = useState('UAH');
  const currencyData = useCurrencyRates();

  useEffect(() => {
    fetch("https://654ca14b77200d6ba8591faa.mockapi.io/catalog")
      .then(response => response.json())
      .then(data => setProducts(data));

    fetch("https://654ca14b77200d6ba8591faa.mockapi.io/category")
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const handleCategoryChange = (catid) => {
    setSelectedCategory(catid.toString());
  };

  const formatPrice = (price) => {
    let formattedPrice = price;
    switch (currentCurrency) {
      case 'EUR':
        formattedPrice = price * (currencyData.EUR || 1);
        break;
      case 'USD':
        formattedPrice = price * (currencyData.USD || 1);
        break;
      default:
        formattedPrice = price;
    }
    return formatPriceUtil(formattedPrice, currentCurrency);
  };

  const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(product => product.catid.toString() === selectedCategory);

  return (
    <div className="catalog" id="catalog">
      <div className="container">
        <CurrencySwitcher onCurrencyChange={setCurrentCurrency} />
        <div className="catalog__header">
          <div className="catalog__select-category dropdown">
            <h3 className="dropdown-btn">Вибрати категорію</h3>
            <div className="dropdown-content" id="category-list">
              {/* Додаємо можливість вибору всіх категорій */}
              <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryChange('all'); }}
                 className={selectedCategory === 'all' ? 'dropdown-item selected' : 'dropdown-item'}>
                Всі
              </a>
              {/* Рендеримо посилання для кожної категорії */}
              {categories.map((category) => (
                <a key={category.id} href="#" onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category.id);
                }}
                className={selectedCategory === category.id ? 'dropdown-item selected' : 'dropdown-item'}>
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <h3 className="catalog__products-summ">
            Знайдено товарів: <span id="view-count-products">{filteredProducts.length}</span>
          </h3>
        </div>
        <div className="catalog__content" id="catalog-products">
          {filteredProducts.length === 0 ? (
            <h1>Loading...</h1>
            ) : (
              filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} formatPrice={formatPrice} />
                ))
                )}
        </div>
      </div>
    </div>
  );
};