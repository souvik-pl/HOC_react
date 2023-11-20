import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count + 1);
    }

    return <button onClick={incrementCounter}>Count: {count}</button>;
}

export default Counter;
