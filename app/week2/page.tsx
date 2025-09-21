"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../../hooks/useAnimationSettings"

export default function Week2Page(): JSX.Element {
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

      <main className="flex-1 container mx-auto px-4 flex flex-col gap-12">
        {/* Lab Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Lab — Electricity</h2>
          <p className="mb-4 font-['Times_New_Roman'] italic text-[1.1rem]">
            Working with electricity was incredibly fun and enjoyable. It coincided with
            another class that took us to the engineering lab the day after, so I was
            able to show off my newfound breadboard skills.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Image src="/Week-2/Week2-Lucy.jpeg" alt="Lucy working in lab" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-breadboard.jpeg" alt="Breadboard setup" width={600} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* Fusion 360 Box */}
        <section>
          <h2 className="text-xl font-bold mb-4">Fusion 360 — Box Design</h2>
          <p className="mb-4 font-['Times_New_Roman'] italic text-[1.1rem]">
            For the assignment, I decided to create a simple five-sided box using Fusion
            360. This was really challenging but also exciting. I had to do it manually
            since my device would crash whenever I tried automating the joints, but the
            first print worked and was sufficient. I hope to add some creative twists
            in the future.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Image src="/Week-2/Week2-meinbox.jpeg" alt="Printed box" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-meinlaptop.jpeg" alt="Box design on laptop" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-methroughdesign.jpeg" alt="Me working through design" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-BoxDesign.jpeg" alt="Fusion 360 box model" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-box.jpeg" alt="Finished box" width={600} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* Metal Shop */}
        <section>
          <h2 className="text-xl font-bold mb-4">Metal Shop Training</h2>
          <p className="font-['Times_New_Roman'] italic text-[1.1rem]">
            This week I also went to the metal shop and trained with Alejandro Lopez on
            the tools there. I can see myself coming back in the next few weeks (maybe
            as part of another assignment) to make a metal holder for my sunglasses —
            since I have a lot of them.
          </p>
        </section>

        {/* Additional Items */}
        <section>
          <h2 className="text-xl font-bold mb-4">Extra Projects</h2>
          <p className="mb-4 font-['Times_New_Roman'] italic text-[1.1rem]">
            I also experimented with making a real-size screw and bolt using the thread
            tool, and then tried modeling a LEGO piece. The LEGO project taught me how
            to use the rectangular pattern tool to speed up and automate my design
            process.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Image src="/Week-2/Week2-Lego.jpeg" alt="LEGO piece model" width={600} height={400} className="rounded-lg" />
            <Image src="/Week-2/Week2-Screw.jpeg" alt="Screw and bolt model" width={600} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* Back Button */}
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
