import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

function UseMemo() {
    const [value, setValue] = useState(0);

    const computeResult = (value) => {
        let delayTime = 3000;
        let futureTime = Date.now() + delayTime;
        while (Date.now() < futureTime) {
            // Waiting for till delayTime.
        }

        return value * value;
    }

    const handleUserInput = (event) => {
        setValue(event.target.value);
    }

    const cacheResult = useMemo(() => computeResult(value), [value]);

    return (
        <>
            <input type="text" value={value} onChange={handleUserInput}></input>
            <div>Value: {value}</div>
            <div>Memoized Result: {cacheResult}</div>

        </>
    )
}

export default UseMemo