import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClicked: undefined
    }
  }

  render() {
    return (
      <header className="jsxHeader">
        <ul className="navLinks">
          <li className="navLink navLink-getList" onClick={() => { this.props.viewToShow('list'); }}>Get List</li>
          <li className="navLink navLink-home" onClick={() => { this.props.viewToShow('cards'); }}>Home</li>
          <li className="navLink navLink-addItem" onClick={() => { this.props.viewToShow('editForm'); }}>Add Item</li>
        </ul>
      </header>
    );
  }
}

module.exports = Header;
