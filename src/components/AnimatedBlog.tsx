"use client";
import { useEffect, useRef } from "react";

// Responsive Animated Irregular Blob inside a Smaller Purple Circle
export default function AnimatedBlob() {
  const blobRef = useRef<SVGPathElement>(null);
  const SVG_SIZE = 320;
 
  const CIRCLE_RADIUS = 0.32 * SVG_SIZE; // reduced from 0.45
  const BLOB_RADIUS = 0.18 * SVG_SIZE;   // keep blob smaller accordingly
  const ORBIT_RADIUS = 0.07 * SVG_SIZE;
  const CENTER = SVG_SIZE / 2;

  useEffect(() => {
    let req: number;
    let t = 0;
 function animate() {
  const points = 60; // higher points for smoothness
  const angleStep = (2 * Math.PI) / points;
  const blobPath = [];

  for (let i = 0; i < points; i++) {
    const ang = i * angleStep;

    // Radial modulation: closer to 1 at outer edge, 0 near center
    const modulation = 0.5 + 0.5 * Math.sin(i * angleStep); // smooth blend
    const smoothFactor = Math.pow(Math.sin(i * angleStep / 2), 2); // smooth ease-in/out

    const irregularOffset =
      0.12 * BLOB_RADIUS * Math.sin(t + i * 1.5) * smoothFactor +
      0.08 * BLOB_RADIUS * Math.cos(t * 0.7 + i * 2.3) * smoothFactor +
      0.04 * BLOB_RADIUS * Math.sin(t * 0.2 + i * 3.1) * smoothFactor;

    const rad = BLOB_RADIUS + irregularOffset;

    const x = CENTER + rad * Math.cos(ang);
    const y = CENTER + rad * Math.sin(ang);

    blobPath.push(`${i === 0 ? 'M' : 'L'}${x},${y}`);
  }

  blobPath.push('Z');

  const orbAngle = t * 2.2;
  const tx = ORBIT_RADIUS * Math.cos(orbAngle);
  const ty = ORBIT_RADIUS * Math.sin(orbAngle);

  if (blobRef.current) {
    blobRef.current.setAttribute('d', blobPath.join(' '));
    blobRef.current.setAttribute('transform', `translate(${tx},${ty})`);
  }

  t += 0.013;
  req = requestAnimationFrame(animate);
}


    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, [CENTER, BLOB_RADIUS, ORBIT_RADIUS]);

  return (
    <div className="w-full flex items-center justify-center min-h-[180px] sm:min-h-[240px] md:min-h-[320px]">
      <div className="w-[65vw] max-w-[340px] min-w-[140px] aspect-square">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className="block"
        >
          {/* Smaller purple circle with glow */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={CIRCLE_RADIUS}
            fill="url(#purpleGradient)"
            filter="url(#glow)"
          />
          {/* Irregular animated blob */}
          <path
            ref={blobRef}
            fill="url(#blobGreenGray)"
            opacity={1}
            style={{ transition: "filter 0.3s" }}
            filter="url(#blobBlur)"
          />
          <defs>
            {/* Purple radial gradient for circle */}
            <radialGradient id="purpleGradient" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#E77CFF" />
              <stop offset="70%" stopColor="#6C1AFF" />
              <stop offset="100%" stopColor="#3a036c" />
            </radialGradient>
            {/* Blob gradient (green and gray mix, bright center and green edge) */}
           <radialGradient id="blobGreenGray" cx="40%" cy="60%" r="80%">
  <stop offset="0%" stopColor="#CEC9C9" stopOpacity="0.96" />
  <stop offset="60%" stopColor="#6FBF73" stopOpacity="0.7" />
  <stop offset="100%" stopColor="#3FA738" stopOpacity="0.4" />
</radialGradient>

            {/* Glow filter */}
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Soft blur for blob */}
            <filter id="blobBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}