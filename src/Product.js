import React from "react"


class Product extends React.Component {


    render() {
        return(
        <div  className="product-list">
            <h3 style={this.props.completedStyle ? this.props.completedStyle: null}>{this.props.product.name}</h3>
            <p>Price: {this.props.product.price}</p>
                <p>description: {this.props.product.description}</p>
                <button onClick={this.props.handleClick(this.props.product.id)}>Buy</button>
        </div>
    )
    }
}



export default Product