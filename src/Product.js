import React from "react"

function Product(props) {
    return (
        <div className="product-list">
            <h3>{props.product.name}</h3>
            <p>Price: {props.product.price}</p>
            <p>description: {props.product.description}</p>
        </div>
    )

}



export default Product