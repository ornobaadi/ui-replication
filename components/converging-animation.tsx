"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Center of the composition as fractions of the usable area
const CENTER_X = 0.50
const CENTER_Y = 0.42

// Padding (px) kept clear around the sticky viewport so logos never clip edges
const HPAD = 60
const VPAD = 72

// All logo tiles share one size
const TILE_SIZE = 80
const TILE_PAD  = 14

// Extra spread multiplier — logos start this much further from center
const SPREAD = 1.25

interface LogoDef {
  img?: string
  imgAlt?: string
  /** Small caption rendered below the tile */
  captionBelow?: string
  bg: string
  /** Position as fraction of usable area (0‥1) */
  x: number
  y: number
  /** Perpendicular offset for the bezier control-point */
  curve?: number
  /** Custom render key for special logos */
  custom?: "salesforce" | "nice"
}

const LOGOS: LogoDef[] = [
  { custom: "nice",                                                                                               bg: "#ffffff", x: 0.205, y: 0.155, curve:  65 },
  { img: "https://framerusercontent.com/images/w89lnPXzPq5HLEB0pb8G6N0zqVc.png", imgAlt: "Arrow logo",          bg: "#ffffff", x: 0.430, y: 0.115, curve: -55 },
  { img: "https://framerusercontent.com/images/qMGqgg7fcxVsSfRvUYFbfZ1fVxE.png", imgAlt: "Latitude",            bg: "#ffffff", x: 0.572, y: 0.115, captionBelow: "Latitude", curve: 35 },
  { img: "https://framerusercontent.com/images/ya1Ki8apcD5chKEopqTgx0v2OU.png",  imgAlt: "Dots icon",           bg: "#ffffff", x: 0.793, y: 0.155, curve: -75 },
  { img: "https://framerusercontent.com/images/AmY95qWYEiJlJGQeMmeBeLZKF4.png",  imgAlt: "Green E",             bg: "#3DBE8B", x: 0.268, y: 0.395, curve:  55 },
  { img: "https://framerusercontent.com/images/ImqjsWOEttlFkvAaymtXxTaaDf0.png", imgAlt: "Blue stripes",        bg: "#1A5BD6", x: 0.816, y: 0.390, curve: -60 },
  { custom: "salesforce",                                                                                         bg: "#00A1E0", x: 0.298, y: 0.558, curve: -48 },
  { img: "https://framerusercontent.com/images/mPdjsbMyHYgUqRGovzpmzpE64.png",    imgAlt: "Polly logo",          bg: "#ffffff", x: 0.254, y: 0.710, curve:  65 },
  { img: "https://framerusercontent.com/images/ya1Ki8apcD5chKEopqTgx0v2OU.png",   imgAlt: "Fiserv",              bg: "#ffffff", x: 0.520, y: 0.780, curve: -42 },
  { img: "https://framerusercontent.com/images/FvajenQKWnoU1A42FCA09d9I3g.png",   imgAlt: "Zigzag logo",         bg: "#ffffff", x: 0.774, y: 0.710, curve:  58 },
]

// ── Inline logo renders ──────────────────────────────────────────────────────

function NiceLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-2">
      <span
        className="font-black tracking-tight leading-none select-none"
        style={{ fontSize: 22, color: "#000000", fontFamily: "system-ui, sans-serif" }}
      >
        NICE
        <sup style={{ fontSize: 9, verticalAlign: "super" }}>®</sup>
      </span>
    </div>
  )
}

function SalesforceLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-1 px-3">
      {/* simplified cloud silhouette */}
      <svg viewBox="0 0 56 26" className="w-10 h-4.5" fill="none">
        <path
          d="M20 24H8C4.7 24 2 21.3 2 18C2 14.8 4.5 12.2 7.7 12C7.6 11.5 7.5 11 7.5 10.5C7.5 7.5 9.9 5 12.9 5C14.4 5 15.7 5.6 16.7 6.5C18.3 3.8 21.3 2 24.7 2C30.1 2 34.5 6.4 34.5 11.8C34.5 12 34.5 12.2 34.4 12.4C34.9 12.3 35.4 12.2 36 12.2C39.9 12.2 43 15.3 43 19.2C43 23.1 39.9 26 36 26H20V24Z"
          fill="white"
          opacity="0.96"
        />
      </svg>
      <span
        className="font-semibold leading-none select-none"
        style={{ fontSize: 8.5, color: "#ffffff", letterSpacing: "0.01em" }}
      >
        salesforce
      </span>
    </div>
  )
}

// ── Tile component ───────────────────────────────────────────────────────────

function LogoTile({ logo }: { logo: LogoDef }) {
  const imgSize = TILE_SIZE - TILE_PAD * 2

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: TILE_SIZE,
          height: TILE_SIZE,
          background: logo.bg,
          borderRadius: 8,
          boxShadow:
            "0 2px 16px 0 rgba(80,100,180,0.12), 0 1px 3px 0 rgba(0,0,0,0.06)",
          border: "1.5px solid rgba(255,255,255,0.90)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {logo.custom === "nice"        && <NiceLogo />}
        {logo.custom === "salesforce"  && <SalesforceLogo />}
        {!logo.custom && logo.img && (
          <Image
            src={logo.img}
            alt={logo.imgAlt ?? ""}
            width={imgSize}
            height={imgSize}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        )}
      </div>
      {logo.captionBelow && (
        <span
          className="text-xs font-medium select-none"
          style={{ color: "#6b7ca8", letterSpacing: "0.01em" }}
        >
          {logo.captionBelow}
        </span>
      )}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function ConvergingAnimation() {
  const [progress, setProgress] = useState(0)
  const [size, setSize]         = useState({ w: 0, h: 0 })
  const sectionRef              = useRef<HTMLDivElement>(null)
  const innerRef                = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      if (innerRef.current)
        setSize({ w: innerRef.current.offsetWidth, h: innerRef.current.offsetHeight })
    }
    update()
    const ro = new ResizeObserver(update)
    if (innerRef.current) ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY
      // start animating only once the section top reaches the viewport top
      const p   = Math.max(0, Math.min((window.scrollY - top) / 520, 1))
      setProgress(p)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scatter       = 1 - progress          // 1 = scattered (reference), 0 = converged
  const effW          = Math.max(0, size.w - 2 * HPAD)
  const effH          = Math.max(0, size.h - 2 * VPAD)
  const cx            = HPAD + CENTER_X * effW
  const cy            = VPAD + CENTER_Y * effH

  const textOpacity   = Math.max(0, 1 - progress * 2.4)
  const logoOpacity   = Math.max(0, 1 - Math.max(0, (progress - 0.72) / 0.28))
  const lineOpacity   = Math.max(0, 1 - progress * 1.7)
  const centerOpacity = Math.max(0, (progress - 0.68) / 0.32)

  return (
    <div ref={sectionRef} className="min-h-[200vh] py-20" style={{ background: "#eceef8", fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <div className="h-screen sticky top-0 overflow-hidden" style={{ background: "#eceef8" }}>

        <div ref={innerRef} className="relative w-full h-full">
          {size.w > 0 && (
            <>
              {/* ── Curved dashed connector paths ── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: lineOpacity }}
              >
                {LOGOS.map((logo, i) => {
                  const lx  = cx + (logo.x - CENTER_X) * effW * scatter * SPREAD
                  const ly  = cy + (logo.y - CENTER_Y) * effH * scatter * SPREAD
                  const dx  = cx - lx
                  const dy  = cy - ly
                  const len = Math.hypot(dx, dy)
                  if (len < 2) return null

                  // perpendicular bezier control point
                  const perpX = (-dy / len) * (logo.curve ?? 50) * scatter
                  const perpY = ( dx / len) * (logo.curve ?? 50) * scatter
                  const mx    = (lx + cx) / 2 + perpX
                  const my    = (ly + cy) / 2 + perpY

                  return (
                    <path
                      key={i}
                      d={`M ${lx} ${ly} Q ${mx} ${my} ${cx} ${cy}`}
                      stroke="#b8c0dc"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  )
                })}
              </svg>

              {/* ── Logo tiles ── */}
              {LOGOS.map((logo, i) => {
                const lx = cx + (logo.x - CENTER_X) * effW * scatter * SPREAD
                const ly = cy + (logo.y - CENTER_Y) * effH * scatter * SPREAD

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: lx,
                      top:  ly,
                      transform: "translate(-50%, -50%)",
                      opacity: logoOpacity,
                      willChange: "transform, opacity",
                    }}
                  >
                    <LogoTile logo={logo} />
                  </div>
                )
              })}
            </>
          )}

          {/* ── Center text (visible when scattered) ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none select-none"
            style={{ opacity: textOpacity }}
          >
            <h2
              className="leading-tight mb-7"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
                fontWeight: 700,
                color: "#111c52",
                letterSpacing: "-0.02em",
              }}
            >
              One platform,
              <br />
              unlimited integrations
            </h2>
            <button
              className="pointer-events-auto group relative flex items-center rounded-sm font-semibold overflow-hidden cursor-pointer"
              style={{
                fontSize: 14,
                padding: "12px 10px 12px 20px",
                background: "#1a2fd4",
                color: "#ffffff",                border: "2px solid #1a2fd4",                boxShadow: "0 2px 14px 0 rgba(26,47,212,0.28)",
              }}
            >
              {/* White circle that starts at arrow position and expands to fill the entire button */}
              <span
                className="absolute rounded-full bg-white scale-100 group-hover:scale-[24] transition-transform duration-500 ease-in-out"
                style={{
                  width: 18,
                  height: 18,
                  right: 10,
                  top: "50%",
                  marginTop: -9,
                  transformOrigin: "center",
                  zIndex: 0,
                }}
              />

              {/* Text with flip animation */}
              <span
                className="relative z-10 mr-2 overflow-hidden"
                style={{ height: 20 }}
              >
                {/* Default text — flips up and away on hover */}
                <span
                  className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-hover:rotate-x-90"
                  style={{ color: "inherit", lineHeight: "20px" }}
                >
                  <span className="text-white">View all integrations</span>
                </span>
                {/* Hover text — flips up from below */}
                <span
                  className="block transition-transform duration-500 ease-in-out translate-y-0 -rotate-x-90 group-hover:translate-y-[-100%] group-hover:rotate-x-0"
                  style={{ color: "#1a2fd4", lineHeight: "20px" }}
                  aria-hidden
                >
                  View all integrations
                </span>
              </span>

              {/* Arrow circle */}
              <span
                className="relative z-10 flex items-center justify-center rounded-full bg-white group-hover:bg-transparent transition-[background-color] duration-500 ease-in-out"
                style={{ width: 18, height: 18, flexShrink: 0 }}
              >
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M3.5 1.5L7 5L3.5 8.5"
                    className="transition-[stroke] duration-500 ease-in-out stroke-[#1a2fd4]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* ── Converged single logo (end state) ── */}
          <div
            className="absolute z-20 flex items-center justify-center rounded-lg"
            style={{
              width: 96,
              height: 96,
              background: "#1A2FD4",
              opacity: centerOpacity,
              left: cx,
              top:  cy,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 4px 32px 0 rgba(26,47,212,0.40)",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="19" stroke="white" strokeWidth="2.5" fill="none" />
              <circle cx="26" cy="26" r="7.5" fill="white" />
              <line x1="26" y1="7"  x2="26" y2="45" stroke="white" strokeWidth="1.5" strokeOpacity="0.45" />
              <line x1="7"  y1="26" x2="45" y2="26" stroke="white" strokeWidth="1.5" strokeOpacity="0.45" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}
