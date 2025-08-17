"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // === Scene Setup ===
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // transparent background
    rendererRef.current = renderer

    if (!mount.contains(renderer.domElement)) {
      mount.appendChild(renderer.domElement)
    }

    // === Particle System ===
    const particleCount = 150
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    const colorPalette = [
      new THREE.Color(0.2, 0.6, 1.0),
      new THREE.Color(0.6, 0.2, 1.0),
      new THREE.Color(0.2, 1.0, 1.0),
      new THREE.Color(0.4, 0.8, 1.0),
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      particlePositions[i3] = (Math.random() - 0.5) * 20
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 20
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      particleColors[i3] = color.r
      particleColors[i3 + 1] = color.g
      particleColors[i3 + 2] = color.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // === Decorative Shapes ===
    const shapes: THREE.Mesh[] = []

    // Wireframe cubes
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.6),
        transparent: true,
        opacity: 0.3,
        wireframe: true,
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15)
      scene.add(cube)
      shapes.push(cube)
    }

    // Translucent spheres
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 16, 16)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.8 + Math.random() * 0.2, 0.8, 0.7),
        transparent: true,
        opacity: 0.4,
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12)
      scene.add(sphere)
      shapes.push(sphere)
    }

    // === Animation Loop ===
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate)

      particles.rotation.x += 0.001
      particles.rotation.y += 0.002

      const time = Date.now() * 0.001
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 + index * 0.001
        shape.rotation.y += 0.01 + index * 0.001

        shape.position.y += Math.sin(time + index) * 0.001
        shape.position.x += Math.cos(time * 0.8 + index) * 0.0008
      })

      // Fixed camera position, always looking at the scene center
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // === Handle Resize ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // === Cleanup on Unmount ===
    return () => {
      cancelAnimationFrame(animationFrameId.current!)
      window.removeEventListener("resize", handleResize)

      particleGeometry.dispose()
      particleMaterial.dispose()

      shapes.forEach((shape) => {
        shape.geometry.dispose()
        if (Array.isArray(shape.material)) {
          shape.material.forEach((m) => m.dispose())
        } else {
          shape.material.dispose()
        }
        scene.remove(shape)
      })

      if (rendererRef.current) {
        rendererRef.current.dispose()
        if (rendererRef.current.domElement && mount.contains(rendererRef.current.domElement)) {
          mount.removeChild(rendererRef.current.domElement)
        }
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent", width: "100%", height: "100%" }}
    />
  )
}
