"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimationSettings } from "../hooks/useAnimationSettings"

export default function Sidebar({ weeks, showAboutMe = false }: { weeks: number[], showAboutMe?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const sidebarVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  }

  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        ...transition,
      },
    }),
    hover: { x: 10 },
  }

  return (
    <>
      <motion.button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#f5f5f5] text-black p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={isAnimationsEnabled ? { scale: 1.05 } : undefined}
        whileTap={isAnimationsEnabled ? { scale: 0.95 } : undefined}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </motion.button>

      <AnimatePresence>
        <motion.aside
          className="fixed inset-y-0 left-0 z-40 w-64 bg-black shadow-lg md:sticky md:top-0 md:h-screen overflow-y-auto border-r border-gray-800"
          variants={sidebarVariants}
          initial={isAnimationsEnabled ? "closed" : false}
          animate={isOpen || !isMobile ? "open" : "closed"}
          transition={transition}
        >
          <nav className="p-6">
            <motion.h2
              className="text-[1rem] mb-6 text-[#f5f5f5] tracking-wide font-['Monument']"
              initial={isAnimationsEnabled ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={transition}
            >
              DIGITAL FABRICATION
            </motion.h2>
            <ul className="space-y-4">
              {showAboutMe && (
                <motion.li
                  variants={linkVariants}
                  initial={isAnimationsEnabled ? "initial" : false}
                  animate="animate"
                  whileHover="hover"
                >
                  <Link
                    href="#about"
                    className="block text-[#e0e0e0] hover:text-[#f5f5f5] transition-colors duration-200 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                </motion.li>
              )}
              {weeks.map((week, i) => (
                <motion.li
                  key={week}
                  custom={i}
                  variants={linkVariants}
                  initial={isAnimationsEnabled ? "initial" : false}
                  animate="animate"
                  whileHover="hover"
                >
                  <Link
                    href={`#week-${week}`}
                    className="block text-[#e0e0e0] hover:text-[#f5f5f5] transition-colors duration-200 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    WEEK {week}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={linkVariants}
                initial={isAnimationsEnabled ? "initial" : false}
                animate="animate"
                whileHover="hover"
              >
                <Link
                  href="/mvp"
                  className="block text-[#e0e0e0] hover:text-[#f5f5f5] transition-colors duration-200 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  MVP
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.aside>
      </AnimatePresence>
    </>
  )
}

