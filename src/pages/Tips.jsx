
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
  "🆘 Dial 112: It's the universal emergency number in India and many countries.",
  "📍 Share live location: Use WhatsApp or Maps to share real-time location with trusted contacts.",
  "🔋 Conserve phone battery: Lower brightness, close unused apps, and turn on battery saver.",
  "🚨 Use phone flashlight to signal rescuers at night — 3 long flashes = SOS.",
  "🗺️ Know nearby hospitals & police stations — use Google Maps' offline mode.",
  "🥶 In cold climates, layer clothes and cover extremities to avoid hypothermia.",
  "🔥 In a fire, stay low to the ground to avoid smoke — crawl if needed.",
  "🐍 Bitten by a snake? Stay calm, immobilize the limb, and seek help immediately — don’t suck the venom.",
  "🌊 Caught in a rip current? Swim parallel to the shore, not against the current.",
  "👃 Smell gas? Don’t use electronics or light flames. Exit immediately and call your gas provider or fire dept.",
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
