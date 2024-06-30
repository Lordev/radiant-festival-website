"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customMarkerIcon = L.icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

export default function LeafletMap() {
    return (
        <MapContainer
            center={[52.3216, 4.857486]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-full w-full object-cover z-20"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a> contributors'
                url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0b0d047b403f4955a8bc6e9b91aa3cc2"
            />
            <Marker position={[52.3216, 4.857486]} icon={customMarkerIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
