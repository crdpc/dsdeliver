import { useState } from "react";

const handleIncrease = () => {
console.log('incrementar');
}

const handleDecrease = () => {
console.log('decrementar');
}

function Counter () {
        const [counter, setCounter] = useState(0);
    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h1>Valor do contador: 0 </h1>
        </div>
    )
}

export default Counter