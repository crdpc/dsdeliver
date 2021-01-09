import './styles.css';


function StepsHeaders() {
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title"></h1>
                SIGA AS <br/> ETAPAS

            </div>
            <ul className="steps-items"> 
                <li>
                    <span className="steps-number">1</span> 
                    Selecione os produtos e a localização.
                </li>
                <li>
                <span className="steps-number">2</span> 
                Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                </li>
            </ul>
        </header>
    )
}

export default StepsHeaders;