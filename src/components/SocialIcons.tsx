"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  { name: "GitHub", url: "https://github.com/dipeshayadi", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dipesh-ayadi10/", icon: <FaLinkedinIn /> },
  { name: "X", url: "https://x.com/DipeshAyadi_77", icon: <FaXTwitter /> },
  { name: "Instagram", url: "https://www.instagram.com/dipeshxettri_7?igsh=ODY0Z2ZpNXZlNXlo", icon: <FaInstagram /> },
];

export default function SocialIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Use requestAnimationFrame for smooth updates
      const updatePosition = () => {
        setMousePos({ x, y });
        animationFrameId = requestAnimationFrame(updatePosition);
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePos({ x: 0, y: 0 }); // Reset position
      cancelAnimationFrame(animationFrameId);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup event listeners and animation frame to prevent memory leaks
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center gap-4 relative py-2"
    >
      {socials.map((social, idx) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 bg-white/5 backdrop-blur-sm transition-colors relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}

      {/* Decorative magnetic hover background effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl bg-white/5 blur-xl"
        animate={{
          x: isHovered ? mousePos.x * 0.2 : 0,
          y: isHovered ? mousePos.y * 0.2 : 0,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </div>
  );
}
