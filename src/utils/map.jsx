"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Center at some default coordinates
const center = { lat: 6.469491, lng: 7.474821 }; // NYC

export const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError)
    return (
      <p className="flex justify-center items-center h-[500px]">
        Error loading maps
      </p>
    );
  if (!isLoaded)
    return (
      <p className="flex justify-center items-center h-[500px]">
        Loading map…
      </p>
    );

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Example marker */}
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};