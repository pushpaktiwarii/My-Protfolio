"use client";

import { motion } from "framer-motion";

interface AvatarSVGProps {
  className?: string;
  size?: number;
}

export function AvatarSVG({ className = "", size = 112 }: AvatarSVGProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1.5"
        />

        {/* Inner circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="url(#gradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Center H letter */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Left vertical bar */}
          <rect
            x="80"
            y="70"
            width="8"
            height="60"
            fill="hsl(var(--foreground))"
            rx="1"
          />
          {/* Right vertical bar */}
          <rect
            x="112"
            y="70"
            width="8"
            height="60"
            fill="hsl(var(--foreground))"
            rx="1"
          />
          {/* Horizontal bar */}
          <rect
            x="80"
            y="96"
            width="40"
            height="8"
            fill="hsl(var(--foreground))"
            rx="1"
          />
        </motion.g>

        {/* Simple decorative dots */}
        <motion.circle
          cx="100"
          cy="50"
          r="3"
          fill="hsl(var(--foreground))"
          fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.circle
          cx="100"
          cy="150"
          r="3"
          fill="hsl(var(--foreground))"
          fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.circle
          cx="50"
          cy="100"
          r="3"
          fill="hsl(var(--foreground))"
          fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.circle
          cx="150"
          cy="100"
          r="3"
          fill="hsl(var(--foreground))"
          fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}
