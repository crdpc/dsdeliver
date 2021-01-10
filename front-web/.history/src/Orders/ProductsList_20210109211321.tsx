import ProductCard from "./ProductCard";
import { Product } from './types';

type Props = {
    products: Product[]; 
}

function ProductsList({ products }: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductsList;