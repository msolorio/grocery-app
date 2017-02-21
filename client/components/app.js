import React from 'react';
import Header from './header';
import Cards from './cards';
import EditForm from './editForm';
import List from './list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCards: true,
      showEditForm: false,
      showList: false
    };
  }

  render() {
    return (
      <div className="jsxApp">
        <Header />
        <main className="main">
          { (this.state.showCards) ? <Cards /> : null }
          { (this.state.showEditForm) ? <EditForm /> : null }
          { (this.state.showList) ? <List /> : null }
        </main>
      </div>
    );
  }
}

module.exports = App;
