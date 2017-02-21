import React from 'react';
import ReactDOM from 'react-dom';

const HelloUser = React.createClass({
  render() {
    return (
      <div> hello {this.props.name} </div>
    )
  }
});

ReactDOM.render(
  <HelloUser name="Hubert" />,
  document.getElementById('app')
);
