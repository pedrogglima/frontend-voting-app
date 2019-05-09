import React from 'react';
import ProductList from './product_list';

class App extends React.Component {
  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        < ProductList / >
      </div>
    );
  }
}

export default App;
