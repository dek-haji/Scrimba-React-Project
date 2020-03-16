import React from "react"


class Product extends React.Component {


    render(props) {
        return(
        <div className="product-list">
            <h3>{this.props.product.name}</h3>
            <p>Price: {this.props.product.price}</p>
                <p>description: {this.props.product.description}</p>
                <button onClick={this.props.handleClick}>Buy</button>
        </div>
    )
    }
}



export default Product