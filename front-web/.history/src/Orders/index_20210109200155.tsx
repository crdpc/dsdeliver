import { useEffect } from 'react';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';

function Orders() {
    useEffect(() => {
        console.log ('Components starts');
    
    }, [] );
    return(
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList />
        </div>
    )
}

export default Orders;