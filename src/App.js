import React from 'react';
import vsSchoolProducts from "./vschoolProducts"
import './App.css';
import Product from "./Product"


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  render() {
     const products = vsSchoolProducts.map(item => <Product Key={item.id} product={item}/>)
   return (
    <div className="App">
      {products}
     </div>
   )
  }
}

export default App;
