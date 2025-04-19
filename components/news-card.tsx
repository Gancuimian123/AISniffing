import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageSquare } from "lucide-react"

interface NewsCardProps {
  news: {
    id: string
    title: string
    summary: string
    image: string
    source: string
    category: string
    date: string
    comments: number
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link href={`/news/${news.id}`}>
      <Card className="news-card overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          <div className="absolute top-2 left-2">
            <Badge variant={news.source === "Zeli" || news.source === "Hacker News" ? "default" : "secondary"}>
              {news.source}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4 flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{news.category}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>{news.comments}</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold line-clamp-2">{news.title}</h3>
          <p className="text-muted-foreground line-clamp-3">{news.summary}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
