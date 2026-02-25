'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import Link from 'next/link';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const MOBILE_NAV_LINKS = [
    { label: 'PRODUCT', href: '#' },
    { label: 'CUSTOMERS', href: '#' },
    { label: 'PRICING', href: '#' },
    { label: 'INTEGRATIONS', href: '#' },
    { label: 'RESOURCES', href: '#' },
    { label: 'COMPANY', href: '#' },
];

type MenuKey = 'PRODUCT' | 'CUSTOMERS' | 'INTEGRATIONS' | 'RESOURCES' | 'COMPANY';

// ─── Icons ─────────────────────────────────────────────────────────────────────

function ArrowUpRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn('inline-block', className)}
        >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
        </svg>
    );
}

function ChargeflowIcon({ className }: { className?: string }) {
    return (
        <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-auto shrink-0', className)}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 26.791 6.16874C26.7723 6.14897 17.7054 10.7632 17.7054 10.7632L14.0061 5.62295C20.772 0.983474 24.7214 1.69848 25.7767 3.16527L30.1387 9.22647C31.7551 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295C14.0061 5.62295 6.24723 11.9605 3.62693 17.8263C3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.64591 23.0115 5.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 4.31985 9.95881 -0.000976563Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ChargeflowLogo({ className, hideText }: { className?: string; hideText?: boolean }) {
    return (
        <Link
            href="/"
            className={cn(
                'group flex items-center gap-2.5',
                'opacity-100 transition-opacity duration-200 hover:opacity-60',
                className,
            )}
        >
            <ChargeflowIcon className="text-white" />
            <div
                className={cn(
                    'overflow-hidden transition-all duration-500 ease-out',
                    hideText ? 'max-w-0 opacity-0' : 'max-w-35 opacity-100',
                )}
            >
                <svg
                    viewBox="0 0 132 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-auto shrink-0 text-white"
                >
                    <path d="M119.083 18.366H117.182L112.198 5.52075H115.589L118.364 13.1508L121.113 5.52075H123.014L125.891 13.0995L128.512 5.52075H131.852L126.97 18.366H125.069L122.063 10.4533L119.083 18.366Z" fill="currentColor" />
                    <path d="M102.906 15.283C103.489 15.8825 104.396 16.1822 105.63 16.1822C106.863 16.1822 107.77 15.8825 108.353 15.283C108.952 14.6836 109.252 13.596 109.252 12.0203C109.252 10.3933 108.952 9.27143 108.353 8.65486C107.77 8.02116 106.863 7.70431 105.63 7.70431C104.396 7.70431 103.489 8.01259 102.906 8.62917C102.324 9.24574 102.033 10.3761 102.033 12.0203C102.033 13.596 102.324 14.6836 102.906 15.283ZM105.63 5.13525C107.959 5.13525 109.68 5.64906 110.793 6.67669C111.924 7.70431 112.489 9.48552 112.489 12.0203C112.489 14.4866 111.924 16.225 110.793 17.2355C109.68 18.246 107.959 18.7512 105.63 18.7512C103.317 18.7512 101.596 18.246 100.466 17.2355C99.3525 16.225 98.7959 14.4866 98.7959 12.0203C98.7959 9.48552 99.3525 7.70431 100.466 6.67669C101.596 5.64906 103.317 5.13525 105.63 5.13525Z" fill="currentColor" />
                    <path d="M92.3974 3.20846L89.8283 3.20846C89.1604 3.20846 88.6723 3.37116 88.364 3.69658C88.0728 4.02199 87.9272 4.52724 87.9272 5.21232V5.52061L92.3974 5.52061L92.3974 8.08966L87.9272 8.08966L87.9272 18.3659L84.6902 18.3659L84.6902 8.08966L82.5322 8.08966L82.5322 5.52061L84.6902 5.52061V5.21232C84.6902 3.8079 85.0756 2.69465 85.8463 1.87255C86.617 1.05045 87.8587 0.639404 89.5714 0.639404L92.3974 0.639404L92.3974 3.20846ZM97.0988 0.639404L97.0988 18.3659L93.8617 18.3659L93.8617 0.639404L97.0988 0.639404Z" fill="currentColor" />
                    <path d="M81.7136 11.0184L81.7136 12.6626L71.6687 12.6626V12.6883C71.6858 13.9899 71.9941 14.8977 72.5935 15.4115C73.193 15.9253 74.0836 16.1822 75.2653 16.1822C77.2178 16.1822 78.2882 15.4971 78.4766 14.1269L81.7136 14.1269C81.5424 15.8054 80.9172 16.9957 79.8382 17.6979C78.7764 18.4001 77.2435 18.7512 75.2396 18.7512C72.9275 18.7512 71.2148 18.246 70.1015 17.2355C68.9883 16.225 68.4316 14.4866 68.4316 12.0203C68.4316 9.48552 68.9797 7.70431 70.0758 6.67669C71.1891 5.64906 72.9018 5.13525 75.2139 5.13525C79.5471 5.13525 81.7136 7.0963 81.7136 11.0184ZM71.6687 10.967V11.0698L78.4509 11.0698C78.4509 9.83662 78.1684 8.97171 77.6032 8.47502C77.0551 7.96121 76.2501 7.70431 75.1882 7.70431C74.1092 7.70431 73.27 7.94409 72.6706 8.42364C72.0711 8.88607 71.7372 9.73386 71.6687 10.967Z" fill="currentColor" />
                    <path d="M63.54 17.0557L63.54 15.2316L63.1803 15.2316C62.5295 17.0642 61.0737 17.9805 58.8129 17.9805C56.9461 17.9805 55.5673 17.5267 54.6767 16.6189C53.7861 15.6941 53.3408 14.0156 53.3408 11.5836C53.3408 9.15154 53.7861 7.47309 54.6767 6.54823C55.5673 5.60625 56.9461 5.13525 58.8129 5.13525C61.0737 5.13525 62.5295 6.06011 63.1803 7.90983L63.54 7.90983L63.54 5.52061L66.777 5.52061L66.777 17.0557C66.777 19.3678 66.2118 20.9949 65.0814 21.9369C63.9681 22.896 62.2554 23.3755 59.9433 23.3755C57.9566 23.3755 56.4151 23.033 55.319 22.3479C54.24 21.6628 53.6234 20.5068 53.4693 18.8797L56.7063 18.8797C56.8947 20.1642 57.9737 20.8065 59.9433 20.8065C61.1764 20.8065 62.0842 20.5324 62.6665 19.9844C63.2488 19.4534 63.54 18.4772 63.54 17.0557ZM60.2259 15.4115C62.4353 15.4115 63.54 14.4695 63.54 12.5855L63.54 10.5303C63.54 8.64629 62.4353 7.70431 60.2259 7.70431C58.8215 7.70431 57.8538 7.95265 57.3229 8.44933C56.809 8.92889 56.5521 9.97364 56.5521 11.5836C56.5521 13.1593 56.809 14.1954 57.3229 14.6921C57.8367 15.1717 58.8043 15.4115 60.2259 15.4115Z" fill="currentColor" />
                    <path d="M51.6099 5.52075L52.6889 5.52075L52.6889 8.44947L50.9419 8.42378C49.4347 8.3724 48.3814 8.62931 47.782 9.1945C47.1825 9.75969 46.8742 10.6503 46.8571 11.8663L46.8571 18.366L43.6201 18.366L43.6201 5.52075L46.8571 5.52075L46.8571 8.86052L47.1911 8.86052C47.5336 7.69588 48.0132 6.8481 48.6298 6.31716C49.2635 5.78622 50.2568 5.52075 51.6099 5.52075Z" fill="currentColor" />
                    <path d="M33.7744 18.7512C32.3528 18.7512 31.231 18.4087 30.4089 17.7236C29.5868 17.0385 29.1758 16.028 29.1758 14.6921C29.1758 13.5446 29.5697 12.6026 30.3575 11.8662C31.1454 11.1297 32.4642 10.7615 34.3139 10.7615C35.3586 10.7615 36.823 10.8129 38.707 10.9156L38.707 9.888C38.707 9.11729 38.4758 8.56066 38.0133 8.21812C37.568 7.87558 36.823 7.70431 35.7782 7.70431C34.8191 7.70431 34.1084 7.84989 33.6459 8.14105C33.1835 8.43221 32.8923 8.98027 32.7725 9.78524L29.5868 9.78524C29.741 8.07254 30.3147 6.87365 31.3081 6.18857C32.3186 5.48636 33.8258 5.13525 35.8296 5.13525C39.9059 5.13525 41.944 6.71094 41.944 9.86231L41.944 18.3659L38.707 18.3659L38.707 16.0794H38.373C38.0647 16.9529 37.4995 17.6209 36.6774 18.0833C35.8724 18.5286 34.9048 18.7512 33.7744 18.7512ZM35.1874 16.2849C37.5338 16.2849 38.707 15.3943 38.707 13.6131L38.707 12.791C37.628 12.7225 36.5918 12.6883 35.5984 12.6883C34.3481 12.6883 33.5175 12.851 33.1064 13.1764C32.6954 13.4847 32.4899 13.9214 32.4899 14.4866C32.4899 15.1374 32.7039 15.5999 33.1321 15.8739C33.5774 16.1479 34.2625 16.2849 35.1874 16.2849Z" fill="currentColor" />
                    <path d="M24.4735 18.3659L24.4735 9.83661C24.4735 9.01452 24.2337 8.45789 23.7542 8.16673C23.2746 7.85844 22.521 7.7043 21.4934 7.7043C19.5067 7.7043 18.4876 8.49214 18.4362 10.0678L18.4362 18.3659L15.1992 18.3659L15.1992 0.639404L18.4362 0.639404L18.4362 7.90983L18.7702 7.90983C19.3354 6.06011 20.7141 5.13525 22.9064 5.13525C24.4821 5.13525 25.6724 5.46066 26.4774 6.11149C27.2995 6.76232 27.7105 7.90126 27.7105 9.52833L27.7105 18.3659L24.4735 18.3659Z" fill="currentColor" />
                    <path d="M10.7296 13.6388L13.9666 13.6388C13.7782 15.4885 13.1445 16.8073 12.0655 17.5952C11.0036 18.3659 9.47929 18.7512 7.49256 18.7512C5.18041 18.7512 3.46771 18.246 2.35445 17.2355C1.2412 16.225 0.68457 14.4866 0.68457 12.0203C0.68457 9.48552 1.2412 7.70431 2.35445 6.67669C3.46771 5.64906 5.18041 5.13525 7.49256 5.13525C9.46216 5.13525 10.9779 5.51205 12.0398 6.26564C13.1017 7.01923 13.7268 8.30375 13.9152 10.1192L10.6782 10.1192C10.4213 8.50928 9.3594 7.70431 7.49256 7.70431C6.27654 7.70431 5.37737 8.01259 4.79505 8.62917C4.21274 9.24574 3.92158 10.3761 3.92158 12.0203C3.92158 13.596 4.21274 14.6836 4.79505 15.283C5.37737 15.8825 6.27654 16.1822 7.49256 16.1822C8.43454 16.1822 9.17957 15.9938 9.72763 15.617C10.2757 15.2231 10.6097 14.5637 10.7296 13.6388Z" fill="currentColor" />
                </svg>
            </div>
        </Link>
    );
}

// ─── Decorative helpers ────────────────────────────────────────────────────────

function Diamond({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 10 10" className={cn('size-2', className)} fill="currentColor">
            <path d="M5 0L10 5L5 10L0 5Z" />
        </svg>
    );
}

function DottedCircles({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" className={cn('w-full h-full', className)} fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.35" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.25" />
            <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
        </svg>
    );
}

function RadarGrid({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" className={cn('w-full h-full', className)} fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.45" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.35" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.28" />
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.2" />
            {[0, 30, 60, 90, 120, 150].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = (100 + 90 * Math.cos(rad)).toFixed(3);
                const y2 = (100 + 90 * Math.sin(rad)).toFixed(3);
                return (
                    <line
                        key={angle}
                        x1="100" y1="100"
                        x2={x2}
                        y2={y2}
                        stroke="currentColor" strokeWidth="0.3" opacity="0.2"
                    />
                );
            })}
        </svg>
    );
}

function OrbitalRings({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 300 200" className={cn('w-full h-full', className)} fill="none">
            <ellipse cx="150" cy="110" rx="130" ry="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.45" transform="rotate(-15 150 110)" />
            <ellipse cx="150" cy="110" rx="100" ry="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.35" transform="rotate(10 150 110)" />
            <ellipse cx="150" cy="110" rx="70" ry="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.28" transform="rotate(-5 150 110)" />
            <rect x="55" y="85" width="6" height="6" transform="rotate(45 58 88)" fill="currentColor" opacity="0.5" />
            <rect x="230" y="125" width="6" height="6" transform="rotate(45 233 128)" fill="currentColor" opacity="0.4" />
            <rect x="150" y="65" width="5" height="5" transform="rotate(45 152.5 67.5)" fill="currentColor" opacity="0.45" />
            <rect x="120" y="150" width="5" height="5" transform="rotate(45 122.5 152.5)" fill="currentColor" opacity="0.35" />
            <rect x="200" y="90" width="4" height="4" transform="rotate(45 202 92)" fill="currentColor" opacity="0.4" />
        </svg>
    );
}

function HubSpoke({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 300 200" className={cn('w-full h-full', className)} fill="none">
            <circle cx="150" cy="100" r="20" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
            <circle cx="150" cy="100" r="12" fill="currentColor" opacity="0.18" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const endX = (150 + 85 * Math.cos(rad)).toFixed(3);
                const endY = (100 + 75 * Math.sin(rad)).toFixed(3);
                return (
                    <g key={angle}>
                        <line x1="150" y1="100" x2={endX} y2={endY} stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
                        <circle cx={endX} cy={endY} r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                        <circle cx={endX} cy={endY} r="3" fill="currentColor" opacity="0.2" />
                    </g>
                );
            })}
        </svg>
    );
}

// ─── Mega Menu Card ────────────────────────────────────────────────────────────

interface MegaMenuCardProps {
    title: string;
    description?: string;
    badge?: string;
    badgeVariant?: 'solid' | 'outline';
    href?: string;
    className?: string;
    children?: React.ReactNode;
    showLearnMore?: boolean;
    backgroundImage?: string;
}

function MegaMenuCard({
    title,
    description,
    badge,
    badgeVariant = 'outline',
    href = '#',
    className,
    children,
    showLearnMore = true,
    backgroundImage,
}: MegaMenuCardProps) {
    return (
        <a
            href={href}
            className={cn(
                'group/card relative flex flex-col rounded-xl bg-[#111120] border border-white/[0.06] overflow-hidden',
                'hover:border-white/15 transition-all duration-300',
                className,
            )}
        >
            {backgroundImage && (
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            <div className="relative z-10 p-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-[13px]">{title}</h3>
                    {badge && (
                        <span
                            className={cn(
                                'text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase',
                                badgeVariant === 'solid'
                                    ? 'bg-white/15 text-white'
                                    : 'border border-white/20 text-white/50',
                            )}
                        >
                            {badge}
                        </span>
                    )}
                </div>
                {description && (
                    <p className="text-white/35 text-xs leading-relaxed">{description}</p>
                )}
            </div>

            {children && (
                <div className="relative flex-1 flex items-end justify-center overflow-hidden text-white group-hover/card:text-blue-400 transition-colors duration-500">
                    {children}
                </div>
            )}

            {showLearnMore && (
                <div className="absolute bottom-3 right-4 z-20 opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest border border-white/20 rounded-full px-3 py-1.5 text-white bg-black/60 backdrop-blur-sm uppercase">
                        Learn More
                    </span>
                </div>
            )}
        </a>
    );
}

// ─── Menu Contents ─────────────────────────────────────────────────────────────

function ProductMenu() {
    return (
        <div className="grid grid-cols-5 gap-2 w-full h-[350px]">
            <MegaMenuCard
                title="Prevent"
                badge="NEW"
                badgeVariant="solid"
                description="Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens."
                className="h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6981018e62de9a5aac9b2dcd_navbar-prod-prevent__dark.png"
            />

            <MegaMenuCard
                title="Automation"
                description="Fully automated chargeback recovery with 4x ROI guarantee."
                className="h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6981018e65e3406e194326b4_navbar-prod-automation__dark.png"
            />

            <MegaMenuCard
                title="Alerts"
                description="Cut 90% of chargebacks before they happen, powered by Visa and Mastercard."
                className="h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6981018ebf1759172ed9b9f3_navbar-prod-alerts__dark.png"
            />

            <MegaMenuCard
                title="Insights"
                badge="FREE"
                description="Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard."
                className="h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6981018f41fe4021312a56cd_navbar-prod-insights__dark.png"
            />

            <MegaMenuCard
                title="Connect"
                badge="FOR PLATFORMS"
                description="Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API."
                className="h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6981018f9d38ca96315bca35_navbar-prod-connect__dark.png"
            />
        </div>
    );
}

function StatCard({ brand, stat, unit, description, category }: {
    brand: string; stat: string; unit: string; description: string; category: string;
}) {
    return (
        <a href="#" className="group/card relative flex flex-col rounded-xl bg-[#111120] border border-white/[0.06] overflow-hidden hover:border-white/15 transition-all duration-300">
            <div className="p-4 pb-0">
                <span className="text-white font-bold text-base tracking-tight">{brand}</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
                <div className="flex items-baseline gap-0.5">
                    <span className="text-white text-4xl font-bold tracking-tight">{stat}</span>
                    <span className="text-white/50 text-lg font-medium">{unit}</span>
                </div>
                <p className="text-white/35 text-xs text-center mt-2 leading-relaxed">{description}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none text-white group-hover/card:text-blue-400 transition-colors duration-500">
                <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
                    <circle cx="100" cy="140" r="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.35" />
                    <circle cx="100" cy="140" r="85" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.25" />
                </svg>
            </div>
            <div className="p-4 pt-2 flex items-center gap-2">
                <Diamond className="text-white/20 size-1.5" />
                <span className="text-white/25 text-[10px] font-medium tracking-wider uppercase">{category}</span>
            </div>
            <div className="absolute bottom-3 right-4 z-20 opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest border border-white/20 rounded-full px-3 py-1.5 text-white bg-black/60 backdrop-blur-sm uppercase">
                    Learn More
                </span>
            </div>
        </a>
    );
}

function CustomersMenu() {
    return (
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-2 w-full h-[350px]">
            <MegaMenuCard title="All Case Studies" className="h-full">
                <div className="relative w-full flex-1 px-4">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 200" fill="none">
                        <circle cx="110" cy="120" r="85" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.35" />
                        <circle cx="110" cy="120" r="60" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.25" />
                    </svg>
                    <span className="absolute top-8 right-6 text-white/50 text-base font-light italic tracking-wide">Caraway</span>
                    <span className="absolute top-20 right-10 text-white/30 text-sm font-medium">Huel</span>
                    <span className="absolute bottom-14 left-5 text-white font-bold text-base tracking-tight">obvi.</span>
                    <span className="absolute bottom-5 left-3 text-white/30 font-bold text-sm tracking-tight">HC</span>
                </div>
            </MegaMenuCard>
            <StatCard brand="obvi." stat="170" unit="%" description="win-rate increase" category="eCommerce" />
            <StatCard brand="elementor" stat="90" unit="%" description="reduction in time spent managing chargebacks" category="SaaS" />
            <StatCard brand="Fanatics" stat="2X" unit="" description="Chargeback Win Rate" category="Marketplace" />
            <StatCard brand="HEXCLAD" stat="328" unit="hrs." description="and 40 minutes saved" category="Travel" />
        </div>
    );
}

function IntegrationsMenu() {
    return (
        <div className="grid grid-cols-[1.6fr_1fr] grid-rows-3 gap-2 w-full h-[350px]">
            <MegaMenuCard
                title="All Integrations"
                description="Choose from hundreds of integrated platforms."
                className="row-span-3 h-full"
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977d79c4ff1e272f4eee850_navbar-integrations__dark.svg"
            />

            <MegaMenuCard
                title="Stripe"
                description="#1 Chargeback Solution for Stripe Merchants"
                showLearnMore={false}
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66fc000c87ace1e48d09740d_Frame%201362790250.avif"
            />

            <MegaMenuCard
                title="Shopify"
                description="Powering 30k+ Shopify Merchants"
                showLearnMore={false}
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/692d6eb75988c81ef29f0a3d_shopify%20nav.svg"
            />

            <MegaMenuCard
                title="WooCommerce"
                description="Native WooCommerce Integration"
                showLearnMore={false}
                backgroundImage="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/697349f3b73a6f2ac3245c5c_navbar-woocommerce.svg"
            />
        </div>
    );
}

function ResourceCardDecoration({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="relative w-full flex-1 flex items-center justify-center">
            <RadarGrid className="absolute inset-0 opacity-80" />
            <div className="relative z-10 w-10 h-10 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center">
                {icon}
            </div>
        </div>
    );
}

function ResourcesMenu() {
    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-2 w-full h-[350px]">
            <MegaMenuCard title="Blog" className="row-span-2 h-full">
                <ResourceCardDecoration icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16v16H4z" /><path d="M8 8h5v3H8z" /><path d="M8 14h8" /><path d="M8 17h6" />
                    </svg>
                } />
            </MegaMenuCard>
            <MegaMenuCard title="Reports" className="row-span-2 h-full">
                <ResourceCardDecoration icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16v16H4z" /><path d="M8 16V12" /><path d="M12 16V8" /><path d="M16 16V10" />
                    </svg>
                } />
            </MegaMenuCard>
            <MegaMenuCard title="Podcast" className="row-span-2 h-full">
                <ResourceCardDecoration icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="6" width="2" height="12" rx="1" /><rect x="6" y="3" width="2" height="18" rx="1" />
                        <rect x="10" y="8" width="2" height="8" rx="1" /><rect x="14" y="4" width="2" height="16" rx="1" />
                        <rect x="18" y="6" width="2" height="12" rx="1" /><rect x="22" y="9" width="2" height="6" rx="1" />
                    </svg>
                } />
            </MegaMenuCard>
            <MegaMenuCard title="Webinars" className="row-span-2 h-full">
                <ResourceCardDecoration icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M8 8a6 6 0 0 0 0 8" /><path d="M16 8a6 6 0 0 1 0 8" />
                        <path d="M5 5a10 10 0 0 0 0 14" /><path d="M19 5a10 10 0 0 1 0 14" />
                    </svg>
                } />
            </MegaMenuCard>

            {/* ROI Calculator */}
            <MegaMenuCard title="ROI Calculator" showLearnMore={false}>
                <div className="px-3 pb-3 w-full space-y-1.5">
                    <div className="flex items-center justify-between rounded-full border border-white/10 px-3 py-1.5">
                        <span className="text-white/60 text-xs">1,020</span>
                        <span className="text-white/40 text-[10px] font-bold tracking-wider">HOURS</span>
                    </div>
                    <div className="flex items-center justify-between rounded-full border border-white/10 px-3 py-1.5">
                        <span className="text-white/60 text-xs">$7,500</span>
                        <span className="text-white/40 text-[10px] font-bold tracking-wider">USD</span>
                    </div>
                </div>
            </MegaMenuCard>

            {/* Reason Codes */}
            <MegaMenuCard title="Reason Codes" showLearnMore={false}>
                <div className="px-3 pb-3 w-full">
                    <div className="flex items-center justify-between rounded-full border border-white/10 px-3 py-1.5">
                        <span className="text-white/40 text-xs">Enter Code: <span className="text-white/60">12.7</span></span>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                        </svg>
                    </div>
                </div>
            </MegaMenuCard>
        </div>
    );
}

function CompanyMenu() {
    return (
        <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2 w-full h-[350px]">
            <MegaMenuCard
                title="Who We Are"
                description="The story behind the Chargeflow."
                className="row-span-2 h-full"
            >
                <div className="relative w-full flex-1">
                    <OrbitalRings />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ChargeflowIcon className="h-5 w-auto text-white/20" />
                    </div>
                </div>
            </MegaMenuCard>

            <MegaMenuCard title="Brand" className="h-full">
                <div className="relative w-full flex-1 flex items-center justify-center">
                    <DottedCircles className="absolute inset-0 opacity-40" />
                </div>
            </MegaMenuCard>

            <MegaMenuCard title="Careers" badge="We're Hiring!" badgeVariant="solid" className="h-full">
                <div className="relative w-full flex-1 flex items-center justify-center">
                    <svg viewBox="0 0 100 80" className="w-full h-full opacity-15" fill="none">
                        <circle cx="60" cy="40" r="30" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
                        <line x1="20" y1="20" x2="80" y2="60" stroke="white" strokeWidth="0.3" />
                        <line x1="80" y1="20" x2="20" y2="60" stroke="white" strokeWidth="0.3" />
                        <circle cx="50" cy="40" r="8" stroke="white" strokeWidth="0.5" />
                    </svg>
                </div>
            </MegaMenuCard>

            <MegaMenuCard title="Become a Partner" className="h-full">
                <div className="relative w-full flex-1 flex items-center justify-center">
                    <DottedCircles className="absolute inset-0 opacity-30" />
                    <ChargeflowIcon className="h-4 w-auto text-white/20" />
                </div>
            </MegaMenuCard>

            <MegaMenuCard title="Contact Us" className="h-full">
                <div className="relative w-full flex-1 flex items-center justify-center">
                    <DottedCircles className="absolute inset-0 opacity-30" />
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
            </MegaMenuCard>
        </div>
    );
}

const MENUS: Record<MenuKey, React.ReactNode> = {
    PRODUCT: <ProductMenu />,
    CUSTOMERS: <CustomersMenu />,
    INTEGRATIONS: <IntegrationsMenu />,
    RESOURCES: <ResourcesMenu />,
    COMPANY: <CompanyMenu />,
};

// ─── Navbar ────────────────────────────────────────────────────────────────────

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState<MenuKey | null>(null);
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const scrolled = useScroll(20);

    function openMenu(key: MenuKey) {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMenu(key);
    }

    function scheduleClose() {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
    }

    function cancelClose() {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    }

    React.useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    React.useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e: MediaQueryListEvent) => { if (e.matches) setMobileOpen(false); };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    // Close on Escape
    React.useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveMenu(null); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const triggerClass = 'block px-3.5 py-1.5 text-xs font-semibold tracking-tight rounded-full text-white transition-colors duration-200 hover:text-white/70 cursor-default select-none';

    return (
        <>
        {/* Full-page blur overlay when any dropdown is open */}
        <div
            aria-hidden="true"
            className={cn(
                'fixed inset-0 z-40 pointer-events-none',
                'bg-black/50 backdrop-blur-[3px]',
                'transition-all duration-300 ease-out',
                activeMenu ? 'opacity-100' : 'opacity-0',
            )}
        />
        <header
            className={cn(
                'sticky top-0 z-50 w-full',
                'flex flex-col items-center',
            )}
        >
            {/* ── inner nav ─────────────────────────────────────────────────── */}
            <nav
                className={cn(
                    'relative grid grid-cols-[1fr_auto_1fr] w-9/10 items-center',
                    'transition-[max-width,margin,border-radius,height,padding,background-color,box-shadow,backdrop-filter] duration-500 ease-out',
                    // When menu is open, we want to keep the nav style consistent
                    scrolled && !mobileOpen
                        ? [
                            'mt-3',
                            'max-w-7xl',
                            'rounded-2xl',
                            activeMenu ? 'bg-black/70 backdrop-blur-md rounded-b-none' : 'bg-black/70 backdrop-blur-md rounded-2xl',
                            'px-6',
                            'h-12',
                            'shadow-[0_4px_32px_rgba(0,0,0,0.6)]',
                        ]
                        : [
                            'mt-0',
                            'max-w-full',
                            'rounded-none',
                            'bg-transparent',
                            'px-6 md:px-10',
                            'h-16',
                            'shadow-none',
                        ],
                )}
            >
                {/* Col 1 — Logo */}
                <div className="flex items-center">
                    <ChargeflowLogo hideText={scrolled && !mobileOpen} />
                </div>

                {/* Col 2 — Desktop nav links */}
                <ul className={cn(
                    'hidden items-center md:flex px-1.5 py-1 gap-0 rounded-full border',
                    'transition-[background-color,border-color] duration-500 ease-out',
                    scrolled && !mobileOpen
                        ? 'bg-transparent border-transparent'
                        : 'bg-[#1a1a1a] border-white/8',
                )}>
                    {(['PRODUCT', 'CUSTOMERS'] as MenuKey[]).map((key) => (
                        <li key={key}>
                            <button
                                className={cn(triggerClass, activeMenu === key && 'text-white/70')}
                                onMouseEnter={() => openMenu(key)}
                                onMouseLeave={scheduleClose}
                                onFocus={() => openMenu(key)}
                                onBlur={scheduleClose}
                            >
                                {key}
                            </button>
                        </li>
                    ))}

                    {/* PRICING — no dropdown */}
                    <li>
                        <a href="#" className={triggerClass} onMouseEnter={() => { setActiveMenu(null); }}>
                            PRICING
                        </a>
                    </li>

                    {(['INTEGRATIONS', 'RESOURCES', 'COMPANY'] as MenuKey[]).map((key) => (
                        <li key={key}>
                            <button
                                className={cn(triggerClass, activeMenu === key && 'text-white/70')}
                                onMouseEnter={() => openMenu(key)}
                                onMouseLeave={scheduleClose}
                                onFocus={() => openMenu(key)}
                                onBlur={scheduleClose}
                            >
                                {key}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Col 3 — CTAs + mobile burger */}
                <div className="flex items-center justify-end gap-4">
                    {/* SIGN IN — shimmer ghost pill */}
                    <ShimmerButton
                        shimmerColor="rgba(255,255,255,0.55)"
                        shimmerSize="0.04em"
                        shimmerDuration="3.5s"
                        
                        borderRadius="100px"
                        className="hidden md:flex items-center gap-1 py-2 px-4 text-xs font-semibold tracking-tight border border-transparent group-hover:border-white/[0.08] transition-colors"
                    >
                        SIGN IN
                        <ArrowUpRight className="h-[14px] w-[14px]" />
                    </ShimmerButton>

                    {/* SCHEDULE A DEMO — shimmer blue pill */}
                    <ShimmerButton
                        shimmerColor="#ffffff"
                        shimmerSize="0.03em"
                        shimmerDuration="2.5s"
                        background="rgba(41, 82, 227, 1)"
                        borderRadius="100px"
                        className={cn(
                            'hidden md:flex items-center gap-1.5 py-2 text-xs font-semibold tracking-tight border-white/[0.15]',
                            'transition-[padding] duration-500 ease-out',
                            scrolled && !mobileOpen ? 'px-4' : 'px-5',
                        )}
                    >
                        <span className={cn(
                            'whitespace-nowrap transition-all duration-500 ease-out overflow-hidden',
                            scrolled && !mobileOpen ? 'max-w-0 opacity-0' : 'max-w-24 opacity-100',
                        )}>
                            SIGN UP
                        </span>
                        <span className={cn(
                            'whitespace-nowrap transition-all duration-500 ease-out overflow-hidden',
                            scrolled && !mobileOpen ? 'max-w-48 opacity-100' : 'max-w-0 opacity-0',
                        )}>
                            SCHEDULE A DEMO
                        </span>
                        <ArrowUpRight className="h-[14px] w-[14px] shrink-0" />
                    </ShimmerButton>

                    <button
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMobileOpen((v) => !v)}
                        className="flex items-center justify-center rounded-md border border-white/15 p-2 text-white md:hidden"
                    >
                        <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
                    </button>
                </div>

                {/* ── Mega Menu Dropdown — anchored inside nav, stretches full width ── */}
                <div
                    className={cn(
                        'absolute left-0 right-0 top-full z-50',
                        'pointer-events-none',
                    )}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                >
                    {(Object.keys(MENUS) as MenuKey[]).map((key) => (
                        <div
                            key={key}
                            className={cn(
                                'absolute left-0 right-0',
                                'transition-all duration-300 ease-out',
                                activeMenu === key
                                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                                    : 'opacity-0 -translate-y-1 pointer-events-none',
                            )}
                        >
                            <div
                                className={cn(
                                    'w-full p-2',
                                    'bg-black/80 backdrop-blur-xl',
                                    'border border-white/[0.07] border-t-0',
                                    scrolled && !mobileOpen ? 'rounded-b-2xl' : 'rounded-2xl mt-1',
                                    'shadow-[0_20px_60px_rgba(0,0,0,0.7)]',
                                )}
                            >
                                {MENUS[key]}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>

            {/* ── Mobile drawer ──────────────────────────────────────────────── */}
            <div
                data-state={mobileOpen ? 'open' : 'closed'}
                className={cn(
                    'fixed inset-0 top-16 z-40 flex flex-col bg-black/95 backdrop-blur-xl md:hidden',
                    'transition-all duration-300 ease-out',
                    mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
            >
                <div className="flex h-full flex-col justify-between gap-4 p-6">
                    <ul className="grid gap-1">
                        {MOBILE_NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-md px-3 py-3 text-sm font-bold tracking-widest text-white/70 hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-3 items-center">
                        <a href="#" className="flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 py-3 text-sm font-semibold text-white">
                            SIGN IN <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex w-full items-center justify-center gap-1.5 rounded-full bg-blue-600 py-3 text-sm font-bold text-white">
                            SIGN UP <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
