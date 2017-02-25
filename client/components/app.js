import React from 'react';

import Header from './header';
import List from './list';
import AddItemForm from './addItemForm';
import Cards from './cards';

const App = React.createClass({
  getInitialState() {
    return { viewToShow: 'cards' };
  },

  componentWillMount() {

    // dummy data
    this.itemsArray = [
      {
        name: 'spinach',
        quantity: 0.7,
        target: 1,
        incrementor: 0.1,
        location: 'Sprouts'
      },
      {
        name: 'sweet potato',
        quantity: 5,
        target: 8,
        incrementor: 1,
        location: 'Sprouts'
      },
      {
        name: 'dates',
        quantity: 0.4,
        target: 1,
        incrementor: 0.1,
        location: 'Costco'
      }
    ];

  },

  handleNavClicked(viewToShow) {
    this.setState({ viewToShow });
  },

  renderView(viewToShow) {
    switch (viewToShow) {
      case 'cards':
        return <Cards itemsArray={this.itemsArray} />;
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
      <div className="jsxApp">
        <Header handleNavClicked={this.handleNavClicked} />
        {this.renderView(this.state.viewToShow)}
      </div>
    );
  }
});

module.exports = App;
