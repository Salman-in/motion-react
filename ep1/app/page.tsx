"use client"
import { easeInOut, motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex h-screen w-screen items-center justify-center bg-neutral-900"
      
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.6) 0.5px, transparent 0px)`,
          backgroundRepeat: "repeat",
          backgroundSize: "20px 20px",
          boxShadow: "black"
        }}>
        
        <motion.button className="group relative bg-black px-8 py-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.7,
          ease: easeInOut
        }}
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          translateX:5,
          translateY:-5,
          width: 150
        }}>
          <span className="group-hover:text-green-500 transition-all duration-300">Hover me!</span>
          <span className="absolute bg-gradient-to-r from-transparent via-green-500 to-transparent bottom-0 h-px inset-x-0 w-3/4 mx-auto"></span>
          <span className="group-hover:opacity-100 opacity-0 absolute bg-gradient-to-r from-transparent via-green-500 to-transparent bottom-0 h-[5px] inset-x-0 w-3/4 mx-auto blur-md transistion-opacity duration-300"></span>
        </motion.button>
      </div>
  );
}