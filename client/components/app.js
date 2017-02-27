import React from 'react';

import Header from './header';
import List from './list';
import AddItemForm from './addItemForm';
import Cards from './cards';

const App = React.createClass({
  getInitialState() {
    return {
      viewToShow: 'cards',
      itemsArray: [
          {
          name: 'spinach',
          quantity: 0.7,
          target: 1,
          incrementor: 0.1,
          location: 'Sprouts',
          units: 'bins'
        },
        {
          name: 'sweet potato',
          quantity: 5.0,
          target: 8,
          incrementor: 1,
          location: 'Sprouts',
          unit: ''
        },
        {
          name: 'dates',
          quantity: 0.4,
          target: 1,
          incrementor: 0.1,
          location: 'Costco',
          units: 'bins'
        }
      ]
    };
  },

  handleNavClicked(viewToShow) {
    this.setState({ viewToShow });
  },

  parseQuantity(input) {
    if (Math.round(input) !== input ) return Math.round(input * 10) / 10;
    return input;
  },

  handleDownClicked(index) {
    const itemsArrayClone = this.state.itemsArray.slice();
    let quantity = itemsArrayClone[index].quantity;
    const incrementor = itemsArrayClone[index].incrementor;
    itemsArrayClone[index].quantity = this.parseQuantity(quantity - incrementor);

    this.setState({
      itemsArray: itemsArrayClone
    });
  },

  handleUpClicked(index) {
    const itemsArrayClone = this.state.itemsArray.slice();
    let quantity = itemsArrayClone[index].quantity;
    const incrementor = itemsArrayClone[index].incrementor;
    itemsArrayClone[index].quantity = this.parseQuantity(quantity + incrementor);

    this.setState({
      itemsArray: itemsArrayClone
    });
  },

  renderView(viewToShow) {
    switch (viewToShow) {
      case 'cards':
        return (
          <Cards
            itemsArray={this.state.itemsArray}
            handleDownClicked={this.handleDownClicked}
            handleUpClicked={this.handleUpClicked}
          />
        );
      case 'list':
        return <List />;
      case 'addItemForm':
        return <AddItemForm />;
      default:
        return <div>no view to show</div>;
    }
  },

  render() {
    return (
      <div className="jsxApp container">
        <Header handleNavClicked={this.handleNavClicked} />
        {this.renderView(this.state.viewToShow)}
      </div>
    );
  }
});

module.exports = App;
