const handleIncrease = () => {
    
}

function Counter () {
    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button>Decrementar</button>
            <h1>Valor do contador: 0 </h1>
        </div>
    )
}

export default Counter