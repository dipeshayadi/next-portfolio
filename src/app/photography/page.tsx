"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";

export default function PhotographyPage() {
  const photos = [
    { id: 1, src: "/images/photography/first.jpg", alt: "Photography 1" },
    { id: 2, src: "/images/photography/second.jpg", alt: "Photography 2" },
    { id: 3, src: "/images/photography/third.jpg", alt: "Photography 3" },
    { id: 4, src: "/images/photography/fourth.jpg", alt: "Photography 4" },
    { id: 5, src: "/images/photography/fifth.jpg", alt: "Photography 5" },
    { id: 6, src: "/images/photography/sixth.jpg", alt: "Photography 6" },
    { id: 7, src: "/images/photography/seventh.jpg", alt: "Photography 7" },
    { id: 8, src: "/images/photography/eight.jpg", alt: "Photography 8" },
    { id: 9, src: "/images/photography/nine.jpg", alt: "Photography 9" },
    { id: 10, src: "/images/photography/ten.jpg", alt: "Photography 10" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <main className="relative w-full bg-[#121212] pt-32 min-h-screen flex flex-col justify-between selection:bg-white/30 selection:text-white">
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Through my <span className="text-white/50 italic">Lens</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl">
            A collection of moments, landscapes, and perspectives captured during my journeys.
          </p>
        </motion.div>

        {/* Masonry Image Gallery */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          {photos.map((photo) => (
            <motion.div 
              key={photo.id} 
              variants={itemVariants} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in"
            >
              {/* Image Overlay (hover effect) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              <Image 
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority={photo.id <= 2} // priority load the top images
              />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
      
      <Footer />
    </main>
  );
}
