import React from "react";
import { motion } from "framer-motion";

const shapes = [
  { size: 60, left: "5%", top: "20%", rotation: 45 },
  { size: 40, left: "8%", top: "60%", rotation: 30 },
  { size: 80, right: "5%", top: "30%", rotation: -20 },
  { size: 50, right: "10%", top: "70%", rotation: 15 },
  { size: 70, left: "15%", top: "40%", rotation: 60 },
  { size: 45, right: "15%", top: "45%", rotation: -45 },
  { size: 55, left: "3%", top: "80%", rotation: 25 },
  { size: 65, right: "3%", top: "15%", rotation: -15 },
  { size: 75, left: "12%", top: "25%", rotation: 50 },
  { size: 35, right: "12%", top: "85%", rotation: -35 },
  { size: 85, left: "18%", top: "75%", rotation: 40 },
  { size: 45, right: "18%", top: "5%", rotation: -25 },
];

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        transform: "translateY(calc(var(--scroll) * 0.5))",
      }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            ...shape,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="w-full h-full relative"
            style={{
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            {/* Hexagonal shape */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,0 100,25 100,75 50,100 0,75 0,25"
                  className="fill-none stroke-primary/30 stroke-2"
                />
                {/* Cube projection lines */}
                <line x1="50" y1="0" x2="25" y2="25" className="stroke-primary/30 stroke-2" />
                <line x1="100" y1="25" x2="75" y2="50" className="stroke-primary/30 stroke-2" />
                <line x1="100" y1="75" x2="75" y2="75" className="stroke-primary/30 stroke-2" />
                <line x1="50" y1="100" x2="25" y2="75" className="stroke-primary/30 stroke-2" />
                <line x1="0" y1="75" x2="25" y2="75" className="stroke-primary/30 stroke-2" />
                <line x1="0" y1="25" x2="25" y2="50" className="stroke-primary/30 stroke-2" />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};