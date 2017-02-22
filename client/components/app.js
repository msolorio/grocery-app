import React from 'react';
import Header from './header';
import Cards from './cards';
import EditForm from './editForm';
import List from './list';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.viewToShow = this._viewToShow.bind(this);

    this.state = { viewType: 'cards' };
    localStorage.setItem('app:props', JSON.stringify(props));
  }

  _viewToShow(viewType) {
    this.setState({ viewType });
  }

  renderView(viewType) {
    switch (viewType) {
      case 'cards':
        return <Cards />;
      case 'editForm':
        return <EditForm />;
      case 'list':
        return <List />;
      default:
        return <p> VIEW DOESN'T EXISTS </p>
    }
  }

  render() {
    return (
      <div className="jsxApp">
        <Header viewToShow={this.viewToShow} />
        <main className="main">
          { this.renderView(this.state.viewType) }
        </main>
      </div>
    );
  }
}

module.exports = App;
