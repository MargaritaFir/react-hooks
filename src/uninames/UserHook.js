import React, { useState } from "react";

function useCounter({initialState}) {
    const [count, setCount] = useState(initialState);
    const increment =() => setCount( count + 1);
    const decrement = () => setCount(count - 1);

    return [count, {increment, decrement, setCount}];
}


const HookUsers = () => {
    const [myCount, {increment, decrement}] = useCounter( {initialState: 0})
    return (
        <div>
            <p>{myCount}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default HookUsers;