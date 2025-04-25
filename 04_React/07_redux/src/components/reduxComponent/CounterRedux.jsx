import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../../redux/counterSlice';

function CounterRedux() {
    // getter
    const count = useSelector((store) => 
                  store.counterState.count);

    // setter
    const actions = counterSlice.actions;
    const dispatch = useDispatch();

    // Bussiness logic.
    const handleIncrement = () => {
        dispatch(actions.increment());
    }
    const handleDecrement = () => {
        dispatch(actions.decrement());
    }

    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default CounterRedux