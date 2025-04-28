import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middleWare/userMiddleWare';

import userSlice from '../../redux/userSlice';

function UserRedux() {
    // Step: 1
    const { user, isError, isLoading, lookupValue, streamTypedValue } = useSelector((store) => store.userState);

    // step: 2
    const actions = userSlice.actions;
    const dispatch = useDispatch();

    useEffect(() => {
        if (streamTypedValue != null) {
            dispatch(fetchUserMiddleWare(streamTypedValue));
        }
    }, [lookupValue]);



    const heading = <>
        <h2>User Example</h2>
        <input
            type="text"
            value={streamTypedValue}
            onChange={(event) => dispatch(actions.setTypedStreamValues(event.target.value))}
        ></input>
        <button onClick={() => dispatch(actions.setLookupValue(streamTypedValue))}>Send lookup Value</button>
    </>

    if (isLoading) {
        return <>
            {heading}
            <h3>....Loading</h3>
        </>
    }

    if (isError) {
        return <>
            <h3>Error Occured!!</h3>
        </>
    }

    return <>
        {heading}
        <h4>Name: {user.name}</h4>
        <h4>Phone: {user.phone}</h4>
    </>
}

export default UserRedux;