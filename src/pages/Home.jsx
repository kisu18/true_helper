
import React from "react";
import NetworkStatus from "../components/NetworkStatus";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to SafeZone</h1>
      <p>Your emergency assistant when you need it most.</p>
      <NetworkStatus />
    </div>
  );
}
