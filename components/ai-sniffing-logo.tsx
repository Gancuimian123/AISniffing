import type { FC } from "react"

/**
 * AISniffingLogo组件的属性接口
 * @property {string} className - 可选的CSS类名，用于自定义Logo的样式
 */
interface AISniffingLogoProps {
  className?: string
}

/**
 * AISniffingLogo组件
 *
 * 网站的Logo组件，使用SVG实现，支持自定义大小和样式。
 * 设计为毛玻璃风格，带有模糊效果和半透明背景。
 *
 * @param {AISniffingLogoProps} props - 组件属性
 * @returns {JSX.Element} SVG Logo组件
 */
const AISniffingLogo: FC<AISniffingLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 定义模糊滤镜 */}
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* 背景圆形 - 毛玻璃效果 */}
      <circle cx="50" cy="50" r="45" fill="currentColor" fillOpacity="0.1" filter="url(#blur)" />

      {/* 外圆边框 */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />

      {/* 中心图形 - 六边形 */}
      <path
        d="M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* 内部线条 - 创建网格效果 */}
      <path d="M50 25 L50 75" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
    </svg>
  )
}

export default AISniffingLogo
