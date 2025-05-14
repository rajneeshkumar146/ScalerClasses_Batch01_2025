import React, { useRef } from 'react'
import { useState } from 'react'

function StopWatch() {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    const startTime = (timeInSeconds) => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => setTime((prevTimeInSeconds) => prevTimeInSeconds + 1), 1000);
        }

    }

    const stopTime = (timeInSeconds) => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }

    }

    const resetTime = (timeInSeconds) => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0); // reset to 0 seconds.
    }


    const formateTime = (timeInSeconds) => {
        const getSeconds = `0${timeInSeconds % 60}`.slice(-2);

        const minutes = Math.floor(timeInSeconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);

        const hours = Math.floor(timeInSeconds / 3600);
        const getHours = `0${hours}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    }

    return (
        <div>
            <h1>{formateTime(time)}</h1>
            <button onClick={startTime}>Start</button>
            <button onClick={stopTime}>Stop</button>
            <button onClick={resetTime}>Reset</button>
        </div>
    )
}

export default StopWatch