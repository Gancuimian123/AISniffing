"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Download, Share2, ArrowUpDown, Trophy, Medal, Award, Github } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import {
  sweBenchData,
  kcoresArenaData,
  overallLeaderboardData,
  companyColors,
  benchmarkDescriptions,
  historicalTrendData,
} from "@/lib/model-leaderboard-data"

export default function ModelLeaderboard() {
  const [sortBy, setSortBy] = useState("score")
  const [sortOrder, setSortOrder] = useState("desc")
  const [selectedBenchmark, setSelectedBenchmark] = useState("overall")

  // 获取当前选择的基准测试数据
  const getCurrentBenchmarkData = () => {
    switch (selectedBenchmark) {
      case "sweBench":
        return sweBenchData
      case "snakePit":
        return kcoresArenaData.snakePit
      case "solarSystem":
        return kcoresArenaData.solarSystem
      case "mandelbrotSet":
        return kcoresArenaData.mandelbrotSet
      case "marsMission":
        return kcoresArenaData.marsMission
      case "bouncingBall":
        return kcoresArenaData.bouncingBall
      case "overall":
      default:
        return overallLeaderboardData
    }
  }

  // 排序数据
  const sortData = (data: any[]) => {
    return [...data].sort((a, b) => {
      const valueA = a[sortBy]
      const valueB = b[sortBy]

      if (sortOrder === "asc") {
        return typeof valueA === "string" ? valueA.localeCompare(valueB) : valueA - valueB
      } else {
        return typeof valueA === "string" ? valueB.localeCompare(valueA) : valueB - valueA
      }
    })
  }

  const sortedData = sortData(getCurrentBenchmarkData())

  // 切换排序顺序
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  // 获取排名徽章
  const getRankBadge = (index: number) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />
    if (index === 2) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="text-muted-foreground font-mono">{index + 1}</span>
  }

  // 获取基准测试描述
  const getBenchmarkDescription = () => {
    switch (selectedBenchmark) {
      case "sweBench":
        return benchmarkDescriptions.sweBench
      case "snakePit":
        return benchmarkDescriptions.snakePit
      case "solarSystem":
        return benchmarkDescriptions.solarSystem
      case "mandelbrotSet":
        return benchmarkDescriptions.mandelbrotSet
      case "marsMission":
        return benchmarkDescriptions.marsMission
      case "bouncingBall":
        return benchmarkDescriptions.bouncingBall
      case "overall":
      default:
        return "综合排行榜基于多个基准测试的加权平均分，全面评估大语言模型的整体性能。"
    }
  }

  // 准备雷达图数据
  const getRadarData = () => {
    const topModels = overallLeaderboardData.slice(0, 5)
    return [
      {
        subject: "推理能力",
        "Claude 3 Opus": 95,
        "GPT-4o": 93,
        "Gemini 1.5 Pro": 90,
        "Claude 3 Sonnet": 87,
        "GPT-4": 85,
      },
      {
        subject: "知识准确性",
        "Claude 3 Opus": 92,
        "GPT-4o": 94,
        "Gemini 1.5 Pro": 91,
        "Claude 3 Sonnet": 88,
        "GPT-4": 87,
      },
      {
        subject: "代码能力",
        "Claude 3 Opus": 89,
        "GPT-4o": 92,
        "Gemini 1.5 Pro": 87,
        "Claude 3 Sonnet": 84,
        "GPT-4": 86,
      },
      {
        subject: "创意生成",
        "Claude 3 Opus": 88,
        "GPT-4o": 90,
        "Gemini 1.5 Pro": 85,
        "Claude 3 Sonnet": 83,
        "GPT-4": 82,
      },
      {
        subject: "指令跟随",
        "Claude 3 Opus": 94,
        "GPT-4o": 92,
        "Gemini 1.5 Pro": 88,
        "Claude 3 Sonnet": 90,
        "GPT-4": 85,
      },
    ]
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            \ 大模型<span className="text-primary">排行榜</span>
          </h1>
          <p className="text-muted-foreground">基于多项基准测试的大语言模型性能评估与排名</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            导出数据
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            分享
          </Button>
        </div>
      </div>

      <Tabs defaultValue="leaderboard" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="leaderboard">排行榜</TabsTrigger>
          <TabsTrigger value="comparison">模型对比</TabsTrigger>
          <TabsTrigger value="trends">历史趋势</TabsTrigger>
        </TabsList>

        <TabsContent value="leaderboard" className="mt-6">
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader className="pb-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl">模型排名</CardTitle>
                    <CardDescription>{getBenchmarkDescription()}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select value={selectedBenchmark} onValueChange={setSelectedBenchmark}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="选择基准测试" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overall">综合排行榜</SelectItem>
                        <SelectItem value="sweBench">SWE Bench</SelectItem>
                        <SelectItem value="snakePit">蛇坑测试</SelectItem>
                        <SelectItem value="solarSystem">太阳系测试</SelectItem>
                        <SelectItem value="mandelbrotSet">曼德尔布罗特集合测试</SelectItem>
                        <SelectItem value="marsMission">火星任务测试</SelectItem>
                        <SelectItem value="bouncingBall">弹跳球测试</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={toggleSortOrder} className="gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      {sortOrder === "desc" ? "降序" : "升序"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 bg-muted/50 p-4 text-sm font-medium">
                    <div className="col-span-1 flex items-center justify-center">排名</div>
                    <div className="col-span-5 md:col-span-4">模型</div>
                    <div className="col-span-3 md:col-span-2">公司</div>
                    <div className="col-span-3 md:col-span-2 text-right">得分</div>
                    <div className="hidden md:block md:col-span-3 text-right">更新日期</div>
                  </div>
                  <div className="divide-y">
                    {sortedData.map((model, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 text-sm items-center">
                        <div className="col-span-1 flex items-center justify-center">{getRankBadge(index)}</div>
                        <div className="col-span-5 md:col-span-4 font-medium">{model.name}</div>
                        <div className="col-span-3 md:col-span-2">
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
                        <div className="hidden md:block md:col-span-3 text-right text-muted-foreground">
                          {model.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>得分分布</CardTitle>
                  <CardDescription>各模型在当前基准测试中的得分分布</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sortedData.slice(0, 10)}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="score" name="得分" fill="url(#colorGradient)" radius={[0, 4, 4, 0]}>
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#03fc90" />
                              <stop offset="100%" stopColor="#fc03f8" />
                            </linearGradient>
                          </defs>
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>公司分布</CardTitle>
                  <CardDescription>各公司在排行榜中的模型数量和平均得分</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "OpenAI", count: 3, avgScore: 82.9 },
                          { name: "Anthropic", count: 3, avgScore: 84.9 },
                          { name: "Google", count: 3, avgScore: 78.7 },
                          { name: "Meta", count: 3, avgScore: 72.6 },
                          { name: "Mistral AI", count: 3, avgScore: 74.0 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="count" name="模型数量" fill="#03fc90" radius={[4, 4, 0, 0]} />
                        <Bar yAxisId="right" dataKey="avgScore" name="平均得分" fill="#fc03f8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="mt-6">
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>顶级模型能力对比</CardTitle>
                <CardDescription>前5名模型在各个能力维度的表现对比</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={150} data={getRadarData()}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Claude 3 Opus"
                        dataKey="Claude 3 Opus"
                        stroke="#B033FF"
                        fill="#B033FF"
                        fillOpacity={0.2}
                      />
                      <Radar name="GPT-4o" dataKey="GPT-4o" stroke="#00A67E" fill="#00A67E" fillOpacity={0.2} />
                      <Radar
                        name="Gemini 1.5 Pro"
                        dataKey="Gemini 1.5 Pro"
                        stroke="#4285F4"
                        fill="#4285F4"
                        fillOpacity={0.2}
                      />
                      <Radar
                        name="Claude 3 Sonnet"
                        dataKey="Claude 3 Sonnet"
                        stroke="#9747FF"
                        fill="#9747FF"
                        fillOpacity={0.2}
                      />
                      <Radar name="GPT-4" dataKey="GPT-4" stroke="#10A37F" fill="#10A37F" fillOpacity={0.2} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>各测试项目得分对比</CardTitle>
                  <CardDescription>顶级模型在各个基准测试中的表现</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          {
                            name: "SWE Bench",
                            "Claude 3 Opus": 67.5,
                            "GPT-4o": 65.2,
                            "Gemini 1.5 Pro": 61.3,
                          },
                          {
                            name: "蛇坑测试",
                            "Claude 3 Opus": 92.7,
                            "GPT-4o": 91.5,
                            "Gemini 1.5 Pro": 85.9,
                          },
                          {
                            name: "太阳系测试",
                            "Claude 3 Opus": 93.5,
                            "GPT-4o": 94.8,
                            "Gemini 1.5 Pro": 91.2,
                          },
                          {
                            name: "曼德尔布罗特",
                            "Claude 3 Opus": 89.3,
                            "GPT-4o": 88.7,
                            "Gemini 1.5 Pro": 86.2,
                          },
                          {
                            name: "火星任务",
                            "Claude 3 Opus": 89.8,
                            "GPT-4o": 90.6,
                            "Gemini 1.5 Pro": 87.3,
                          },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Claude 3 Opus" name="Claude 3 Opus" fill="#B033FF" />
                        <Bar dataKey="GPT-4o" name="GPT-4o" fill="#00A67E" />
                        <Bar dataKey="Gemini 1.5 Pro" name="Gemini 1.5 Pro" fill="#4285F4" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>模型参数量与性能关系</CardTitle>
                  <CardDescription>探索模型参数规模与性能得分的关系</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[
                          { params: "1B", score: 45.2, count: 3 },
                          { params: "7B", score: 58.7, count: 5 },
                          { params: "13B", score: 65.3, count: 4 },
                          { params: "34B", score: 72.8, count: 3 },
                          { params: "70B", score: 80.1, count: 4 },
                          { params: "100B+", score: 88.5, count: 6 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="params" />
                        <YAxis yAxisId="left" orientation="left" domain={[40, 100]} />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="score"
                          name="平均得分"
                          stroke="#03fc90"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="count"
                          name="模型数量"
                          stroke="#fc03f8"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-6">
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>大模型性能历史趋势</CardTitle>
                <CardDescription>主要大语言模型在过去几个月的性能变化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={historicalTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[60, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="GPT-4"
                        name="GPT-4"
                        stroke="#00A67E"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Claude 2"
                        name="Claude 2"
                        stroke="#B033FF"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Llama 2 70B"
                        name="Llama 2 70B"
                        stroke="#0668E1"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Gemini 1.0 Pro"
                        name="Gemini 1.0 Pro"
                        stroke="#4285F4"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Mixtral 8x7B"
                        name="Mixtral 8x7B"
                        stroke="#7A5AF8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Gemini 1.0 Ultra"
                        name="Gemini 1.0 Ultra"
                        stroke="#1A73E8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Claude 3 Opus"
                        name="Claude 3 Opus"
                        stroke="#9747FF"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="GPT-4o"
                        name="GPT-4o"
                        stroke="#10A37F"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>模型发布时间线</CardTitle>
                  <CardDescription>主要大语言模型的发布时间和性能得分</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[
                          { date: "2023-07", model: "Llama 2", score: 67.2 },
                          { date: "2023-11", model: "GPT-4 Turbo", score: 85.1 },
                          { date: "2023-12", model: "Gemini 1.0", score: 79.8 },
                          { date: "2023-12", model: "Mixtral 8x7B", score: 69.8 },
                          { date: "2024-02", model: "Mistral Large", score: 79.2 },
                          { date: "2024-03", model: "Claude 3", score: 91.4 },
                          { date: "2024-03", model: "Gemini 1.5", score: 87.9 },
                          { date: "2024-04", model: "GPT-4o", score: 90.8 },
                          { date: "2024-04", model: "Llama 3", score: 80.3 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                        <YAxis domain={[60, 100]} />
                        <Tooltip
                          labelFormatter={(value) => `发布日期: ${value}`}
                          formatter={(value, name, props) => [`${props.payload.model}: ${value}`, "得分"]}
                        />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="url(#colorGradient)"
                          strokeWidth={2}
                          dot={{ r: 6, fill: "#fc03f8" }}
                        />
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#03fc90" />
                            <stop offset="100%" stopColor="#fc03f8" />
                          </linearGradient>
                        </defs>
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>性能提升速度</CardTitle>
                  <CardDescription>大语言模型性能提升的速度分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { period: "2022上半年", improvement: 5.2 },
                          { period: "2022下半年", improvement: 7.8 },
                          { period: "2023上半年", improvement: 10.5 },
                          { period: "2023下半年", improvement: 12.3 },
                          { period: "2024上半年", improvement: 15.7 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey="improvement"
                          name="性能提升百分比"
                          fill="url(#improvementGradient)"
                          radius={[4, 4, 0, 0]}
                        />
                        <defs>
                          <linearGradient id="improvementGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fc03f8" />
                            <stop offset="100%" stopColor="#03fc90" />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Info className="h-5 w-5 text-muted-foreground" />
          <CardTitle>关于KCORES LLM Arena</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <p>
              KCORES LLM Arena（KCORES
              大模型竞技场）是一个开源项目，旨在通过一系列精心设计的基准测试来评估和比较各种大语言模型的性能。该项目包含多个测试场景，如蛇坑测试、太阳系测试、曼德尔布罗特集合测试等，全面评估模型在不同任务类型上的表现。
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <a href="https://github.com/KCORES/kcores-llm-arena" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  访问GitHub仓库
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Award className="mr-2 h-4 w-4" />
                  了解更多基准测试
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
