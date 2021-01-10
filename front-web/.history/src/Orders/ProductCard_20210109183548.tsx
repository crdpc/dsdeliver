import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';


function ProductCard() {
    return(
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList />
        </div>
    )
}

export default ProductCard;