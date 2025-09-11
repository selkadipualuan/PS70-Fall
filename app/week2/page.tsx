"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../../hooks/useAnimationSettings"

export default function Week2Page() {
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5] flex flex-col">
      <motion.header
        className="py-8 md:py-12"
        initial={isAnimationsEnabled ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-[2rem] md:text-[2.5rem] text-center tracking-wide font-['Monument']">
            WEEK 2
          </h1>
        </div>
      </motion.header>

      <main className="flex-1 container mx-auto px-4 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <p className="font-['Times_New_Roman'] italic text-[1.1rem] text-[#f5f5f5]">
            Coming Soon
          </p>
        </div>

        <motion.div
          className="pb-12 flex justify-center"
          whileHover={isAnimationsEnabled ? { scale: 1.05 } : undefined}
          whileTap={isAnimationsEnabled ? { scale: 0.95 } : undefined}
        >
          <Link
            href="/"
            className="bg-[#f5f5f5] text-black px-8 py-3 rounded-md hover:bg-[#e0e0e0] transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            BACK TO PROJECTS
          </Link>
        </motion.div>
      </main>
    </div>
  )
} 