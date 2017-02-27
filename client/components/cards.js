import React from 'react';

import Card from './card';

function Cards(props) {

  // create collection of li's of cards
  const cardsList = props.itemsArray.map((item, index) => {
    return (
      <Card
        key={index}
        index={index}
        name={item.name}
        quantity={item.quantity}
        target={item.target}
        handleDownClicked={props.handleDownClicked}
        handleUpClicked={props.handleUpClicked}
        units={item.units}
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
