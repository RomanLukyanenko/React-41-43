
export const Cataloge = () => {
    return (
        <div className="catalog" id="catalog">
        <div className="container">
            <div className="catalog__header">
                <div className="catalog__select-category dropdown">
                    <h3 className="dropdown-btn">Вибрати категорію</h3>
                    <div className="dropdown-content" id="category-list">

                    </div>
                </div>
                <h3 className="catalog__products-summ">Знайдено товарів: <span id="view-count-products">0</span></h3>
            </div>

            <div className="catalog__content" id="catalog-products">
                
                <h1>Loading...</h1>

            </div>

        </div>
    </div>
    );
};