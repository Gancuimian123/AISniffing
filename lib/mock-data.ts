export const mockNews = [
  {
    id: "1",
    title: "OpenAI发布GPT-5：多模态能力再升级",
    summary:
      "OpenAI今日发布了GPT-5模型，新模型在多模态理解、推理能力和创意生成方面有显著提升，支持更长的上下文窗口和更精确的指令跟随。",
    image: "/neural-network-flow.png",
    source: "Zeli",
    category: "AI模型",
    date: "2小时前",
    comments: 128,
  },
  {
    id: "2",
    title: "谷歌推出新一代量子计算机：量子霸权再进一步",
    summary:
      "谷歌宣布其最新量子计算机已实现100量子比特的稳定操作，并成功解决了传统超级计算机需要数千年才能解决的问题。",
    image: "/entangled-future.png",
    source: "Hacker News",
    category: "量子计算",
    date: "5小时前",
    comments: 76,
  },
  {
    id: "3",
    title: "Anthropic推出Claude 3.5：挑战GPT-5的新选手",
    summary: "Anthropic发布了Claude 3.5模型，在多项基准测试中超越了GPT-4，特别是在长文本理解和复杂推理任务上表现出色。",
    image: "/digital-mindscape.png",
    source: "Zeli",
    category: "AI模型",
    date: "昨天",
    comments: 92,
  },
  {
    id: "4",
    title: "Meta开源大型多模态模型Llama 3 Vision",
    summary: "Meta宣布开源其最新的多模态模型Llama 3 Vision，该模型能够同时处理文本和图像输入，并生成高质量的文本输出。",
    image: "/ai-vision-analysis.png",
    source: "GitHub",
    category: "开源AI",
    date: "2天前",
    comments: 154,
  },
  {
    id: "5",
    title: "AutoGPT 2.0：自主AI代理的新突破",
    summary:
      "AutoGPT发布2.0版本，引入了更强大的自主规划和执行能力，能够完成更复杂的多步骤任务，并支持插件系统扩展功能。",
    image: "/placeholder.svg?height=400&width=600&query=autonomous AI agent working",
    source: "Product Hunt",
    category: "AI工具",
    date: "3天前",
    comments: 67,
  },
  {
    id: "6",
    title: "DeepMind发布AlphaCode 2：AI编程再创新高",
    summary:
      "DeepMind的AlphaCode 2在编程竞赛中达到了全球顶尖程序员的水平，能够解决复杂的算法问题并生成高质量、可维护的代码。",
    image: "/placeholder.svg?height=400&width=600&query=AI coding programming computer screen",
    source: "Hacker News",
    category: "AI编程",
    date: "3天前",
    comments: 203,
  },
  {
    id: "7",
    title: "Stability AI推出Stable Diffusion 3.0：图像生成新标杆",
    summary:
      "Stable Diffusion 3.0带来了革命性的图像质量提升，支持更精确的文本提示理解，并能生成更加逼真、细节丰富的图像。",
    image: "/placeholder.svg?height=400&width=600&query=AI generated art colorful abstract",
    source: "Product Hunt",
    category: "AI生成",
    date: "4天前",
    comments: 118,
  },
  {
    id: "8",
    title: "微软发布Azure AI Studio：企业级AI开发平台",
    summary: "微软推出Azure AI Studio，整合了多种AI模型和工具，简化了企业级AI应用的开发、部署和监控流程。",
    image: "/placeholder.svg?height=400&width=600&query=enterprise AI development platform",
    source: "Zeli",
    category: "AI平台",
    date: "5天前",
    comments: 45,
  },
]

export const mockTrends = [
  {
    title: "多模态AI模型成为主流",
    category: "AI趋势",
    image: "/placeholder.svg?height=400&width=600&query=multimodal AI visualization futuristic",
  },
  {
    title: "AI代理技术快速发展",
    category: "新兴技术",
    image: "/placeholder.svg?height=400&width=600&query=AI agents network connected digital",
  },
  {
    title: "开源LLM生态系统扩张",
    category: "开源AI",
    image: "/placeholder.svg?height=400&width=600&query=open source AI community collaboration",
  },
  {
    title: "AI在医疗领域的突破应用",
    category: "AI应用",
    image: "/placeholder.svg?height=400&width=600&query=AI in healthcare medical technology",
  },
  {
    title: "量子计算与AI融合加速",
    category: "前沿研究",
    image: "/placeholder.svg?height=400&width=600&query=quantum computing and AI fusion",
  },
  {
    title: "AI安全与伦理成为焦点",
    category: "AI伦理",
    image: "/placeholder.svg?height=400&width=600&query=AI ethics and safety balance",
  },
]

export const mockTrendData = {
  weekly: [
    { name: "GPT-5", value: 85 },
    { name: "Claude 3.5", value: 72 },
    { name: "Llama 3", value: 68 },
    { name: "Stable Diffusion 3", value: 63 },
    { name: "AutoGPT", value: 58 },
    { name: "AlphaCode 2", value: 52 },
    { name: "Midjourney V6", value: 48 },
    { name: "Gemini Pro", value: 45 },
  ],
  monthly: [
    { name: "1月", AI: 40, ML: 24, LLM: 35 },
    { name: "2月", AI: 45, ML: 25, LLM: 40 },
    { name: "3月", AI: 50, ML: 28, LLM: 48 },
    { name: "4月", AI: 55, ML: 30, LLM: 52 },
    { name: "5月", AI: 65, ML: 32, LLM: 58 },
    { name: "6月", AI: 70, ML: 35, LLM: 65 },
    { name: "7月", AI: 75, ML: 38, LLM: 72 },
    { name: "8月", AI: 85, ML: 40, LLM: 78 },
  ],
  topics: [
    { name: "大语言模型", value: 35 },
    { name: "生成式AI", value: 25 },
    { name: "AI代理", value: 15 },
    { name: "多模态AI", value: 15 },
    { name: "AI伦理", value: 10 },
  ],
}
