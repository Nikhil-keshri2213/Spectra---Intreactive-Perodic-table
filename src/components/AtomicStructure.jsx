import React from "react";

function distributeElectrons(totalElectrons) {
  const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
  const shells = [];
  let remaining = totalElectrons;

  for (let cap of shellCapacities) {
    if (remaining <= 0) break;
    const electronsInShell = Math.min(remaining, cap);
    shells.push(electronsInShell);
    remaining -= electronsInShell;
  }
  return shells;
}

const AtomicStructure = ({ electrons }) => {
  const shells = distributeElectrons(electrons);
  const radiusStep = 30;
  const baseNucleusRadius = 20;
  const center = 150;
  const maxRadius = shells.length * radiusStep + 40;
  const availableSpace = 120;
  const scale = availableSpace / maxRadius;

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      className="mx-auto mt-6"
    >
      <g
        transform={`scale(${scale}) translate(${
          (1 / scale - 1) * center
        }, ${(1 / scale - 1) * center})`}
      >
        {/* Nucleus */}
        <circle cx={center} cy={center} r={baseNucleusRadius} fill="orange" />

        {/* Shells + electrons */}
        {shells.map((electronCount, shellIndex) => {
          const radius = (shellIndex + 1) * radiusStep + 40;

          return (
            <g key={shellIndex}>
              {/* Orbit */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                stroke="white"
                fill="none"
                strokeOpacity="0.5"
              />

              {/* Rotating group of electrons */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${center} ${center}`}
                  to={`360 ${center} ${center}`}
                  dur={`${10 + shellIndex * 2}s`}
                  repeatCount="indefinite"
                />

                {Array.from({ length: electronCount }).map((_, i) => {
                  const angle = (i / electronCount) * 2 * Math.PI;
                  const x = center + radius * Math.cos(angle);
                  const y = center + radius * Math.sin(angle);

                  return <circle key={i} cx={x} cy={y} r="5" fill="cyan" />;
                })}
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default AtomicStructure;
