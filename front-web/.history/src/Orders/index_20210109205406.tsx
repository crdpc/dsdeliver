import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))           
    }, [] );
    
    return(
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList />
        </div>
    )
}

export default Orders;