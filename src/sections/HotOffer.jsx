export const HotOffer = () => {
    return (
        <div className="hot-offers" id="block-hot-offers">
        <div className="container">

            <h2 className="hot-offers__title title-square">
                <span className="title-square__icon"><svg className='icon icon-fire'>
                        <use xlinkHref='#icon-fire'></use>
                    </svg></span>
                <span className="title-square__small">Акційні пропозиці!</span>
                <span className="title-square__main">Гарячі пропозиції</span>
            </h2>

            <div className="hot-offers__cards" id="hot-offer-products">

            </div>

        </div>
    </div>
    );
};