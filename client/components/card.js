import React from 'react';

function Card(props) {
  return (
    <div className="jsxCard">
      <h3>{props.name}</h3>
      <p>{props.quantity} / {props.target}</p>
    </div>
  );
}

module.exports = Card;
