import { useState } from "react";

const handleIncrease = () => {
    setCounter(counter + 1);
}

const handleDecrease = () => {
setCounter(counter - 1);
}

function Counter () {
        const [counter, setCounter] = useState(0);
    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h1>Valor do contador: {counter} </h1>
        </div>
    )
}

export default Counter