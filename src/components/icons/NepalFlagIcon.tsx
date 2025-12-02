import { SVGProps } from "react";

export function NepalFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" {...props}>
      {/* Blue border */}
      <polygon points="0,0 24,17 10,17 24,32 0,32" fill="#003893" />

      {/* Red triangles inside border */}
      <polygon points="1,1 23,16 9,16 23,31 1,31" fill="#DC143C" />

      {/* Crescent moon in upper triangle */}
      <circle cx="8" cy="11" r="2.5" fill="white" />
      <circle cx="8" cy="9.3" r="2.5" fill="#DC143C" />

      {/* White sun in lower triangle */}
      <circle cx="8" cy="25" r="2.5" fill="white" />
      {/* Sun rays */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const x1 = 8 + 2.5 * Math.cos((angle * Math.PI) / 180);
        const y1 = 25 + 2.5 * Math.sin((angle * Math.PI) / 180);
        const x2 = 8 + 4 * Math.cos((angle * Math.PI) / 180);
        const y2 = 25 + 4 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeWidth="0.3"
          />
        );
      })}
    </svg>
  );
}
