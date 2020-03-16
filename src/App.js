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
    this.handleClick = this.handleClick.bind(this)
  }
    handleClick(id) {
      this.setState(prev => {
        const updated = prev.products.map(upTo => {
          if (upTo.id === id) {
            upTo.isBuyy = !upTo.isBuyy
          }
          return upTo
        })
        console.log("its working")
        return {
          products: updated
        }
      })
    }
  render() {
     const products = vsSchoolProducts.map(item => <Product Key={item.id} product={item} handleClick={this.handleClick} />)
   return (
     <div className="App">
       {products}
     </div>
   )
  }
}

export default App;
