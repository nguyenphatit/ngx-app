"use client"

import { motion } from "motion/react";

export default function HeaderGradient() { 
  return (
    <div className="opacity-80 pointer-events-none absolute top-0 left-0 right-0 w-full">
      <div className="blur-2xl -translate-y-[30%] min-h-[100svh] overflow-hidden relative">
        <motion.div
          initial={{ x: "-20%", y: "-55%" }}
          animate={{ x: ["-30%", "-10%", "-50%", "-10%", "-30%"], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute left-0 aspect-square w-full rounded-full bg-[radial-gradient(circle,_#4285f4_0%,_rgba(66,_133,_244,_0)_70%)] mix-blend-plus-lighter" />
        <motion.div
          initial={{ x: "-50%", y: "-60%" }}
          animate={{ x: ["-50%", "-30%", "-70%", "-30%", "-50%"], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute left-[55%] aspect-square w-full rounded-full bg-[radial-gradient(circle,_rgba(234,_67,_53,_0.8)_0%,_rgba(234,_67,_53,_0)_70%)] mix-blend-plus-lighter" />
        <motion.div
          initial={{ x: "-69%", y: "-69%" }}
          animate={{ x: ["-50%", "-30%", "-70%", "-50%"], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute left-[77%] aspect-square w-full rounded-full bg-[radial-gradient(circle,_rgba(253,_214,_99,_0.8)_0%,_rgba(253,_214,_99,_0)_70%)] mix-blend-plus-lighter" />
        <motion.div 
          initial={{ x: "-40%", y: "-70%" }}
          animate={{ x: ["-40%", "-20%", "-60%", "-20%", "-40%"], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute left-[85%] aspect-square w-full rounded-full bg-[radial-gradient(circle,_#5ff587_0%,_rgba(95,_245,_135,_0)_70%)] mix-blend-plus-lighter" />
      </div>
    </div>
  )
}