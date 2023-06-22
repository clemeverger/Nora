'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const FramerMotionWrapper = ({ children }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default FramerMotionWrapper
