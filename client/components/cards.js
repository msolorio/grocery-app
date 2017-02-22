import React from 'react';
import Card from './card';

// dummy data
const cards = [
  {
    name: 'sweet potato',
    quantity: 5,
    target: 8,
    incrementor: 1
  },
  {
    name: 'spinach',
    quantity: 1,
    target: 1,
    incrementor: 0.1
  },
  {
    name: 'tomato',
    quantity: 4,
    target: 5,
    incrementor: 1
  }
];

function Cards() {

  const cardsList = cards.map((card, index) => {
    return (
      <Card
        key={index}
        name={card.name}
        quantity={card.quantity}
        target={card.target}
        incrementor={card.incrementor}
      />
    );
  });

  return (
    <div className="jsxCards">
      {cardsList}
    </div>
  );
}

module.exports = Cards;
