"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAnimationSettings } from "@/hooks/useAnimationSettings"

export default function Week1Page() {
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
            WEEK 1
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
              src={`/Idea-1.png`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROEJCT ONE: ✊ Stress Ball Robot</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              A stress ball robot could be a biofeedback gadget that squeezes itself whenever your heart rate spikes. I’m thinking that a heart rate sensor would feed data to a microcontroller, which triggers motors or actuators to compress the ball. LEDs could glow red when you’re stressed and blue when calm, making it both visual and tactile. 
            </p>
          </section>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={`/Idea-2.png`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROJECT TWO: 🌸 Sound Garden Decorative Piece</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              I would also want to explore a final project that is more of a “decoration piece” or a technical-looking kinetic sculpture. Perhaps I could make laser-cut flowers that open and close to ambient music (and on beat). An audio sensor or input from a microcontroller could maybe map sound frequencies and rhythms to the flowers’ blooming motions, creating a living visualizer. 

            </p>
          </section>


          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={`/Idea-3.png`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROJECT THREE: 👏 Clap for Candy</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              Finally, I was thinking of creating a candy dispenser that is sound-activated and rewards you with a sweet treat when you clap twice. A microphone and simple sound detection circuit could listen for the distinct double-clap pattern, to then trigger a servo motor to open a chute and release a piece of candy.
            </p>
          </section>

                    <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">Other Ideas</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              Also, I play piano for a few hours a day, mostly improvising with chords, so I’ve also been wondering if I could build a machine that displays chords as I play them — either visually on a screen or through a fun physical output (though I have no developed idea for this yet!)
Regardless, my bottom line is I definitely want to make something interactive, endearing, and fun to share with friends (or even bring to a dinner party).
Photos courtesy of ChatGPT :)

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