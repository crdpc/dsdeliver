import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        
    
    }, [] );
    return(
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList />
        </div>
    )
}

export default Orders;