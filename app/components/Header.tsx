"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../hooks/useAnimationSettings"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-30 backdrop-blur-sm ${
        scrolled ? "bg-black/80 shadow-md py-2" : "bg-transparent py-2"
      }`}
      initial={false}
      animate={{
        y: scrolled ? 0 : 0,
        opacity: 1,
      }}
      transition={transition}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-[1.59rem] md:text-[2rem] text-center text-[#f5f5f5] tracking-wide font-['Monument']"
          initial={isAnimationsEnabled ? { opacity: 0, y: -20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          PROJECTS
        </motion.h1>
      </div>
    </motion.header>
  )
}

