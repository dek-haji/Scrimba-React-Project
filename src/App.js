import React from 'react';
import vsSchoolProducts from "./vschoolProducts"
import './App.css';
import Product from "./Product"
import Credential from "./Credential"


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
    handleClick(id) {
      this.setState(prev => {
        const updated = prev.products.map(upTo => {
          if (upTo.id === id) {
            upTo.isBuyy = !upTo.isBuyy
          }
          return upTo
        })
        return {
          products: updated
        }
      })
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
