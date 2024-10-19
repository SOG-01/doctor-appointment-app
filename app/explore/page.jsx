{/*"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // For dynamically importing Leaflet (avoiding Next.js SSR issues)
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ClinicMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [clinics, setClinics] = useState([
    // Example clinic data with types (registered vs. known)
    { id: 1, name: "Registered Clinic 1", lat: 40.7128, lng: -74.0060, type: "registered" },
    { id: 2, name: "Known Clinic 1", lat: 40.7328, lng: -73.9960, type: "known" }
  ]);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  // Function to get directions using OpenRouteService API
  const getDirections = async (destinationLat, destinationLng) => {
    const apiKey = 'YOUR_OPENROUTESERVICE_API_KEY';
    const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userLocation[1]},${userLocation[0]}&end=${destinationLng},${destinationLat}`);
    const data = await response.json();
    // Use the data to display route (can integrate with Leaflet polyline for route)
    console.log(data);
  };

  if (!userLocation) return <p>Loading...</p>;

  return (
    <MapContainer center={userLocation} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for user's location */}
    {/* <Marker position={userLocation}>
        <Popup>You are here</Popup>
      </Marker>*/}

      {/* Clinic Markers */}
      {/*{clinics.map(clinic => (
        <Marker key={clinic.id} position={[clinic.lat, clinic.lng]}>
          <Popup>
            <div>
              <h3>{clinic.name}</h3>
              {clinic.type === 'registered' ? (
                <button onClick={() => alert('Booking appointment for ' + clinic.name)}>Book Appointment</button>
              ) : (
                <button onClick={() => getDirections(clinic.lat, clinic.lng)}>Get Directions</button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
*/}