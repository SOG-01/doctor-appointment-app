import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function View(){
const [mapStyle, setMapStyle] = useState('osm');
const [userLocation, setUserLocation] = useState<[number, number]>([7.800346, 6.739417]);
const handleMapStyleChange = () => {
  setMapStyle(mapStyle === 'osm' ? 'satellite' : 'osm');
};

return (
  <>
    <button onClick={handleMapStyleChange}>
      Toggle {mapStyle === 'osm' ? 'Satellite' : 'OSM'}
    </button>
    
    <MapContainer center={userLocation} zoom={14} style={{ height: '85vh', width: '100%' }}>
      {mapStyle === 'osm' ? (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      ) : (
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; Esri'
        />
      )}
      {/* Add Markers and Popups */}
    </MapContainer>
  </>
);
}