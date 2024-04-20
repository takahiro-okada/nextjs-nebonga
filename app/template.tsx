'use client'
import React from 'react'

const variants = {
  enter: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
