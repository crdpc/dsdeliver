import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';


function ProductCard() {
    return(
        <div className="order-card-container">
            <StepsHeaders />
            <ProductsList />
        </div>
    )
}

export default ProductCard;