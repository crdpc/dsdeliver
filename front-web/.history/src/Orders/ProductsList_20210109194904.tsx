import ProductCard from "./ProductCard";

function ProductsList() {
    return(
        <div className="order-list-container">
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