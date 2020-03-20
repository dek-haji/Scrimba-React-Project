import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor"

function Meme() {
      const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    useEffect(() => {
        setColor(randomcolor())
        setInterval(() => {
            console.log("its working")
        }, 1000);
    }, [count])
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}


export default Meme
