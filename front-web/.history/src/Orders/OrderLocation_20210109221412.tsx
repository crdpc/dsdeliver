
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = {
    lat: 51.505,
    lng:  -0.09
}

function OrderLocation() {
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title"> Selecione onde o pedido dever ser entregue:
                </h3>
                <div className="filter-container">

                </div>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default OrderLocation;