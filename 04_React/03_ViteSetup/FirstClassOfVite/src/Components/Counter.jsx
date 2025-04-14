import React from 'react'

function COUNTER() {
    let intialState = 0;
    const [count, setCount] = React.useState(intialState);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return <div>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
    </div>

}

export default COUNTER