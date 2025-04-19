"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Award, Home } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import AISniffingLogo from "@/components/ai-sniffing-logo"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

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
        <Link href="/" className="flex items-center gap-2">
          <AISniffingLogo />
          <span className="text-2xl font-bold opacity-90 transition-opacity hover:opacity-100">AI Sniffing</span>
        </Link>

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索..." className="w-[200px] pl-8 rounded-full bg-muted/50" />
          </div>

          <ThemeToggle />

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

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden border-t">
          <div className="container py-4 px-4 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索..." className="w-full pl-8 rounded-full bg-muted/50" />
            </div>
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
