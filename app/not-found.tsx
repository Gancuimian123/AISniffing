import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">页面未找到</h2>
      <p className="text-muted-foreground mb-8 max-w-md">您访问的页面不存在或已被移除。请返回首页继续浏览。</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回 AI Sniffing
        </Link>
      </Button>
    </div>
  )
}
