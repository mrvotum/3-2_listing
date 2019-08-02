import React from 'react';
import PropTypes from 'prop-types';

const makePrice = (currency, price) => {
  if (currency === 'USD') return '$' + price;
  if (currency === 'EUR') return '€' + price;
  return price + ' GBP';
}

const level =(quantity) => {
  if (quantity <= 10) return 'low';
  if (quantity <= 20) return 'medium';
  return 'high';
}

const checkLength =(title) => {
  if (title.length > 50) return title.slice(0, 49) + '...';
}

export default function Item({ item }) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{checkLength(item.title)}</p>
        <p className="item-price">
          {makePrice(item.currency_code, item.price)}
        </p>
        <p className={`item-quantity level-${level(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    MainImage: PropTypes.object,
    url: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
