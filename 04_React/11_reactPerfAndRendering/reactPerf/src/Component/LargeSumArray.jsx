import React, { useState } from 'react'
import { useEffect } from 'react';


const generateLargeArray = () => {
    const largeArray = [];
    for (let i = 0; i < 100000000; i++) {
        largeArray.push(i);
    }
    return largeArray;
}

const sumArray = (arr) => {
    console.log("Calcuating sum....");
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function LargeSumArray() {
    const [count, setCount] = useState(0);


    const largeArray = generateLargeArray();
    const sum = sumArray(largeArray);

    return (
        <div>
            <h1>Sum: {sum}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default LargeSumArray