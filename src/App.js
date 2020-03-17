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
    this.setState(() => {
      const updated = vsSchoolProducts.map(upTo => {
        if (upTo.id === id) {
          upTo.isBuyy = !upTo.isBuyy
        }
        return upTo
      })
      console.log("its working", this.state.products.isBuyy)
      return {
        products: updated
      }
    })
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    }
  }
  render() {
    const products = vsSchoolProducts.map(item => <Product Key={item.id} product={item} handleClick={this.handleClick} completedStyle={this.completedStyle}/>)
   return (
     <div className="App">
       {products}
     </div>
   )
  }
}

export default App;
