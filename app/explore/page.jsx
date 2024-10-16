"use client"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Example clinic data (replace with actual data from your backend)
const clinics = [
  { id: 1, name: 'Community Clinic A', lat: 6.5244, lng: 3.3792, description: 'General healthcare services' },
  { id: 2, name: 'City Hospital B', lat: 6.4500, lng: 3.4000, description: 'Emergency and specialized care' },
  { id: 3, name: 'Neighborhood Clinic C', lat: 6.6000, lng: 3.3500, description: 'Primary care and consultations' },
];

// Custom icon for clinics (optional)
const clinicIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [38, 38],
});

const MapLandingPage = () => {
  const [position, setPosition] = useState([6.5244, 3.3792]); // Default position for Lagos, Nigeria

  return (
    <div>
      <header className="hero bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">HealthMap - Find Registered Clinics Near You</h1>
        <p className="mt-4 text-lg">Explore healthcare services in your area, only registered clinics are displayed on the map.</p>
        <a href="#map" className="mt-8 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-full">
          Explore Clinics
        </a>
      </header>

      <main className="container mx-auto my-10 px-4">
        <section id="how-it-works" className="text-center py-10">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4">Use the map to find clinics registered in our platform. Select a region to see available clinics.</p>
        </section>

        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10">
          <div className="feature-item">
            <h3 className="text-2xl font-bold">Nearby Clinics</h3>
            <p>Discover clinics in your vicinity for consultations and healthcare services.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-2xl font-bold">Specialized Care</h3>
            <p>Find specialized hospitals and primary care centers near you.</p>
          </div>
          <div className="feature-item">
            <h3 className="text-2xl font-bold">Map-Based Navigation</h3>
            <p>Use the map to get directions to the nearest clinic.</p>
          </div>
        </section>

        <section id="map" className="h-96 my-10">
          <h2 className="text-3xl font-bold text-center mb-4">Clinic Map</h2>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-96">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {clinics.map((clinic) => (
              <Marker key={clinic.id} position={[clinic.lat, clinic.lng]} icon={clinicIcon}>
                <Popup>
                  <strong>{clinic.name}</strong>
                  <br />
                  {clinic.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} CLINICO. All rights reserved.</p>
      </footer>

      <style jsx>{`
        #map {
          width: 100%;
          height: 400px;
        }
      `}</style>
    </div>
  );
};

export default MapLandingPage;
