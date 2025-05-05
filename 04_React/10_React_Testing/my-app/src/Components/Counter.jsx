import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter