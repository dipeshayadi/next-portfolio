"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Initial render when images load
  useEffect(() => {
    if (images.length > 0) {
      // Ensure the first image is fully loaded before drawing
      if (images[0].complete) {
        renderFrame(0);
      } else {
        images[0].onload = () => renderFrame(0);
      }
    }
    
    const handleResize = () => {
      if (canvasRef.current) {
        // Set canvas internal resolution to window size to prevent blurring
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // re-render current frame
        const currentIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        renderFrame(currentIndex);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once to set initial size
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // The scroll progress of the 500vh container is mapped 0 to 1
    // The overlay is also doing this
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT)) // Ensure it doesn't drop below 0
    );
    renderFrame(frameIndex);
  });

  return (
    <div className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
        />
      </div>
    </div>
  );
}
