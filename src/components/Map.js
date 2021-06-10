import React from 'react';
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';


function MapCustom({location}) {
    const position = [location.lat, location.lng];
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                {`This is ${location.city}, ${location.region}, ${location.country}`}
            </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapCustom;
