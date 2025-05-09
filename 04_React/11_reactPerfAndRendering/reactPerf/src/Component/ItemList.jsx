import React, { useState } from 'react'
import { useCallback } from 'react';

function ItemList() {
    const [Items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    // const removeItem = (itemToRemove) => {
    //     setItems((prevItems) => prevItems.filter((item) => item != itemToRemove));
    // }

    // 1. If a child component is memoized with React.memo, 
    // passing a newly created function every render will cause it to re-render anyway.
    // 2. useCallback ensures the function reference doesn't change unless necessary.
    // 3. Help you to avoid heavy computation for large DOM trees by avoiding re-redering.
    // 4. In an ideal you will see such code used inside of useEffect or useMemo.
    const removeItem = useCallback((itemToRemove) => {
        setItems((prevItems) => prevItems.filter((item) => item != itemToRemove));
    }, []);

    return (
        <div>
            {Items.map((item) => (
                <div key={item}>
                    {item}
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList