"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface FloatingElementsProps {
  className?: string
}

export function FloatingElements({ className = "" }: FloatingElementsProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // === Scene Setup ===
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const elements: THREE.Mesh[] = []

    // === Create Tech Rings ===
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.RingGeometry(0.5 + i * 0.4, 0.6 + i * 0.4, 64)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${210 + i * 10}, 70%, 55%)`),
        transparent: true,
        opacity: 0.1 + i * 0.04,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(geometry, material)
      ring.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      )
      ring.rotation.set(Math.random(), Math.random(), Math.random())
      scene.add(ring)
      elements.push(ring)
    }

    // === Create Hexagonal Wireframes ===
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.02, 6)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${180 + i * 5}, 80%, 50%)`),
        wireframe: true,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
      })
      const hex = new THREE.Mesh(geometry, material)
      hex.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6
      )
      hex.rotation.set(Math.random(), Math.random(), Math.random())
      scene.add(hex)
      elements.push(hex)
    }

    // === Animation Loop ===
    const clock = new THREE.Clock()
    const animate = () => {
      const time = clock.getElapsedTime()

      elements.forEach((el, i) => {
        el.rotation.x += 0.001 + i * 0.0003
        el.rotation.y += 0.001 + i * 0.0002

        // Subtle continuous movement (non-random)
        el.position.y += Math.sin(time * 0.3 + i) * 0.0008
        el.position.x += Math.cos(time * 0.2 + i) * 0.0005
      })

      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameRef.current!)
      window.removeEventListener("resize", handleResize)
      elements.forEach((el) => {
        el.geometry.dispose()
        if (Array.isArray(el.material)) {
          el.material.forEach((mat) => mat.dispose())
        } else {
          el.material.dispose()
        }
        scene.remove(el)
      })
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`
        fixed inset-0 z-0 pointer-events-none
        blur-[2px] brightness-75 saturate-50
        ${className}
      `}
    />
  )
}
