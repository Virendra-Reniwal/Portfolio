"use client"

import { useEffect, useRef } from "react"

export function FloatingElements() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Create floating CSS elements instead of Three.js
    const elements: HTMLDivElement[] = []

    for (let i = 0; i < 8; i++) {
      const element = document.createElement("div")
      element.className = "absolute w-4 h-4 border border-blue-500/20 rounded-full animate-pulse"
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      element.style.animationDelay = `${Math.random() * 3}s`
      element.style.animationDuration = `${2 + Math.random() * 2}s`

      elements.push(element)
      mountRef.current.appendChild(element)
    }

    return () => {
      elements.forEach((element) => {
        if (mountRef.current && element.parentNode) {
          mountRef.current.removeChild(element)
        }
      })
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
