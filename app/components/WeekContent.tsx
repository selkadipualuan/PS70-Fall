"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedCard from "./AnimatedCard"
import { useAnimationSettings } from "../hooks/useAnimationSettings"
import Link from "next/link"

export default function WeekContent({ week }: { week: number }) {
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        ...transition,
      },
    }),
  }

  return (
    <section id={`week-${week}`} className="mt-0 mb-24">
      <AnimatedCard className="bg-[#121212] rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-800">
        <h2 className="text-[2rem] mb-6 text-[#f5f5f5] tracking-wide font-['Monument']">WEEK {week}</h2>
        <div className="space-y-8">
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={week === 1 ? "/weekonetitleimage.jpg" : `/placeholder.svg?height=300&width=400&text=WEEK+${week}+IMAGE`}
              alt={`Week ${week} Assignment`}
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <div>
            <h3 className="text-[1.5rem] mb-3 text-[#f5f5f5] font-['Monument']">
              {week === 1 ? "FINAL PROJECT PROPOSALS" : "ASSIGNMENT TITLE"}
            </h3>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              For this assignment, I created three final project proposals that explore different applications of 3D design, electronics, and microcontroller programming.
            </p>
          </div>

          <div>
            <h4 className="text-[1.26rem] mb-3 text-[#f5f5f5] font-['Monument']">
              {week === 1 ? "PROJECT TITLES" : "KEY TAKEAWAYS"}
            </h4>
            <ul className="space-y-3">
              {[
                "WEB CONTROLLED KINETIC SCULPTURE",
                "IOT-CONTROLLED MINI GREENHOUSE",
                "VISION MODEL-POWERED BINOCULARS"
              ].map((point, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  initial={isAnimationsEnabled ? "hidden" : "visible"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-[#e0e0e0]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#f5f5f5]" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="flex justify-end"
            whileHover={isAnimationsEnabled ? { scale: 1.05 } : undefined}
            whileTap={isAnimationsEnabled ? { scale: 0.95 } : undefined}
          >
            <Link 
              href={`/week${week}`}
              className="bg-[#f5f5f5] text-black px-8 py-3 rounded-md hover:bg-[#e0e0e0] transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              VIEW FULL ASSIGNMENT
            </Link>
          </motion.div>
        </div>
      </AnimatedCard>
    </section>
  )
}

