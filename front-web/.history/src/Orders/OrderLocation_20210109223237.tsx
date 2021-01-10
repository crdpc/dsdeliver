
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Select from  'react-select';

const position = {
    lat: 52.478792,
    lng: 13.3093035
}

function OrderLocation() {
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title"> Selecione onde o pedido dever ser entregue:
                </h3>
                <div className="filter-container">

                </div>
                <MapContainer center={position} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Meu local marcado <br /> Aqui que é para entregar o rango 
                    </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default OrderLocation;