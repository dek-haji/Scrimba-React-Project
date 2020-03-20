import React, {useState } from "react";
import RandomColor from "randomcolor"

function Meme() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <div>
            <h1 style={{RandomColor}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Meme
