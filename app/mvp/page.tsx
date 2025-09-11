"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../../hooks/useAnimationSettings"

export default function MVPPage() {
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
            MINIMUM VIABLE PRODUCT
          </h1>
        </div>
      </motion.header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={isAnimationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: "64.90384615384616%" }}>
            <iframe 
              src="https://www.loom.com/embed/5cf9ee8f0c124d3482c6d8f7f5f0195c?sid=91dcdd30-6697-4cbd-ad8e-985ec5301232" 
              frameBorder="0" 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              title="MVP Video"
            />
          </div>

          <motion.div
            className="pt-8 flex justify-center"
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
        </motion.div>
      </main>
    </div>
  )
} 