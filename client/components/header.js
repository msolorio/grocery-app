import React from 'react';

function Header(props) {

  return (
    <div className="jsxHeader">
      <ul className="unorderedList">
        <li className="listItem" onClick={() => { props.handleNavClicked('list') }}>
          Get List
        </li>
        <li className="listItem" onClick={() => { props.handleNavClicked('cards') }}>
          Home
        </li>
        <li className="listItem" onClick={() => { props.handleNavClicked('addItemForm') }}>
          Add Item
        </li>
      </ul>
    </div>
  );
}

module.exports = Header;
