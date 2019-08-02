import React from 'react';
import './App.css';
import Listing from './components/Listing';

import data from './data/data';
const actualData = [];
for (const datum of data) {
  const {
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
  } = datum;
  actualData.push({
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price: (+price).toFixed(2),
    quantity,
  });
}

const finalData = actualData.filter(item => item.MainImage !== undefined);

function App() {
  return (
    <div className="App">
      <Listing items={finalData} />
    </div>
  );
}

export default App;
