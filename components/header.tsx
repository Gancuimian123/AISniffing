"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Award, Home } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import AISniffingLogo from "@/components/ai-sniffing-logo"

/**
 * Header组件
 *
 * 网站的顶部导航栏，包含Logo、导航链接、搜索框和主题切换按钮。
 * 支持响应式设计，在移动设备上显示汉堡菜单。
 *
 * 功能：
 * 1. 滚动时背景变为半透明并添加模糊效果
 * 2. 移动设备上显示可折叠的菜单
 * 3. 包含主题切换按钮
 *
 * @returns {JSX.Element} Header组件
 */
export default function Header() {
  // 状态管理
  const [isScrolled, setIsScrolled] = useState(false) // 是否已滚动
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 移动菜单是否打开
  const isMobile = useMobile() // 是否为移动设备

  /**
   * 监听滚动事件，更新isScrolled状态
   * 当页面滚动超过10px时，添加背景和边框
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo和网站名称 */}
        <Link href="/" className="flex items-center gap-2">
          <AISniffingLogo />
          <span className="text-2xl font-bold opacity-90 transition-opacity hover:opacity-100">AI Sniffing</span>
        </Link>

        {/* 桌面导航 - 仅在非移动设备上显示 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            首页
          </Link>
          <Link
            href="/leaderboard"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <Award className="h-4 w-4" />
            模型排行榜
          </Link>
        </nav>

        {/* 右侧工具栏 - 搜索框和主题切换 */}
        <div className="flex items-center gap-4">
          {/* 搜索框 - 仅在非移动设备上显示 */}
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索..." className="w-[200px] pl-8 rounded-full bg-muted/50" />
          </div>

          {/* 主题切换按钮 */}
          <ThemeToggle />

          {/* 移动菜单按钮 - 仅在移动设备上显示 */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">菜单</span>
            </Button>
          )}
        </div>
      </div>

      {/* 移动菜单 - 仅在移动设备且菜单打开时显示 */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden border-t">
          <div className="container py-4 px-4 flex flex-col gap-4">
            {/* 移动设备搜索框 */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索..." className="w-full pl-8 rounded-full bg-muted/50" />
            </div>
            {/* 移动设备导航链接 */}
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4 text-primary" />
                <span>首页</span>
              </Link>
              <Link
                href="/leaderboard"
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="h-4 w-4 text-primary" />
                <span>模型排行榜</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
