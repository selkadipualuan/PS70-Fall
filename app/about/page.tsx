"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../hooks/useAnimationSettings"
import Image from "next/image"

export default function AboutPage() {
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <motion.header
        className="py-8 md:py-12"
        initial={isAnimationsEnabled ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-[2rem] md:text-[2.5rem] text-center tracking-wide font-['Monument']">
            ABOUT
          </h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          className="max-w-3xl mx-auto space-y-12"
          initial={isAnimationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/alexandme.jpg"
              alt="Profile Image" 
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">BACKGROUND</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              I’m Said El Kadi, a Senior in Winthrop studying Math and Economics! This is my first engineering class and I'm incredibly passionate about the intersection of sports and technology! I’ve had the opportunity to work at the Olympics and most recently at TikTok :) Beyond work, I’m a committed triathlete, hiker, and salsa teacher!
 </p>

            <p className="text-[#e0e0e0] leading-relaxed text-lg">
The biggest learning curve so far has definitely been getting this website up and running—but I’m excited about the process, the experimentation, and the opportunity this class offers to learn by building.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">VISION</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              I’m excited to use this class as a playground to test weird ideas, push creative boundaries, and build things that might not always be the most utilitarian—but will definitely be memorable and vibe-ey!
            </p>
          </section>

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