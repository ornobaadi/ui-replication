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
  { img: "https://framerusercontent.com/images/qMGqgg7fcxVsSfRvUYFbfZ1fVxE.png", imgAlt: "Latitude",            bg: "#ffffff", x: 0.572, y: 0.115, curve: 35 },
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

function LogoTile({ logo, tileSize, tilePad }: { logo: LogoDef; tileSize: number; tilePad: number }) {
  const imgSize = tileSize - tilePad * 2

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: tileSize,
          height: tileSize,
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
      // Scroll distance = total section height minus one viewport height
      const scrollDistance = Math.max(1, sectionRef.current.offsetHeight - window.innerHeight)
      const p   = Math.max(0, Math.min((window.scrollY - top) / scrollDistance, 1))
      setProgress(p)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Responsive constants derived from container width ──────────────────
  const isMobile = size.w > 0 && size.w < 480
  const isTablet = size.w >= 480 && size.w < 768
  const tileSize  = isMobile ? 54  : isTablet ? 66  : TILE_SIZE
  const tilePad   = isMobile ? 9   : isTablet ? 11  : TILE_PAD
  const hPad      = isMobile ? 12  : isTablet ? 32  : HPAD
  const vPad      = isMobile ? 24  : isTablet ? 48  : VPAD
  const rSpread   = isMobile ? 0.95: isTablet ? 1.15: SPREAD
  // On mobile, shift the composition centre upward so middle-ring logos
  // land above/below the text block rather than overlapping it.
  const rCenterY  = isMobile ? 0.36: isTablet ? 0.40: CENTER_Y

  const scatter       = 1 - progress          // 1 = scattered (reference), 0 = converged
  const effW          = Math.max(0, size.w - 2 * hPad)
  const effH          = Math.max(0, size.h - 2 * vPad)
  const cx            = hPad + CENTER_X * effW
  const cy            = vPad + rCenterY * effH

  // Text stays fully visible while logos converge; fades out as the final center logo fades in
  const textOpacity   = Math.max(0, 1 - Math.max(0, (progress - 0.68) / 0.28))
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
                  const lx  = cx + (logo.x - CENTER_X) * effW * scatter * rSpread
                  const ly  = cy + (logo.y - rCenterY) * effH * scatter * rSpread
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
                const lx = cx + (logo.x - CENTER_X) * effW * scatter * rSpread
                const ly = cy + (logo.y - rCenterY) * effH * scatter * rSpread

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
                    <LogoTile logo={logo} tileSize={tileSize} tilePad={tilePad} />
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
              className="leading-tight"
              style={{
                fontSize: "clamp(1.65rem, 5.5vw, 3.2rem)",
                fontWeight: 700,
                color: "#111c52",
                letterSpacing: "-0.02em",
                marginBottom: isMobile ? 16 : 28,
                paddingLeft: isMobile ? 20 : 0,
                paddingRight: isMobile ? 20 : 0,
              }}
            >
              One platform,
              <br />
              unlimited integrations
            </h2>
            <button
              className="pointer-events-auto group relative flex items-center rounded-sm font-semibold overflow-hidden cursor-pointer"
              style={{
                fontSize: isMobile ? 13 : 14,
                padding: isMobile ? "9px 8px 9px 14px" : "12px 10px 12px 20px",
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

              {/* Text with flip animation — uses .flip-default/.flip-hover CSS classes from globals.css */}
              <span
                className="flip-container relative z-10 mr-2 overflow-hidden"
                style={{ height: 20 }}
              >
                <span
                  className="flip-default block"
                  style={{ color: "#ffffff", lineHeight: "20px" }}
                >
                  View all integrations
                </span>
                <span
                  className="flip-hover block"
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

          {/* ── Converged single logo (end state) — actual Domu icon ── */}
          <div
            className="absolute z-20"
            style={{
              width: 96,
              height: 96,
              opacity: centerOpacity,
              left: cx,
              top:  cy,
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg width="96" height="96" viewBox="0 0 101 101" fill="none">
              <defs>
                <linearGradient id="domu_grad" x1="50.3486" y1="0" x2="50.3486" y2="100.697" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0145F2" />
                  <stop offset="1" stopColor="#0034B8" />
                </linearGradient>
                <clipPath id="domu_clip">
                  <rect width="58" height="58" fill="white" transform="translate(22 22)" />
                </clipPath>
              </defs>
              <rect width="100.697" height="100.697" rx="12" fill="url(#domu_grad)" />
              <rect x="0.5" y="0.5" width="99.697" height="99.697" rx="11.5" stroke="#0021A4" />
              <g clipPath="url(#domu_clip)">
                <path
                  d="M75.6215 39.7455C74.0852 36.2884 72.0105 33.1775 69.3988 30.565C66.7871 27.9534 63.6754 25.841 60.2183 24.3039C56.6851 22.7685 52.8441 22 48.8493 22H42.5497V38.2863H48.1961C50.0401 38.2863 51.6917 38.6325 53.2664 39.3232C54.8411 39.9763 56.1858 40.8595 57.3382 42.0503C58.4906 43.1642 59.3737 44.5089 60.0268 46.0451C60.6799 47.5814 60.9868 49.1945 60.9868 51.0385C60.9868 52.767 60.6791 54.3417 60.0268 55.8395C59.3352 57.3757 58.4521 58.6819 57.2613 59.8728C56.0704 61.0251 54.765 61.9082 53.1895 62.5614C51.6148 63.2145 50.0016 63.5599 48.1961 63.5599H42.5497V79.9992H48.8493C52.8056 79.9992 56.5697 79.2315 60.1037 77.7329C63.5993 76.1967 66.6717 74.1604 69.2842 71.5487C71.9344 68.9362 74.0468 65.8638 75.5453 62.3682C77.12 58.8342 77.8885 55.0701 77.8885 51.1138C77.8885 47.1574 77.1208 43.278 75.6223 39.7439L75.6215 39.7455ZM24.1125 51.0385C24.1125 52.767 24.4203 54.3417 25.0726 55.8395C25.7642 57.3757 26.6473 58.6819 27.8381 59.8728C29.029 61.0251 30.3344 61.9082 31.9099 62.5614C33.4846 63.2145 35.0977 63.5599 36.9032 63.5599H42.5497V38.2863H36.9032C35.0593 38.2863 33.4076 38.6325 31.833 39.3232C30.2583 39.9763 28.9136 40.8595 27.7612 42.0503C26.6088 43.1642 25.7257 44.5089 25.0726 46.0451C24.4195 47.5814 24.1125 49.1945 24.1125 51.0385Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}
