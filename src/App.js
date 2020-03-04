import React from 'react';
import vsSchoolProducts from "./vschoolProducts"
import './App.css';
import Product from "./Product"

function App() {
  const products = vsSchoolProducts.map(product => <Product Key={product.id} name={product.name} price={Product.price} description={product.description}/>)
  return (
    <div className="App">
      {products}
    </div>
  );
}

export default App;
