import React from "react"

function Product(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Price: {props.price}</p>
            <p>description: {props.description}</p>
        </div>
    )

}



export default Product