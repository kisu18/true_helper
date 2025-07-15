
import React, { useEffect, useRef } from "react";

export default function Tips() {
  const tipsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, { threshold: 0.3 });

    tipsRef.current.forEach((el) => el && observer.observe(el));
    return () => tipsRef.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  const tips = [
    "Stay in open areas",
    "Use flashlight to signal",
    "Save battery life",
    "Send location to emergency contact",
  ];

  return (
    <div className="container">
      <h2>⚠️ Emergency Tips</h2>
      {tips.map((tip, i) => 
        
        <div key={i} className="tip" ref={(el) => (tipsRef.current[i] = el)}>
          {tip}
        </div>
      )}
    </div>
  );
}
