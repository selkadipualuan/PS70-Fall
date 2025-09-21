"use client"

import Image from "next/image"
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
            <Image src="/Week-2/W
