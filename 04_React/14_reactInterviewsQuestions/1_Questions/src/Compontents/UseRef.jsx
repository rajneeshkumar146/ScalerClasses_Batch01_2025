import { useEffect, useRef, useState } from 'react'

function FocusInput() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        // Because of useRef I preserve the previous state of count.
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

export default FocusInput