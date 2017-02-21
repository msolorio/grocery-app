import React from 'react';

function Header() {
  return (
    <header className="jsxHeader">
      <ul className="navLinks">
        <li className="navLink navLink-getList">Get List</li>
        <li className="navLink navLink-home">Home</li>
        <li className="navLink navLink-addItem">Add Item</li>
      </ul>
    </header>
  );
}

module.exports = Header;
