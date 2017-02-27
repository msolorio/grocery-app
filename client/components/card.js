import React from 'react';

function Card(props) {

  return (
    <div className="jsxCard">
      <h3>{props.name}</h3>

      <div className="incrementor">
        <div
          className="incrementDown"
          onClick={() => {props.handleDownClicked(props.index)}}
        >&#9668;</div>

        <div>{(props.quantity)} / {props.target} {props.units}</div>

        <div
          className="incrementUp"
          onClick={() => {props.handleUpClicked(props.index)}}
        >&#9658;</div>
      </div>
    </div>
  );
}

module.exports = Card;
