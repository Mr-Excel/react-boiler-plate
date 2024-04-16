// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/generic.slice.js';

const Counter = () => {
    const counter = useSelector(state => state.generic.value);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </React.Fragment>
    );
};

export default Counter;
