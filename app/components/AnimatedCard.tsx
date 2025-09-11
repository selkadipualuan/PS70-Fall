"use client"

import { motion } from "framer-motion"
import { useAnimationSettings } from "../hooks/useAnimationSettings"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const { isAnimationsEnabled, fadeInUp, scale, transition } = useAnimationSettings()

  if (!isAnimationsEnabled) {
    return <div className={`${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={transition}
      whileHover="hover"
      variants={scale}
    >
      {children}
    </motion.div>
  )
}

