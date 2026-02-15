// LightRays.tsx
import React from "react";
import { cn } from "@/lib/utils";

type LightRaysProps = {
  className?: string;
  fill?: string;
  intensity?: number;
  blur?: number;
};

export const LightRays = ({ 
  className, 
  fill = "white", 
  intensity = 0.15,
  blur = 151 
}: LightRaysProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{ filter: `blur(${blur}px)` }}
      >
        {/* First light ray - main ray */}
        <defs>
          <linearGradient id="ray1-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fill} stopOpacity={intensity * 1.5} />
            <stop offset="40%" stopColor={fill} stopOpacity={intensity} />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="ray2-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fill} stopOpacity={intensity * 1.2} />
            <stop offset="50%" stopColor={fill} stopOpacity={intensity * 0.6} />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation={blur / 10} result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="screen" />
          </filter>
        </defs>
        
        {/* First ray - wider and more prominent */}
        <path
          d="M-100,-100 L1920,1080 L1000,1080 L-100,400 Z"
          fill="url(#ray1-gradient)"
          transform="rotate(-25 0 0)"
          filter="url(#glow)"
        />
        
        {/* Second ray - narrower and subtle */}
        <path
          d="M-50,-50 L1920,1080 L1200,1080 L-50,200 Z"
          fill="url(#ray2-gradient)"
          transform="rotate(-35 0 0)"
          filter="url(#glow)"
        />
        
        {/* Light origin glow effect */}
        <radialGradient id="origin-glow">
          <stop offset="0%" stopColor={fill} stopOpacity={intensity * 2} />
          <stop offset="70%" stopColor={fill} stopOpacity={intensity * 0.3} />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
        
        <circle
          cx="0"
          cy="0"
          r="400"
          fill="url(#origin-glow)"
          transform="translate(-200, -200)"
        />
      </svg>
      
      {/* Additional CSS-based subtle rays for better blending */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-[200%] h-[300px] bg-gradient-to-br from-white/10 via-white/5 to-transparent"
          style={{
            transform: 'rotate(-25deg) translateX(-200px)',
            clipPath: 'polygon(0 0, 100% 0, 20% 100%, 0% 100%)',
          }}
        />
        <div 
          className="absolute top-0 left-0 w-[180%] h-[200px] bg-gradient-to-br from-white/8 via-white/3 to-transparent"
          style={{
            transform: 'rotate(-35deg) translateX(-150px)',
            clipPath: 'polygon(0 0, 100% 0, 15% 100%, 0% 100%)',
          }}
        />
      </div>
    </div>
  );
};

// Alternative version with animated rays
export const AnimatedLightRays = ({ 
  className, 
  fill = "white",
  intensity = 0.15 
}: LightRaysProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute w-full h-full animate-pulse-slow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main ray gradient */}
          <linearGradient id="animated-ray1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fill} stopOpacity={intensity * 1.5}>
              <animate attributeName="stop-opacity" values={`${intensity * 1.5};${intensity * 1.8};${intensity * 1.5}`} dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor={fill} stopOpacity={intensity}>
              <animate attributeName="stop-opacity" values={`${intensity};${intensity * 1.2};${intensity}`} dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
          
          {/* Secondary ray gradient */}
          <linearGradient id="animated-ray2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fill} stopOpacity={intensity * 1.2}>
              <animate attributeName="stop-opacity" values={`${intensity * 1.2};${intensity * 1.4};${intensity * 1.2}`} dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor={fill} stopOpacity={intensity * 0.6}>
              <animate attributeName="stop-opacity" values={`${intensity * 0.6};${intensity * 0.8};${intensity * 0.6}`} dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
          
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="40" result="blur" />
            <feFlood floodColor={fill} floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated main ray */}
        <g filter="url(#soft-glow)">
          <path
            d="M-200,-200 L2000,1200 L1400,1200 L-200,300 Z"
            fill="url(#animated-ray1)"
            transform="rotate(-25 0 0)"
            style={{
              mixBlendMode: 'screen'
            }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-25 0 0; -23 0 0; -25 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Animated secondary ray */}
          <path
            d="M-150,-150 L2000,1200 L1600,1200 L-150,150 Z"
            fill="url(#animated-ray2)"
            transform="rotate(-35 0 0)"
            style={{
              mixBlendMode: 'screen'
            }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-35 0 0; -33 0 0; -35 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

// Simple version with pure Tailwind (no SVG)
export const SimpleLightRays = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Main ray */}
      <div 
        className="absolute top-0 left-0 w-[200%] h-[300px]"
        style={{
          background: 'linear-gradient(115deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 100%)',
          transform: 'rotate(-25deg) translateX(-200px)',
          clipPath: 'polygon(0 0, 100% 0, 30% 100%, 0% 100%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Secondary ray */}
      <div 
        className="absolute top-0 left-0 w-[180%] h-[200px]"
        style={{
          background: 'linear-gradient(125deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
          transform: 'rotate(-35deg) translateX(-150px)',
          clipPath: 'polygon(0 0, 100% 0, 20% 100%, 0% 100%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Origin glow */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};