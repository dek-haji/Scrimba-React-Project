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
        setInterval(() => {
        setCount(prevCount => prevCount + 1)
        }, 1000)
    }, [])
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}


export default Meme
