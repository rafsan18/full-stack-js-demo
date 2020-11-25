import React, { useState } from "react";

const Functional = () => {
    const [grossCount, setGrossCount] = useState(0);

    const [incrementCount, setIncrementCount] = useState(0);

    const [decrementCount, setDecrementCount] = useState(0);

    const handleIncrement = () => {
        setGrossCount(grossCount + 1);
        setIncrementCount(incrementCount + 1);
    };

    const handleDecrement = () => {
        setGrossCount(grossCount - 1);
        setDecrementCount(decrementCount + 1);
    };

    return (
        <div>
            <h1>This is a functional component</h1>
            <h2>You Clicked: {grossCount} times</h2>
            <h3>Increment Count: {incrementCount} </h3>
            <h3>Decrement Count: {decrementCount}</h3>

            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
    );
};

export default Functional;
