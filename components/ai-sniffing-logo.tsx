import type { FC } from "react"

interface AISniffingLogoProps {
  className?: string
}

const AISniffingLogo: FC<AISniffingLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* 背景圆形 - 毛玻璃效果 */}
      <circle cx="50" cy="50" r="45" fill="currentColor" fillOpacity="0.1" filter="url(#blur)" />

      {/* 外圆边框 */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />

      {/* 中心图形 */}
      <path
        d="M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* 内部线条 */}
      <path d="M50 25 L50 75" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
    </svg>
  )
}

export default AISniffingLogo
