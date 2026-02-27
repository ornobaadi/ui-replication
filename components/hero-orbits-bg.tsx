"use client"

import { useEffect, useRef } from "react"

/**
 * Chargeflow-style hero background:
 * 3 overlapping groups of concentric circles with blue diamond dots orbiting.
 */

interface OrbitGroup {
  cx: number // center x as fraction of width
  cy: number // center y as fraction of height
  rings: {
    radius: number // px, computed at runtime
    radiusFrac: number // fraction of minDim
    particles: {
      angle: number
      speed: number // radians per frame
    }[]
    opacity: number
    lineWidth: number
  }[]
}

export function HeroOrbitsBg({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    // ── Define 3 overlapping orbit groups ──
    // Each group has concentric rings with orbiting diamond particles
    const groupDefs = [
      {
        cx: 0.22, cy: 0.45,
        rings: [
          { radiusFrac: 0.18, particles: 2, opacity: 0.10, lineWidth: 0.7 },
          { radiusFrac: 0.28, particles: 3, opacity: 0.08, lineWidth: 0.6 },
          { radiusFrac: 0.38, particles: 2, opacity: 0.06, lineWidth: 0.5 },
          { radiusFrac: 0.48, particles: 2, opacity: 0.05, lineWidth: 0.4 },
        ],
      },
      {
        cx: 0.50, cy: 0.42,
        rings: [
          { radiusFrac: 0.14, particles: 2, opacity: 0.12, lineWidth: 0.8 },
          { radiusFrac: 0.24, particles: 3, opacity: 0.09, lineWidth: 0.7 },
          { radiusFrac: 0.34, particles: 2, opacity: 0.07, lineWidth: 0.6 },
          { radiusFrac: 0.44, particles: 3, opacity: 0.05, lineWidth: 0.5 },
        ],
      },
      {
        cx: 0.78, cy: 0.45,
        rings: [
          { radiusFrac: 0.16, particles: 2, opacity: 0.10, lineWidth: 0.7 },
          { radiusFrac: 0.26, particles: 2, opacity: 0.08, lineWidth: 0.6 },
          { radiusFrac: 0.36, particles: 3, opacity: 0.06, lineWidth: 0.5 },
          { radiusFrac: 0.46, particles: 2, opacity: 0.05, lineWidth: 0.4 },
        ],
      },
    ]

    // Build runtime orbit groups
    const groups: OrbitGroup[] = groupDefs.map((g) => ({
      cx: g.cx,
      cy: g.cy,
      rings: g.rings.map((r) => ({
        radius: 0,
        radiusFrac: r.radiusFrac,
        particles: Array.from({ length: r.particles }, () => ({
          angle: Math.random() * Math.PI * 2,
          speed: (0.002 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
        })),
        opacity: r.opacity,
        lineWidth: r.lineWidth,
      })),
    }))

    // Diamond drawing helper (rotated 45 deg square)
    const drawDiamond = (x: number, y: number, size: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(Math.PI / 4)
      ctx.fillRect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const minDim = Math.min(width, height)

      for (const group of groups) {
        const gcx = group.cx * width
        const gcy = group.cy * height

        for (const ring of group.rings) {
          ring.radius = ring.radiusFrac * minDim

          // Draw circle ring
          ctx.beginPath()
          ctx.arc(gcx, gcy, ring.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${ring.opacity})`
          ctx.lineWidth = ring.lineWidth
          ctx.stroke()

          // Draw orbiting diamond particles
          for (const p of ring.particles) {
            p.angle += p.speed

            const px = gcx + Math.cos(p.angle) * ring.radius
            const py = gcy + Math.sin(p.angle) * ring.radius

            // Diamond shape — blue fill
            const dSize = 6 + ring.radiusFrac * 8 // slightly bigger on larger rings
            ctx.fillStyle = "#4460F1" // Chargeflow blue
            drawDiamond(px, py, dSize)
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
    </div>
  )
}
