import React from 'react';

import Card from './card';

function Cards(props) {

  // create collection of li's of cards
  const cardsList = props.itemsArray.map((item, index) => {
    return (
      <Card
        key={index}
        name={item.name}
        quantity={item.quantity}
        target={item.target}
      />
    );
  });

  return (
    <div className="jsxCards">
      <ul className="unorderedList">
        {cardsList}
      </ul>
    </div>
  );
}

module.exports = Cards;
