
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
function OrderLocation() {  
   
    return(
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title"> Selecione onde o pedido dever ser entregue:
                </h3>
                <div className="filter-container">

                </div>

            </div>
            
        </div>
    )
}

export default OrderLocation;