"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components to avoid Next.js SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// LatLngTuple type for Leaflet coordinates (exactly 2 elements: [lat, lng])
export default function ClinicMap() {
  // Default to Lokoja, Kogi State as [latitude, longitude]
  const [userLocation, setUserLocation] = useState<[number, number]>([7.800346, 6.739417]); 

  const [clinics, setClinics] = useState<{ 
    id: number; 
    name: string; 
    lat: number; 
    lng: number; 
    type: 'registered' | 'known'; 
  }[]>([
    { id: 1, name: "Registered Clinic - Lokoja", lat: 7.802574, lng: 6.734051, type: "registered" },
    { id: 2, name: "Known Clinic - Lokoja", lat: 7.796524, lng: 6.733493, type: "known" }
  ]);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]); // Set as tuple [lat, lng]
      });
    }
  }, []);

  // Function to get directions using OpenRouteService API
  const getDirections = async (destinationLat: number, destinationLng: number) => {
    const apiKey = 'YOUR_OPENROUTESERVICE_API_KEY';
    const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userLocation[1]},${userLocation[0]}&end=${destinationLng},${destinationLat}`);
    const data = await response.json();
    // Use the data to display route (can integrate with Leaflet polyline for route)
    console.log(data);
  };

  if (!userLocation) return <p>Loading...</p>;

  return (
    <MapContainer center={userLocation} zoom={14} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for user's location */}
      <Marker position={userLocation}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Clinic Markers */}
      {clinics.map(clinic => (
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
