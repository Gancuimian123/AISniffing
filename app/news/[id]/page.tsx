"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageSquare, Share2, Bookmark, ThumbsUp, ArrowLeft } from "lucide-react"
import { mockNews } from "@/lib/mock-data"

export default function NewsDetailPage() {
  const params = useParams()
  const id = params.id as string

  const news = mockNews.find((item) => item.id === id)

  if (!news) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">资讯未找到</h1>
        <p className="text-muted-foreground mb-8">您查找的资讯不存在或已被删除</p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
      </div>
    )
  }

  // 模拟相关资讯
  const relatedNews = mockNews.filter((item) => item.id !== id && item.category === news.category).slice(0, 3)

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant={news.source === "Zeli" || news.source === "Hacker News" ? "default" : "secondary"}>
              {news.source}
            </Badge>
            <span className="text-muted-foreground">{news.category}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">{news.title}</h1>

          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{news.comments} 评论</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">分享</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">收藏</span>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{news.summary}</p>
            <p>
              人工智能技术正在以前所未有的速度发展，每一天都有新的突破和应用场景出现。从大型语言模型到多模态AI系统，从自动驾驶到医疗诊断，AI正在重塑我们的世界和工作方式。
            </p>
            <h2>技术背景</h2>
            <p>
              近年来，深度学习技术的进步推动了AI能力的指数级增长。特别是Transformer架构的出现，彻底改变了自然语言处理领域，并为大型语言模型的发展奠定了基础。
            </p>
            <p>
              随着计算能力的增强和训练数据规模的扩大，模型的参数量从数百万增长到数千亿，使得AI系统能够展现出更接近人类的理解和生成能力。
            </p>
            <h2>行业影响</h2>
            <p>AI技术的进步正在对各个行业产生深远影响：</p>
            <ul>
              <li>软件开发：AI辅助编程工具提高了开发效率</li>
              <li>医疗健康：AI辅助诊断系统提高了疾病检测的准确性</li>
              <li>金融服务：AI风险评估模型改进了信贷决策</li>
              <li>创意产业：生成式AI为内容创作提供了新工具</li>
            </ul>
            <h2>未来展望</h2>
            <p>
              随着AI技术继续发展，我们可以预期看到更多的突破和创新。多模态AI系统将能够更好地理解和生成跨越文本、图像、音频和视频的内容。AI代理将变得更加自主，能够执行更复杂的任务链。
            </p>
            <p>
              然而，随着AI能力的增强，伦理考量和安全措施也变得越来越重要。确保AI系统的公平、透明和安全将是技术发展的关键方面。
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-b py-4 my-8">
            <div className="text-sm text-muted-foreground">
              标签：
              <Badge variant="outline" className="ml-2">
                AI技术
              </Badge>
              <Badge variant="outline" className="ml-2">
                深度学习
              </Badge>
              <Badge variant="outline" className="ml-2">
                技术趋势
              </Badge>
            </div>

            <Button variant="outline" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              点赞文章
            </Button>
          </div>
        </div>

        {relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">相关资讯</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedNews.map((item, index) => (
                <Link key={index} href={`/news/${item.id}`} className="block">
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold line-clamp-2">{item.title}</h3>
                      <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                        <span>{item.source}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
