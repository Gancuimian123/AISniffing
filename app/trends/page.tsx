"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts"
import { mockTrendData } from "@/lib/mock-data"
import { Download, Share2 } from "lucide-react"

export default function TrendsPage() {
  const [timeRange, setTimeRange] = useState("weekly")

  const COLORS = ["#03fc90", "#fc03f8", "#03a9fc", "#fcba03", "#fc0303"]

  // 扩展的趋势数据
  const extendedData = {
    sentiment: [
      { name: "1月", positive: 65, neutral: 25, negative: 10 },
      { name: "2月", positive: 60, neutral: 30, negative: 10 },
      { name: "3月", positive: 70, neutral: 20, negative: 10 },
      { name: "4月", positive: 75, neutral: 15, negative: 10 },
      { name: "5月", positive: 65, neutral: 25, negative: 10 },
      { name: "6月", positive: 60, neutral: 25, negative: 15 },
      { name: "7月", positive: 70, neutral: 20, negative: 10 },
      { name: "8月", positive: 80, neutral: 15, negative: 5 },
    ],
    adoption: [
      { name: "研究机构", value: 30 },
      { name: "科技企业", value: 25 },
      { name: "初创公司", value: 20 },
      { name: "教育机构", value: 15 },
      { name: "医疗行业", value: 10 },
    ],
    investment: [
      { name: "2020", value: 25 },
      { name: "2021", value: 40 },
      { name: "2022", value: 55 },
      { name: "2023", value: 70 },
      { name: "2024", value: 85 },
    ],
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            AI科技<span className="text-primary">趋势分析</span>
          </h1>
          <p className="text-muted-foreground">基于数据分析的AI科技发展趋势与热点话题可视化</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Tabs value={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              <TabsTrigger value="weekly">周度趋势</TabsTrigger>
              <TabsTrigger value="monthly">月度趋势</TabsTrigger>
              <TabsTrigger value="yearly">年度趋势</TabsTrigger>
            </TabsList>
          </Tabs>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>热门AI技术趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockTrendData.weekly} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#03fc90" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI技术类别分布</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockTrendData.topics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {mockTrendData.topics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI技术发展趋势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockTrendData.monthly} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="AI" stroke="#03fc90" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="ML" stroke="#fc03f8" strokeWidth={2} />
                    <Line type="monotone" dataKey="LLM" stroke="#03a9fc" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI技术情感分析</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={extendedData.sentiment} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="positive" stackId="1" stroke="#03fc90" fill="#03fc90" />
                    <Area type="monotone" dataKey="neutral" stackId="1" stroke="#03a9fc" fill="#03a9fc" />
                    <Area type="monotone" dataKey="negative" stackId="1" stroke="#fc03f8" fill="#fc03f8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI技术采用分布</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={extendedData.adoption}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {extendedData.adoption.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI领域投资增长</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={extendedData.investment} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#fc03f8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>AI技术关键词热度地图</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] grid grid-cols-10 gap-2">
              {Array.from({ length: 100 }).map((_, index) => {
                const randomValue = Math.random()
                let bgColor = "bg-muted"

                if (randomValue > 0.9) {
                  bgColor = "bg-primary"
                } else if (randomValue > 0.8) {
                  bgColor = "bg-primary/80"
                } else if (randomValue > 0.7) {
                  bgColor = "bg-primary/60"
                } else if (randomValue > 0.6) {
                  bgColor = "bg-primary/40"
                } else if (randomValue > 0.5) {
                  bgColor = "bg-primary/20"
                } else if (randomValue > 0.4) {
                  bgColor = "bg-secondary/20"
                } else if (randomValue > 0.3) {
                  bgColor = "bg-secondary/40"
                } else if (randomValue > 0.2) {
                  bgColor = "bg-secondary/60"
                } else if (randomValue > 0.1) {
                  bgColor = "bg-secondary/80"
                } else {
                  bgColor = "bg-secondary"
                }

                return (
                  <div
                    key={index}
                    className={`${bgColor} rounded-md flex items-center justify-center text-xs font-medium p-2`}
                  >
                    {["GPT", "LLM", "AI", "ML", "CV", "NLP", "RL", "AGI", "RAG", "LLaMA"][index % 10]}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
