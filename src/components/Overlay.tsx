"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Mapping the 500vh scroll progress (0 to 1) to specific sections
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.5, 0.8], [-50, 50]);

  return (
    <div className="pointer-events-none absolute left-0 top-0 h-[500vh] w-full z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1: Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Dipesh Ayadi
          </h1>
          <p className="text-white/90 font-light drop-shadow text-xl md:text-3xl">
            a student.
          </p>
        </motion.div>

        {/* Section 2: Left Aligned */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute left-6 md:left-24 max-w-lg"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            I build digital<br />experiences.
          </h2>
          <div className="h-1 w-24 bg-white/50 mb-6" />
        </motion.div>

        {/* Section 3: Right Aligned */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute right-6 md:right-24 max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            Bridging design<br />and engineering.
          </h2>
          <div className="h-1 w-24 bg-white/50 mb-6 ml-auto" />
        </motion.div>

      </div>
    </div>
  );
}
