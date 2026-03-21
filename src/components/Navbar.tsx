"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Photography", path: "/photography" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 lg:px-24 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="pointer-events-auto bg-[#1a1a1a]/80 backdrop-blur-md rounded-full border border-white/10 p-1 flex items-center gap-1 shadow-2xl">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
