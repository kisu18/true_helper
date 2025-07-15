
import React, { useState } from "react";
import MapPreview from "../components/MapPreview";

export default function Location() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) return alert("Not supported");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });
      },
      (err) => alert("Error: " + err.message)
    );
  };

  const copyToClipboard = () => {
    const text = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    navigator.clipboard.writeText(text);
    alert("Location copied to clipboard!");
  };

  return (
    <div className="container">
      <h2>📍 My Location</h2>
      <button onClick={getLocation}>Get My Location</button>

      {location && (
        <div className="card">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <MapPreview latitude={location.latitude} longitude={location.longitude} />
          <button
            href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{display:"inline-block"}}

          >
            Open in Google Maps
          </button>
          <button style={{marginLeft:"80%",marginTop:"-80px"}}onClick={copyToClipboard}>Copy Location</button>
          <button style={{marginLeft:"80%",marginTop:"40px"}}onClick={()=>{console.log(`Hey I am in danger please help.My location is:\n ${location.latitude},${location.longitude}`);alert('location sent to your console')}}>Find help</button>

        </div>
      )}
    </div>
  );
}
