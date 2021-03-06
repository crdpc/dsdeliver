import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();


    console.log(products);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))           
    }, [] );
    
    return(
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList products={products} />
            <OrderLocation />
        </div>
    )
}

export default Orders;