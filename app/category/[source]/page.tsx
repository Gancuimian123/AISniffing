"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import NewsCard from "@/components/news-card"
import { mockNews } from "@/lib/mock-data"

export default function CategoryPage() {
  const params = useParams()
  const source = params.source as string

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const sourceMap: Record<string, string> = {
    zeli: "Zeli",
    hackernews: "Hacker News",
    producthunt: "Product Hunt",
    github: "GitHub",
  }

  const sourceName = sourceMap[source] || source

  // Filter news by source
  const filteredNews = mockNews.filter(
    (news) =>
      news.source === sourceName &&
      (searchQuery === "" ||
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.summary.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Sort news
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "latest") {
      return a.date < b.date ? 1 : -1
    } else if (sortBy === "popular") {
      return a.comments < b.comments ? 1 : -1
    }
    return 0
  })

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-primary">{sourceName}</span> 最新资讯
          </h1>
          <p className="text-muted-foreground">探索来自 {sourceName} 的最新AI与科技动态</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="搜索资讯..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">最新发布</SelectItem>
                <SelectItem value="popular">最多评论</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {sortedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNews.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">没有找到相关资讯</h3>
            <p className="text-muted-foreground mb-4">尝试使用不同的搜索关键词或清除筛选条件</p>
            <Button onClick={() => setSearchQuery("")}>清除搜索</Button>
          </div>
        )}

        {sortedNews.length > 0 && (
          <div className="flex justify-center">
            <Button variant="outline">加载更多</Button>
          </div>
        )}
      </div>
    </div>
  )
}
