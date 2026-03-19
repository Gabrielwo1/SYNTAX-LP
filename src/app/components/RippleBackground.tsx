import React from 'react';

export function RippleBackground() {
  // Fewer rings for a calmer effect and better performance
  const rings = Array.from({ length: 7 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#020202]">
      {/* Container positioned to the bottom right - Increased opacity to make it stand out more */}
      <div className="absolute bottom-0 right-0 w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] translate-x-[30%] translate-y-[30%] opacity-90">
        {rings.map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border border-[#67c24e]/60 animate-ripple"
            style={{
              width: '100%',
              height: '100%',
              animationDelay: `${i * 3.5}s`,
              boxShadow: '0 0 60px 4px rgba(103,194,78,0.25), inset 0 0 60px 4px rgba(103,194,78,0.25)',
              opacity: 0
            }}
          />
        ))}
      </div>
      
      {/* Soft masks to blend the waves into the dark background - Adjusted to let more light through */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#020202]/50 to-[#020202] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,transparent_10%,#020202_90%)] z-10" />
      
      <style>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.01);
            opacity: 0;
            border-width: 1px;
          }
          15% {
            opacity: 0.8;
            border-width: 5px;
          }
          50% {
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
            border-width: 1px;
          }
        }
        .animate-ripple {
          /* Very slow, continuous, and linear animation for a calm fluid effect */
          animation: ripple 24.5s linear infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
