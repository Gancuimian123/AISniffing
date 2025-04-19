import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold">
            AI Sniffing
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            汇聚全球最新AI科技资讯，提供高质量的人工智能、科技创新内容与数据可视化
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AI Sniffing. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
