"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../../hooks/useAnimationSettings"

export default function WeekPage({ params }: { params: { id: string } }) {
  const { isAnimationsEnabled, transition } = useAnimationSettings()
  const week = parseInt(params.id)

  // Show content only for Week 1
  if (week === 1) {
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
              WEEK {week}
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
                src={`/placeholder.svg?height=600&width=800&text=WEEK+${week}+IMAGE`}
                alt={`Week ${week} Assignment`}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
              />
            </div>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">ASSIGNMENT DETAILS</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                Detailed description of the Week {week} assignment.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">PROCESS</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                Detailed explanation of your process and methodology.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">OUTCOME</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                Description of the final results and learnings.
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
    );
  }

  // Keep "Coming Soon" for all other weeks
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
            WEEK {week}
          </h1>
        </div>
      </motion.header>

      <main className="flex-1 container mx-auto px-4 flex flex-col">
        {/* Hidden content */}
        <div className="opacity-0 invisible absolute">
          <motion.div
            className="max-w-3xl mx-auto space-y-12"
          >
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=600&width=800&text=WEEK+${week}+IMAGE`}
                alt={`Week ${week} Assignment`}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
              />
            </div>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">ASSIGNMENT DETAILS</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                DETAILED DESCRIPTION OF THE WEEK {week} ASSIGNMENT.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">PROCESS</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                DETAILED EXPLANATION OF YOUR PROCESS AND METHODOLOGY.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[1.5rem] font-['Monument']">OUTCOME</h2>
              <p className="text-[#e0e0e0] leading-relaxed text-lg">
                DESCRIPTION OF THE FINAL RESULTS AND LEARNINGS.
              </p>
            </section>
          </motion.div>
        </div>

        {/* Coming Soon message */}
        <div className="flex-1 flex items-center justify-center">
          <p className="font-['Times_New_Roman'] italic text-[1.1rem] text-[#f5f5f5]">
            Coming Soon
          </p>
        </div>

        {/* Back button */}
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