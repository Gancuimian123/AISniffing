"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Zap,
  Award,
  Filter,
  Calendar,
  MessageSquare,
  Send,
  ArrowUpRight,
  Star,
  ArrowUp,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { DateRange } from "react-day-picker"
import { parseISO } from "date-fns"
import NewsCard from "@/components/news-card"
import { DateRangePicker } from "@/components/date-range-picker"
import { mockNews, mockTrends } from "@/lib/mock-data"
import { companyColors } from "@/lib/model-leaderboard-data"

export default function Home() {
  // ===== 模拟数据 =====

  // 模拟Hacker News热门资讯数据
  const hackernewsData = [
    { rank: 1, title: "A New ASN.1 API for Python", points: 29, url: "#" },
    { rank: 2, title: "Defold: cross-platform game engine", points: 201, url: "#" },
    { rank: 3, title: "Show HN: Less Slow C++", points: 48, url: "#" },
    { rank: 4, title: "Kagi Assistant is now available to all users", points: 379, url: "#" },
    { rank: 5, title: "Gemini 2.5 Flash", points: 870, url: "#" },
  ]

  // 模拟Product Hunt热门资讯数据
  const producthuntData = [
    { rank: 1, title: "Omakase.ai Voice", points: 336, url: "#" },
    { rank: 2, title: "Gemini 2.5 Flash", points: 219, url: "#" },
    { rank: 3, title: "Universal Memory MCP", points: 203, url: "#" },
    { rank: 4, title: "Wonder", points: 164, url: "#" },
    { rank: 5, title: "Shotup AI", points: 153, url: "#" },
  ]

  // 模拟GitHub热门资讯数据
  const githubData = [
    { rank: 1, title: "Anduin2017 / HowToCook", stars: 75771, url: "#" },
    { rank: 2, title: "jlowin / fastmcp", stars: 5580, url: "#" },
    { rank: 3, title: "virattt / ai-hedge-fund", stars: 25693, url: "#" },
    { rank: 4, title: "microsoft / BitNet", stars: 13694, url: "#" },
    { rank: 5, title: "linera-io / linera-protocol", stars: 22880, url: "#" },
  ]

  // ===== 状态管理 =====

  // 用于动画效果的引用数组
  const revealRefs = useRef<Array<HTMLDivElement | null>>([])

  // 筛选状态
  const [selectedCategory, setSelectedCategory] = useState("all") // 选中的分类
  const [selectedSource, setSelectedSource] = useState("all") // 选中的来源
  const [selectedTimeframe, setSelectedTimeframe] = useState("all") // 选中的时间范围

  // 日期范围选择器状态
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined) // 选中的日期范围
  const [showDateRangePicker, setShowDateRangePicker] = useState(false) // 是否显示日期选择器

  // 评论状态
  const [commentText, setCommentText] = useState("") // 评论输入文本

  // 模拟评论数据
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "张三",
      avatar: "/vibrant-street-market.png",
      content: "AI技术发展真的太快了，每天都有新突破！",
      date: "2小时前",
      likes: 12,
    },
    {
      id: 2,
      author: "李四",
      avatar: "/diverse-professional-profiles.png",
      content: "最近Claude 3的表现确实很惊艳，期待更多实际应用案例。",
      date: "昨天",
      likes: 8,
    },
    {
      id: 3,
      author: "王五",
      avatar: "/mystical-forest-spirit.png",
      content: "希望网站能多介绍一些开源模型的内容，对独立开发者很有帮助！",
      date: "2天前",
      likes: 15,
    },
  ])

  // ===== 功能函数 =====

  /**
   * 提交评论函数
   * 将用户输入的评论添加到评论列表中
   */
  const submitComment = () => {
    if (commentText.trim() === "") return

    const newComment = {
      id: comments.length + 1,
      author: "访客用户",
      avatar: "/wedding-guest-celebration.png",
      content: commentText,
      date: "刚刚",
      likes: 0,
    }

    setComments([newComment, ...comments])
    setCommentText("")
  }

  /**
   * 设置动画效果
   * 使用Intersection Observer API检测元素是否进入视口，并添加动画类
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    // 确保revealRefs.current是一个数组
    if (revealRefs.current) {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }

    // 清理函数
    return () => {
      if (revealRefs.current) {
        revealRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref)
        })
      }
    }
  }, [])

  /**
   * 添加元素到动画引用数组
   * @param el - DOM元素
   * @param index - 数组索引
   */
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (!revealRefs.current) {
      revealRefs.current = []
    }

    if (el) {
      revealRefs.current[index] = el
    }
  }

  /**
   * 将日期字符串转换为Date对象
   * @param dateString - 日期字符串，如"2小时前"、"昨天"、"3天前"
   * @returns Date对象
   */
  const getDateFromString = (dateString: string): Date => {
    const now = new Date()

    if (dateString.includes("小时前")) {
      const hours = Number.parseInt(dateString.split("小时前")[0])
      return new Date(now.getTime() - hours * 60 * 60 * 1000)
    } else if (dateString === "昨天") {
      const yesterday = new Date(now)
      yesterday.setDate(now.getDate() - 1)
      return yesterday
    } else if (dateString.includes("天前")) {
      const days = Number.parseInt(dateString.split("天前")[0])
      const pastDate = new Date(now)
      pastDate.setDate(now.getDate() - days)
      return pastDate
    } else {
      // 假设其他格式是"YYYY-MM-DD"
      try {
        return parseISO(dateString)
      } catch (e) {
        return now // 默认返回当前日期
      }
    }
  }

  /**
   * 检查日期是否在选定的时间范围内
   * @param dateString - 日期字符串
   * @returns 是否在时间范围内
   */
  const isWithinTimeframe = (dateString: string): boolean => {
    // 如果选择了自定义日期范围，优先使用它
    if (dateRange?.from) {
      const newsDate = getDateFromString(dateString)
      const from = new Date(dateRange.from)
      from.setHours(0, 0, 0, 0)

      // 如果只选择了开始日期，检查是否在该日期之后
      if (!dateRange.to) {
        return newsDate >= from
      }

      // 如果选择了完整范围，检查是否在范围内
      const to = new Date(dateRange.to)
      to.setHours(23, 59, 59, 999)

      return newsDate >= from && newsDate <= to
    }

    // 如果没有选择自定义日期范围，使用预设的时间范围
    if (selectedTimeframe === "all") return true

    const now = new Date()
    const today = now.toDateString()

    if (dateString.includes("小时") && selectedTimeframe === "today") return true
    if (dateString === "昨天" && selectedTimeframe === "yesterday") return true
    if (dateString === "昨天" && selectedTimeframe === "week") return true
    if (dateString.includes("天前") && selectedTimeframe === "week") {
      const days = Number.parseInt(dateString.split("天前")[0])
      return days <= 7
    }
    if (dateString.includes("天前") && selectedTimeframe === "month") {
      const days = Number.parseInt(dateString.split("天前")[0])
      return days <= 30
    }

    return false
  }

  /**
   * 处理时间范围选择变化
   * @param value - 选择的时间范围值
   */
  const handleTimeframeChange = (value: string) => {
    setSelectedTimeframe(value)
    if (value === "custom") {
      setShowDateRangePicker(true)
    } else {
      setShowDateRangePicker(false)
    }
  }

  /**
   * 处理日期范围变化
   * @param range - 选择的日期范围
   */
  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range)
  }

  /**
   * 重置所有筛选条件
   */
  const resetFilters = () => {
    setSelectedCategory("all")
    setSelectedSource("all")
    setSelectedTimeframe("all")
    setDateRange(undefined)
    setShowDateRangePicker(false)
  }

  /**
   * 根据筛选条件过滤新闻
   */
  const filteredNews = mockNews.filter((news) => {
    // 分类匹配
    const categoryMatch =
      selectedCategory === "all" ||
      (selectedCategory === "ai" && news.category.includes("AI")) ||
      (selectedCategory === "tech" && !news.category.includes("AI")) ||
      (selectedCategory === "dev" && news.category.includes("编程"))

    // 来源匹配
    const sourceMatch = selectedSource === "all" || news.source === selectedSource

    // 时间匹配
    const timeMatch = isWithinTimeframe(news.date)

    return categoryMatch && sourceMatch && timeMatch
  })

  /**
   * 切换日期选择器显示
   */
  const toggleDateRangePicker = () => {
    setShowDateRangePicker(!showDateRangePicker)
  }

  // 模型排行榜数据
  const modelData = [
    { name: "Claude 3 Opus", company: "Anthropic", score: 91.4, date: "2024-03-15" },
    { name: "GPT-4o", company: "OpenAI", score: 90.8, date: "2024-04-10" },
    { name: "Gemini 1.5 Pro", company: "Google", score: 87.9, date: "2024-03-21" },
    { name: "Claude 3 Sonnet", company: "Anthropic", score: 85.7, date: "2024-03-15" },
    { name: "GPT-4", company: "OpenAI", score: 85.1, date: "2023-11-06" },
  ]

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section - 网站顶部的主要展示区域 */}
      <section className="container px-4 pt-10 md:pt-16 lg:pt-24">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* 标题和描述 */}
          <div
            ref={(el) => addToRefs(el, 0)}
            className="reveal-animation flex flex-col gap-4 max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="w-fit mx-auto px-4 py-1">
              <Zap className="mr-1 h-3 w-3 text-primary" />
              AI Sniffing精选AI科技资讯实时更新
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              探索<span className="text-primary">人工智能</span>与<span className="text-secondary">科技创新</span>的前沿
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              汇聚来自Zeli、Hacker News、Product Hunt和GitHub的最新AI科技动态， 以
              <span className="font-semibold">数据驱动</span>的方式呈现科技趋势
            </p>
          </div>

          {/* 趋势卡片网格 */}
          <div
            ref={(el) => addToRefs(el, 1)}
            className="reveal-animation grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {mockTrends.slice(0, 4).map((trend, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className="relative h-40">
                    <Image src={trend.image || "/placeholder.svg"} alt={trend.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge variant={index % 2 === 0 ? "default" : "secondary"} className="mb-2">
                        {trend.category}
                      </Badge>
                      <h3 className="text-lg font-bold">{trend.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 操作按钮 */}
          <div ref={(el) => addToRefs(el, 2)} className="reveal-animation flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                浏览最新资讯
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/leaderboard">
                  查看模型排行榜
                  <Award className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Leaderboard Section - 模型排行榜区域 */}
      <section ref={(el) => addToRefs(el, 3)} className="reveal-animation container px-4">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">模型排行榜</h2>
            <p className="text-muted-foreground">最新大语言模型性能评测与排名</p>
          </div>

          {/* 模型排行榜表格 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                {/* 表头 */}
                <div className="grid grid-cols-12 bg-muted/50 p-4 text-sm font-medium rounded-md mb-2">
                  <div className="col-span-1 flex items-center justify-center">排名</div>
                  <div className="col-span-5 md:col-span-4">模型</div>
                  <div className="col-span-3 md:col-span-3">公司</div>
                  <div className="col-span-3 md:col-span-2 text-right">得分</div>
                  <div className="hidden md:block md:col-span-2 text-right">更新日期</div>
                </div>
                {/* 表格内容 */}
                <div className="divide-y">
                  {modelData.map((model, index) => (
                    <div key={index} className="grid grid-cols-12 p-4 text-sm items-center">
                      <div className="col-span-1 flex items-center justify-center font-bold">{index + 1}</div>
                      <div className="col-span-5 md:col-span-4 font-medium">{model.name}</div>
                      <div className="col-span-3 md:col-span-3">
                        <Badge
                          variant="outline"
                          style={{
                            borderColor:
                              companyColors[model.company as keyof typeof companyColors] || companyColors.Other,
                            color: companyColors[model.company as keyof typeof companyColors] || companyColors.Other,
                          }}
                        >
                          {model.company}
                        </Badge>
                      </div>
                      <div className="col-span-3 md:col-span-2 text-right font-mono font-bold">
                        {model.score.toFixed(1)}
                      </div>
                      <div className="hidden md:block md:col-span-2 text-right text-muted-foreground">{model.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/leaderboard" className="gap-2">
                查看完整排行榜
                <Award className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular News Section - 热门资讯排行区域 */}
      <section ref={(el) => addToRefs(el, 6)} className="reveal-animation container px-4">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">热门资讯排行</h2>
            <p className="text-muted-foreground">各大科技媒体平台的热门内容实时榜单</p>
          </div>

          {/* 热门资讯卡片网格 - 分别展示各平台热门内容 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hacker News 热门内容 */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FF6600] flex items-center justify-center text-white text-xs font-bold">
                    Y
                  </div>
                  <CardTitle>Hacker News</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {hackernewsData.slice(0, 5).map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="flex items-center px-6 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-6 text-center font-mono text-muted-foreground">{item.rank}</div>
                      <div className="ml-3 flex-1 line-clamp-1">{item.title}</div>
                      <Badge variant="outline" className="ml-2 bg-[#FF6600]/10 border-[#FF6600]/20">
                        {item.points}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <div className="p-3 border-t">
                  <Link
                    href="#"
                    className="text-xs flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    查看更多
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Product Hunt 热门内容 */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#DA552F] flex items-center justify-center text-white text-xs font-bold">
                    P
                  </div>
                  <CardTitle>Product Hunt</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {producthuntData.slice(0, 5).map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="flex items-center px-6 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-6 text-center font-mono text-muted-foreground">{item.rank}</div>
                      <div className="ml-3 flex-1 line-clamp-1">{item.title}</div>
                      <Badge variant="outline" className="ml-2 bg-[#DA552F]/10 border-[#DA552F]/20">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        {item.points}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <div className="p-3 border-t">
                  <Link
                    href="#"
                    className="text-xs flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    查看更多
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* GitHub 热门内容 */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#333] flex items-center justify-center text-white text-xs font-bold dark:bg-white dark:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <CardTitle>GitHub</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {githubData.slice(0, 5).map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="flex items-center px-6 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-6 text-center font-mono text-muted-foreground">{item.rank}</div>
                      <div className="ml-3 flex-1 line-clamp-1">{item.title}</div>
                      <Badge variant="outline" className="ml-2 bg-muted border-muted-foreground/20">
                        <Star className="mr-1 h-3 w-3" />
                        {item.stars.toLocaleString()}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <div className="p-3 border-t">
                  <Link
                    href="#"
                    className="text-xs flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    查看更多
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section - 最新资讯区域 */}
      <section ref={(el) => addToRefs(el, 4)} className="reveal-animation container px-4">
        <div className="flex flex-col gap-8">
          {/* 标题和分类选项卡 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">最新资讯</h2>
            <p className="text-muted-foreground mb-6">探索AI与科技领域的最新动态</p>
          </div>

          {/* 筛选选项 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center flex-wrap">
            {/* 分类选项卡 */}
            <div className="flex items-center gap-2 mr-2">
              <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-auto">
                <TabsList className="grid grid-cols-4 md:flex md:w-auto">
                  <TabsTrigger value="all">全部</TabsTrigger>
                  <TabsTrigger value="ai">AI</TabsTrigger>
                  <TabsTrigger value="tech">科技</TabsTrigger>
                  <TabsTrigger value="dev">开发</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* 来源筛选 */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="选择来源" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部来源</SelectItem>
                  <SelectItem value="Zeli">Zeli</SelectItem>
                  <SelectItem value="Hacker News">Hacker News</SelectItem>
                  <SelectItem value="Product Hunt">Product Hunt</SelectItem>
                  <SelectItem value="GitHub">GitHub</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 时间范围筛选 */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedTimeframe} onValueChange={handleTimeframeChange}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="选择时间" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部时间</SelectItem>
                  <SelectItem value="today">今天</SelectItem>
                  <SelectItem value="yesterday">昨天</SelectItem>
                  <SelectItem value="week">本周</SelectItem>
                  <SelectItem value="month">本月</SelectItem>
                  <SelectItem value="custom">自定义</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 日期范围选择器按钮 */}
            <Button variant="outline" className="flex items-center gap-2" onClick={toggleDateRangePicker}>
              <Calendar className="h-4 w-4" />
              日期范围
            </Button>

            {/* 重置筛选按钮 - 仅在有筛选条件时显示 */}
            {(selectedCategory !== "all" || selectedSource !== "all" || selectedTimeframe !== "all" || dateRange) && (
              <Button variant="outline" size="sm" onClick={resetFilters} className="ml-auto">
                重置筛选
              </Button>
            )}
          </div>

          {/* 日期范围选择器弹出框 */}
          {showDateRangePicker && (
            <div className="relative">
              <div className="absolute z-10 mt-2">
                <DateRangePicker
                  dateRange={dateRange}
                  onDateRangeChange={handleDateRangeChange}
                  onClose={() => setShowDateRangePicker(false)}
                />
              </div>
            </div>
          )}

          {/* 新闻卡片网格 */}
          <div className="grid grid-cols-1 gap-6">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.slice(0, 6).map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </div>
            ) : (
              // 无结果提示
              <div className="flex flex-col items-center justify-center p-12 border rounded-lg bg-muted/20">
                <p className="text-lg font-medium mb-2">没有找到符合条件的资讯</p>
                <p className="text-muted-foreground text-center mb-4">尝试调整筛选条件以查看更多内容</p>
                <Button variant="outline" onClick={resetFilters}>
                  重置筛选条件
                </Button>
              </div>
            )}

            {/* 查看更多按钮 */}
            {filteredNews.length > 0 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg" className="gap-2">
                  查看更多资讯
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comments Section - 评论区域 */}
      <section ref={(el) => addToRefs(el, 5)} className="reveal-animation comments-section py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {/* 标题 */}
            <div className="text-center">
              <Badge variant="outline" className="w-fit mx-auto px-4 py-1">
                <MessageSquare className="mr-1 h-3 w-3 text-primary" />
                社区讨论
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">留言评论</h2>
              <p className="text-lg text-muted-foreground mt-2">分享您对AI技术的见解和问题，与社区成员交流讨论</p>
            </div>

            {/* 评论输入框 */}
            <Card className="frosted-glass border-0 shadow-lg comment-input">
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/vibrant-street-market.png" alt="用户头像" />
                    <AvatarFallback>访客</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex flex-col gap-4">
                    <Textarea
                      placeholder="分享您的想法和见解..."
                      className="resize-none bg-transparent border-muted"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button onClick={submitComment} className="gap-2 bg-primary hover:bg-primary/90">
                        发布评论
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 评论列表 */}
            <div className="flex flex-col gap-4">
              {comments.map((comment) => (
                <Card key={comment.id} className="frosted-glass border-0 shadow-md comment-card">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={`${comment.author}的头像`} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{comment.author}</div>
                          <div className="text-sm text-muted-foreground">{comment.date}</div>
                        </div>
                        <p className="text-sm md:text-base">{comment.content}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1 hover:text-primary hover:bg-primary/10"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-thumbs-up"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            {comment.likes > 0 && <span>{comment.likes}</span>}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 gap-1 hover:text-primary hover:bg-primary/10"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-message-square"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            回复
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 查看更多评论按钮 */}
            {comments.length > 3 && (
              <div className="flex justify-center">
                <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                  查看更多评论
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
