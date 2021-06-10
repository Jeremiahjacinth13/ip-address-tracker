import React from 'react';
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function MapCustom({location}) {

    // React.useEffect(() => {
    //     const L = require('leaflet');

    //     delete L.Icon.Default.prototype._getIconUrl;

    //     L.Icon.Default.mergeOptions({
    //         iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    //         iconUrl: require('leaflet/dist/images/marker-icon.png'),
    //         shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    //     });
    // },[]);

    // const position = [location.lat, location.lng];
    const position = [51.505, -0.09];
    return (
        
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
    )
}

export default MapCustom;
