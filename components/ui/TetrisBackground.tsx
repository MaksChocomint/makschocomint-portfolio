"use client";
export function TetrisBackground() {
  const tetrisPieces = [
    {
      id: 1,
      color: "var(--color-garden-moss)",
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
      shape: [[1, 1, 1, 1]],
      x: 50,
      y: 10,
    },
    {
      id: 3,
      color: "var(--color-garden-rust)",
      shape: [[1], [1], [1], [1]],
      x: 5,
      y: 70,
    },
    {
      id: 4,
      color: "var(--color-garden-cream)",
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
      shape: [[1], [1], [1], [1]],
      x: 40,
      y: 80,
    },
    {
      id: 8,
      color: "var(--color-garden-moss)",
      shape: [
        [1, 1, 1],
        [1, 0, 0],
      ],
      x: 90,
      y: 65,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-20">
      {/* Сетка для тетриса */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(140, 197, 126, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(140, 197, 126, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center",
        }}
      />

      {/* Фигуры тетриса */}
      {tetrisPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-pulse-slow"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            animationDelay: `${piece.id * 0.3}s`,
            filter: "blur(0.5px)",
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
                        inset -2px -2px 4px rgba(0,0,0,0.3)
                      `,
                        border: "1px solid rgba(0,0,0,0.2)",
                      }}
                    />
                  ),
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Падающие блоки */}
      {[20, 40, 60, 80].map((pos, idx) => (
        <div
          key={`falling-${idx}`}
          className="absolute"
          style={{
            left: `${pos}%`,
            top: "-20px",
            animation: `fall linear ${15 + idx * 2}s infinite`,
            animationDelay: `${idx * 3}s`,
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
                  opacity: 0.4 - i * 0.1,
                  boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
