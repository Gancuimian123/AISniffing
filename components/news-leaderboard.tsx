"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, RefreshCw, Star, ArrowUp } from "lucide-react"

// 模拟数据
const hackernewsData = [
  { rank: 1, title: "A New ASN.1 API for Python", points: 29, url: "#" },
  { rank: 2, title: "Defold: cross-platform game engine", points: 201, url: "#" },
  { rank: 3, title: "Show HN: Less Slow C++", points: 48, url: "#" },
  { rank: 4, title: "Kagi Assistant is now available to all users", points: 379, url: "#" },
  { rank: 5, title: "Gemini 2.5 Flash", points: 870, url: "#" },
  { rank: 6, title: "Walled Gardens Can Kill", points: 33, url: "#" },
  { rank: 7, title: "Potatoes in the Mail", points: 368, url: "#" },
  { rank: 8, title: "Unikernel Linux (UKL) (2023)", points: 54, url: "#" },
  { rank: 9, title: "The Subjective Charms of Objective-C", points: 33, url: "#" },
  { rank: 10, title: "AMP and why emails are not (and should not be) webpages", points: 127, url: "#" },
]

const producthuntData = [
  { rank: 1, title: "Omakase.ai Voice", points: 336, url: "#" },
  { rank: 2, title: "Gemini 2.5 Flash", points: 219, url: "#" },
  { rank: 3, title: "Universal Memory MCP", points: 203, url: "#" },
  { rank: 4, title: "Wonder", points: 164, url: "#" },
  { rank: 5, title: "Shotup AI", points: 153, url: "#" },
  { rank: 6, title: "Shipable", points: 139, url: "#" },
  { rank: 7, title: "Picsellia Atlas", points: 138, url: "#" },
  { rank: 8, title: "Product Hunt MCP", points: 135, url: "#" },
  { rank: 9, title: "Work with Linear", points: 123, url: "#" },
  { rank: 10, title: "FriendMap", points: 106, url: "#" },
]

const githubData = [
  { rank: 1, title: "Anduin2017 / HowToCook", stars: 75771, url: "#" },
  { rank: 2, title: "jlowin / fastmcp", stars: 5580, url: "#" },
  { rank: 3, title: "virattt / ai-hedge-fund", stars: 25693, url: "#" },
  { rank: 4, title: "microsoft / BitNet", stars: 13694, url: "#" },
  { rank: 5, title: "linera-io / linera-protocol", stars: 22880, url: "#" },
  { rank: 6, title: "docmost / docmost", stars: 13913, url: "#" },
  { rank: 7, title: "CVEProject / cvelistV5", stars: 1776, url: "#" },
  { rank: 8, title: "NirDiamant / RAG_Techniques", stars: 15073, url: "#" },
  { rank: 9, title: "browserbase / stagehand", stars: 10346, url: "#" },
  { rank: 10, title: "opf / openproject", stars: 10705, url: "#" },
]

export default function NewsLeaderboard() {
  const [activeTab, setActiveTab] = useState("hackernews")

  const getUpdateTime = () => {
    const now = new Date()
    const minutes = Math.floor(Math.random() * 60)
    return `${minutes}分钟前更新`
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>热门资讯排行</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="hackernews" onValueChange={setActiveTab} className="w-full">
          <div className="px-6 pt-2">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="hackernews" className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center text-white text-xs font-bold">
                  Y
                </div>
                <span>Hacker News</span>
              </TabsTrigger>
              <TabsTrigger value="producthunt" className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[#DA552F] flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <span>Product Hunt</span>
              </TabsTrigger>
              <TabsTrigger value="github" className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[#333] flex items-center justify-center text-white text-xs font-bold dark:bg-white dark:text-black">
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
                <span>GitHub</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between px-6 py-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <RefreshCw className="h-3 w-3" />
                <span>{getUpdateTime()}</span>
              </div>
              <div className="flex items-center gap-1">
                {activeTab === "hackernews" && <span>points</span>}
                {activeTab === "producthunt" && <ArrowUp className="h-3 w-3" />}
                {activeTab === "github" && <Star className="h-3 w-3" />}
              </div>
            </div>

            <TabsContent value="hackernews" className="mt-0">
              <div className="divide-y">
                {hackernewsData.map((item) => (
                  <Link
                    key={item.rank}
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
            </TabsContent>

            <TabsContent value="producthunt" className="mt-0">
              <div className="divide-y">
                {producthuntData.map((item) => (
                  <Link
                    key={item.rank}
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
            </TabsContent>

            <TabsContent value="github" className="mt-0">
              <div className="divide-y">
                {githubData.map((item) => (
                  <Link
                    key={item.rank}
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
            </TabsContent>
          </div>
        </Tabs>

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
  )
}
