"use client"

import { useEffect, useRef } from "react"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "0"
    canvas.style.mixBlendMode = "screen"
    canvas.style.opacity = "0.8"

    mountRef.current.appendChild(canvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      type: "circle" | "triangle" | "square"
      rotation: number
      rotationSpeed: number
      pulse: number
      pulseSpeed: number
      trail: Array<{ x: number; y: number; alpha: number }>
    }> = []

    const connections: Array<{
      p1: number
      p2: number
      distance: number
    }> = []

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    let mouseInfluence = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseInfluence = 100
    }

    window.addEventListener("mousemove", handleMouseMove)

    for (let i = 0; i < 80; i++) {
      const types: Array<"circle" | "triangle" | "square"> = ["circle", "triangle", "square"]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 1,
        color: `hsl(${200 + Math.random() * 80}, ${60 + Math.random() * 40}%, ${50 + Math.random() * 30}%)`,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        trail: [],
      })
    }

    let animationId: number
    let time = 0

    const drawParticle = (particle: (typeof particles)[0]) => {
      const { x, y, size, color, type, rotation, pulse } = particle
      const pulsedSize = size + Math.sin(pulse) * 0.5

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      ctx.shadowBlur = 15
      ctx.shadowColor = color
      ctx.fillStyle = color
      ctx.globalAlpha = 0.8 + Math.sin(pulse) * 0.2

      switch (type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, pulsedSize, 0, Math.PI * 2)
          ctx.fill()
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -pulsedSize)
          ctx.lineTo(-pulsedSize * 0.866, pulsedSize * 0.5)
          ctx.lineTo(pulsedSize * 0.866, pulsedSize * 0.5)
          ctx.closePath()
          ctx.fill()
          break
        case "square":
          ctx.fillRect(-pulsedSize, -pulsedSize, pulsedSize * 2, pulsedSize * 2)
          break
      }

      ctx.restore()
    }

    const drawConnections = () => {
      connections.length = 0

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            connections.push({ p1: i, p2: j, distance })
          }
        }
      }

      connections.forEach(({ p1, p2, distance }) => {
        const alpha = ((120 - distance) / 120) * 0.3
        const gradient = ctx.createLinearGradient(particles[p1].x, particles[p1].y, particles[p2].x, particles[p2].y)
        gradient.addColorStop(0, particles[p1].color.replace(")", `, ${alpha})`).replace("hsl", "hsla"))
        gradient.addColorStop(1, particles[p2].color.replace(")", `, ${alpha})`).replace("hsl", "hsla"))

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[p1].x, particles[p1].y)
        ctx.lineTo(particles[p2].x, particles[p2].y)
        ctx.stroke()
      })
    }

    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y, alpha: 1 })
        if (particle.trail.length > 8) {
          particle.trail.shift()
        }

        // Draw trail
        particle.trail.forEach((point, i) => {
          const alpha = (i / particle.trail.length) * 0.3
          ctx.globalAlpha = alpha
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(point.x, point.y, particle.size * 0.3, 0, Math.PI * 2)
          ctx.fill()
        })

        // Mouse interaction
        if (mouseInfluence > 0) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const force = ((150 - distance) / 150) * 0.5
            particle.vx += (dx / distance) * force * 0.1
            particle.vy += (dy / distance) * force * 0.1
          }
        }

        // Update position with wave motion
        particle.x += particle.vx + Math.sin(time + index * 0.1) * 0.2
        particle.y += particle.vy + Math.cos(time + index * 0.1) * 0.2

        // Boundary collision with smooth bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed
        particle.pulse += particle.pulseSpeed

        // Velocity damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        drawParticle(particle)
      })

      drawConnections()

      // Reduce mouse influence over time
      mouseInfluence *= 0.95

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
