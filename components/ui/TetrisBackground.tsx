"use client";

import { useReducedMotion } from "framer-motion";

const TETRIS_PIECES = [
  {
    id: 1,
    color: "var(--color-garden-moss)",
    glow: "rgba(140, 197, 126, 0.28)",
    shape: [
      [1, 1],
      [1, 1],
    ],
    x: 10,
    y: 15,
  },
  {
    id: 2,
    color: "var(--color-garden-rust)",
    glow: "rgba(224, 108, 77, 0.28)",
    shape: [[1, 1, 1, 1]],
    x: 50,
    y: 10,
  },
  {
    id: 3,
    color: "var(--color-garden-rust)",
    glow: "rgba(224, 108, 77, 0.24)",
    shape: [[1], [1], [1], [1]],
    x: 5,
    y: 70,
  },
  {
    id: 4,
    color: "var(--color-garden-cream)",
    glow: "rgba(252, 238, 203, 0.26)",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    x: 85,
    y: 5,
  },
  {
    id: 5,
    color: "var(--color-garden-moss)",
    glow: "rgba(140, 197, 126, 0.24)",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    x: 25,
    y: 60,
  },
  {
    id: 6,
    color: "var(--color-garden-rust)",
    glow: "rgba(224, 108, 77, 0.24)",
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    x: 70,
    y: 45,
  },
  {
    id: 7,
    color: "var(--color-garden-cream)",
    glow: "rgba(252, 238, 203, 0.24)",
    shape: [[1], [1], [1], [1]],
    x: 40,
    y: 80,
  },
  {
    id: 8,
    color: "var(--color-garden-moss)",
    glow: "rgba(140, 197, 126, 0.26)",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
    ],
    x: 90,
    y: 65,
  },
];

const FALLING_POSITIONS = [20, 40, 60, 80];

const PIXEL_SPARKLES = [
  { id: 1, x: 12, y: 26, size: 3, color: "var(--color-garden-moss)", delay: 0.6, duration: 8 },
  { id: 2, x: 23, y: 13, size: 2, color: "var(--color-garden-cream)", delay: 1.8, duration: 7.2 },
  { id: 3, x: 31, y: 72, size: 3, color: "var(--color-garden-rust)", delay: 3.2, duration: 9.1 },
  { id: 4, x: 44, y: 34, size: 2, color: "var(--color-garden-cream)", delay: 0.4, duration: 7.6 },
  { id: 5, x: 57, y: 18, size: 3, color: "var(--color-garden-moss)", delay: 2.7, duration: 8.4 },
  { id: 6, x: 68, y: 60, size: 2, color: "var(--color-garden-rust)", delay: 1.3, duration: 7.8 },
  { id: 7, x: 76, y: 38, size: 3, color: "var(--color-garden-cream)", delay: 4.1, duration: 8.8 },
  { id: 8, x: 88, y: 22, size: 2, color: "var(--color-garden-moss)", delay: 2.1, duration: 7.4 },
  { id: 9, x: 92, y: 78, size: 3, color: "var(--color-garden-rust)", delay: 0.9, duration: 8.2 },
];

export function TetrisBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]"
      style={{ opacity: 0.24 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55vw 42vh at 18% 24%, rgba(140,197,126,0.17), transparent 70%), radial-gradient(46vw 36vh at 82% 78%, rgba(224,108,77,0.13), transparent 72%), radial-gradient(35vw 28vh at 62% 16%, rgba(252,238,203,0.09), transparent 75%)",
          mixBlendMode: "screen",
          animation: prefersReducedMotion
            ? undefined
            : "ambient-shift 22s ease-in-out infinite alternate",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(140, 197, 126, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(140, 197, 126, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center",
          animation: prefersReducedMotion
            ? undefined
            : "grid-drift 42s linear infinite",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, rgba(15,16,20,0.2) 55%, rgba(15,16,20,0.46) 100%)",
        }}
      />

      {TETRIS_PIECES.map((piece) => {
        const driftDuration = 13 + piece.id * 1.6;
        const driftDelay = piece.id * 0.37;
        const scale = 0.92 + ((piece.id % 3) * 0.06);
        const tilt = ((piece.id % 5) - 2) * 1.2;

        return (
          <div
            key={piece.id}
            className="absolute"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              filter: `blur(${piece.id % 2 === 0 ? 0.6 : 0.35}px)`,
              transform: `scale(${scale}) rotate(${tilt}deg)`,
              animation: prefersReducedMotion
                ? undefined
                : `piece-drift ${driftDuration}s ease-in-out ${driftDelay}s infinite alternate, piece-glow 5.2s ease-in-out ${driftDelay}s infinite`,
            }}
          >
            {piece.shape.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map(
                  (cell, cellIndex) =>
                    cell === 1 && (
                      <div
                        key={cellIndex}
                        className="w-8 h-8 m-0.5"
                        style={{
                          backgroundColor: piece.color,
                          boxShadow: `
                            inset 2px 2px 4px rgba(255,255,255,0.2),
                            inset -2px -2px 4px rgba(0,0,0,0.3),
                            0 0 10px ${piece.glow}
                          `,
                          border: "1px solid rgba(0,0,0,0.22)",
                        }}
                      />
                    ),
                )}
              </div>
            ))}
          </div>
        );
      })}

      {!prefersReducedMotion &&
        PIXEL_SPARKLES.map((spark) => (
          <div
            key={spark.id}
            className="absolute"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              backgroundColor: spark.color,
              boxShadow: `0 0 8px ${spark.color}`,
              opacity: 0,
              animation: `sparkle ${spark.duration}s ease-in-out ${spark.delay}s infinite`,
            }}
          />
        ))}

      {!prefersReducedMotion &&
        FALLING_POSITIONS.map((pos, idx) => (
          <div
            key={`falling-${idx}`}
            className="absolute"
            style={{
              left: `${pos}%`,
              top: "-20px",
              animation: `fall linear ${15 + idx * 2}s infinite`,
              animationDelay: `${idx * 3}s`,
              animationFillMode: "backwards",
              opacity: 0,
            }}
          >
            <div className="flex flex-col gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6"
                  style={{
                    backgroundColor:
                      idx % 2 === 0
                        ? "var(--color-garden-moss)"
                        : "var(--color-garden-rust)",
                    opacity: 0.45 - i * 0.1,
                    boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        ))}

      <style jsx>{`
        @keyframes ambient-shift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translate3d(1.8%, -1.2%, 0) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes grid-drift {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 120px 60px, 120px 60px;
          }
        }

        @keyframes piece-drift {
          0% {
            transform: translate3d(0, 0, 0) rotate(-1.8deg);
          }
          50% {
            transform: translate3d(6px, -8px, 0) rotate(1.8deg);
          }
          100% {
            transform: translate3d(-4px, 7px, 0) rotate(-1.2deg);
          }
        }

        @keyframes piece-glow {
          0%,
          100% {
            opacity: 0.68;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.7);
          }
          35% {
            opacity: 0.7;
            transform: scale(1);
          }
          60% {
            opacity: 0.2;
            transform: scale(1.25);
          }
        }

        @keyframes fall {
          0% {
            transform: translate3d(0, -110px, 0) rotate(0deg) scale(0.92);
            opacity: 0;
          }
          5% {
            opacity: 0;
          }
          12% {
            opacity: 0.58;
          }
          50% {
            transform: translate3d(10px, 48vh, 0) rotate(90deg) scale(1);
          }
          88% {
            opacity: 0.58;
          }
          100% {
            transform: translate3d(-8px, 100vh, 0) rotate(198deg) scale(0.94);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
