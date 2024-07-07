import React from "react";
import { motion } from "framer-motion";


const FlipLink = ({ children }) => {
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return (
      <motion.button
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-Mont font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-7xl"
        style={{
          lineHeight: 0.8,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.button>
    );
  };

export default FlipLink