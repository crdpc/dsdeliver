import { ReactComponent as Pizza } from './pizza'
function ProductCard() {
    return(
        <div className="orders-card-container">
            <h3 className="order-card-title">
                Pizza Calabresa
            </h3>
            <Pizza className="order-card-image" />

        </div>
    )
}

export default ProductCard;