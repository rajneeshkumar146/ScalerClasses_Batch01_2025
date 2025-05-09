import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count, changeCount] = useState(0);

    let increment = () => {
        changeCount(count + 1);
    }

    let decrement = () => {
        changeCount(count - 1);
    }

    return (
        <>
            <button onClick={increment}>+</button>
            <p> Count: {count} </p>
            <button onClick={decrement}>-</button>

        </>
    )
}

export default Counter