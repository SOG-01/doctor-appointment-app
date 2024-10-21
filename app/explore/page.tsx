"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set up custom icons
const customMarker = new L.Icon({
  iconUrl: "/leaflet-icons/clinicIcon.svg", 
  iconSize: [250, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const userMarkerIcon = new L.Icon({
  iconUrl: "/leaflet-icons/userLocationIcon.svg", // Replace with a user location icon if needed
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

export default function ClinicMap() {
  const [userLocation, setUserLocation] = useState<[number, number]>([7.800346, 6.739417]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]); // Store route

  const clinics = [
    { id: 1, name: "Registered Clinic - Lokoja", lat: 7.802574, lng: 6.734051, type: "registered" },
    { id: 2, name: "Known Clinic - Lokoja", lat: 7.796524, lng: 6.733493, type: "known" },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]); // Set user location
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);


  
  // Function to get directions and plot the route
  const getDirections = async (destinationLat, destinationLng) => {
    const apiKey = '5b3ce3597851110001cf6248e710bc48625e43b38ae09058ce9c53ca'; // Replace with your OpenRouteService API key
    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userLocation[1]},${userLocation[0]}&end=${destinationLng},${destinationLat}`
    );
    const data = await response.json();

    // Extract coordinates from the response (assuming geojson format)
    const coordinates = data.features[0].geometry.coordinates.map((coord:any) => [coord[1], coord[0]]); // Swap [lng, lat] to [lat, lng]
    
    setRouteCoordinates(coordinates); // Set the route to display
  };
  

  return (
    <MapContainer center={userLocation} zoom={14} style={{ height: '85vh', width: '100%' }}>
      <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; Esri'
        />
      
      {/* Marker for user's location */}
      <Marker position={userLocation} icon={userMarkerIcon}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Clinic Markers */}
      {clinics.map((clinic) => (
        <Marker key={clinic.id} position={[clinic.lat, clinic.lng]} icon={customMarker} className=" w-[130px] h-[120px]">
          <Popup>
            <div>
              <h3>{clinic.name}</h3>
              {clinic.type === "registered" ? (
                <div className='flex flex-col'>
                  <button className="mb-2" onClick={() => alert('Booking appointment for ' + clinic.name)}>
                    Book Appointment
                  </button>
                  <button onClick={() => getDirections(clinic.lat, clinic.lng)}>
                    Get Directions
                  </button>
                </div>
              ) : (
                <button onClick={() => getDirections(clinic.lat, clinic.lng)}>Get Directions</button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Route Polyline */}
      {routeCoordinates.length > 0 && (
        <Polyline positions={routeCoordinates} color="blue" />
      )}
    </MapContainer>
  );


}