import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice';



function CounterRedux() {
    // Step: 1
    const count = useSelector((store) => store.counterState.count);

    // Step: 2
    const actions = counterSlice.actions;
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(actions.increment())}>+</button>
            <h3>{count}</h3>
            <button onClick={() => dispatch(actions.decrement())}>-</button>
        </>
    )
}

export default CounterRedux