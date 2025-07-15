
import React, { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const conn = navigator.connection;
    if (conn) {
      setStatus({
        type: conn.effectiveType,
        downlink: conn.downlink,
      });

      const update = () =>
        setStatus({ type: conn.effectiveType, downlink: conn.downlink });

      conn.addEventListener("change", update);
      return () => conn.removeEventListener("change", update);
    }
  }, []);

  return status ? (
    <div className="card">
      <h3>Network Info</h3>
      <p>Type: {status.type}</p>
      <p>Speed: {status.downlink} Mbps</p>
      <span className={status.downlink < 1.5 ? "badge poor" : "badge good"}>
        {status.downlink < 1.5 ? "Poor Network" : "Good Network"}
      </span>
    </div>
  ) : (
    <p>Checking network...</p>
  );
}
