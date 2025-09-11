"use client"

export const useAnimationSettings = () => {
  const isAnimationsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === "true"

  return {
    isAnimationsEnabled,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scale: {
      initial: { scale: 0.95 },
      animate: { scale: 1 },
      hover: { scale: 1.05 },
    },
  }
} 