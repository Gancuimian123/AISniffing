// 模型排行榜数据

// SWE Bench 排行榜数据
export const sweBenchData = [
  { name: "Claude 3 Opus", score: 67.5, company: "Anthropic", date: "2024-03-15" },
  { name: "GPT-4o", score: 65.2, company: "OpenAI", date: "2024-04-10" },
  { name: "Claude 3 Sonnet", score: 62.8, company: "Anthropic", date: "2024-03-15" },
  { name: "Gemini 1.5 Pro", score: 61.3, company: "Google", date: "2024-03-21" },
  { name: "GPT-4", score: 59.7, company: "OpenAI", date: "2023-11-06" },
  { name: "Claude 3 Haiku", score: 57.4, company: "Anthropic", date: "2024-03-15" },
  { name: "Gemini 1.0 Ultra", score: 55.9, company: "Google", date: "2023-12-13" },
  { name: "Llama 3 70B", score: 54.2, company: "Meta", date: "2024-04-18" },
  { name: "GPT-3.5 Turbo", score: 52.8, company: "OpenAI", date: "2023-11-06" },
  { name: "Llama 3 8B", score: 48.5, company: "Meta", date: "2024-04-18" },
  { name: "Mistral Large", score: 53.1, company: "Mistral AI", date: "2024-02-26" },
  { name: "Mistral Medium", score: 49.7, company: "Mistral AI", date: "2024-02-26" },
  { name: "Mixtral 8x7B", score: 47.3, company: "Mistral AI", date: "2023-12-11" },
  { name: "Llama 2 70B", score: 45.9, company: "Meta", date: "2023-07-18" },
  { name: "Gemini 1.0 Pro", score: 44.6, company: "Google", date: "2023-12-13" },
]

// KCORES LLM Arena 排行榜数据
export const kcoresArenaData = {
  // 蛇坑测试 (Snake Pit) - 测试模型在复杂推理任务中的表现
  snakePit: [
    { name: "Claude 3 Opus", score: 92.7, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-4o", score: 91.5, company: "OpenAI", date: "2024-04-10" },
    { name: "Claude 3 Sonnet", score: 87.3, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.5 Pro", score: 85.9, company: "Google", date: "2024-03-21" },
    { name: "GPT-4", score: 84.2, company: "OpenAI", date: "2023-11-06" },
    { name: "Llama 3 70B", score: 79.8, company: "Meta", date: "2024-04-18" },
    { name: "Mistral Large", score: 78.5, company: "Mistral AI", date: "2024-02-26" },
    { name: "Claude 3 Haiku", score: 77.1, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.0 Ultra", score: 76.4, company: "Google", date: "2023-12-13" },
    { name: "Mistral Medium", score: 72.9, company: "Mistral AI", date: "2024-02-26" },
  ],

  // 太阳系测试 (Solar System) - 测试模型在科学知识和准确性方面的表现
  solarSystem: [
    { name: "GPT-4o", score: 94.8, company: "OpenAI", date: "2024-04-10" },
    { name: "Claude 3 Opus", score: 93.5, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.5 Pro", score: 91.2, company: "Google", date: "2024-03-21" },
    { name: "GPT-4", score: 89.7, company: "OpenAI", date: "2023-11-06" },
    { name: "Claude 3 Sonnet", score: 88.3, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.0 Ultra", score: 85.9, company: "Google", date: "2023-12-13" },
    { name: "Mistral Large", score: 83.4, company: "Mistral AI", date: "2024-02-26" },
    { name: "Llama 3 70B", score: 82.1, company: "Meta", date: "2024-04-18" },
    { name: "Claude 3 Haiku", score: 80.7, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-3.5 Turbo", score: 78.2, company: "OpenAI", date: "2023-11-06" },
  ],

  // 曼德尔布罗特集合测试 (Mandelbrot Set) - 测试模型在数学和算法方面的能力
  mandelbrotSet: [
    { name: "Claude 3 Opus", score: 89.3, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-4o", score: 88.7, company: "OpenAI", date: "2024-04-10" },
    { name: "Gemini 1.5 Pro", score: 86.2, company: "Google", date: "2024-03-21" },
    { name: "GPT-4", score: 84.9, company: "OpenAI", date: "2023-11-06" },
    { name: "Claude 3 Sonnet", score: 82.5, company: "Anthropic", date: "2024-03-15" },
    { name: "Mistral Large", score: 79.8, company: "Mistral AI", date: "2024-02-26" },
    { name: "Llama 3 70B", score: 78.3, company: "Meta", date: "2024-04-18" },
    { name: "Gemini 1.0 Ultra", score: 77.1, company: "Google", date: "2023-12-13" },
    { name: "Claude 3 Haiku", score: 75.6, company: "Anthropic", date: "2024-03-15" },
    { name: "Mistral Medium", score: 73.2, company: "Mistral AI", date: "2024-02-26" },
  ],

  // 火星任务测试 (Mars Mission) - 测试模型在多步骤规划和决策方面的能力
  marsMission: [
    { name: "GPT-4o", score: 90.6, company: "OpenAI", date: "2024-04-10" },
    { name: "Claude 3 Opus", score: 89.8, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.5 Pro", score: 87.3, company: "Google", date: "2024-03-21" },
    { name: "Claude 3 Sonnet", score: 85.9, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-4", score: 84.2, company: "OpenAI", date: "2023-11-06" },
    { name: "Llama 3 70B", score: 80.7, company: "Meta", date: "2024-04-18" },
    { name: "Gemini 1.0 Ultra", score: 79.5, company: "Google", date: "2023-12-13" },
    { name: "Mistral Large", score: 78.1, company: "Mistral AI", date: "2024-02-26" },
    { name: "Claude 3 Haiku", score: 76.4, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-3.5 Turbo", score: 73.8, company: "OpenAI", date: "2023-11-06" },
  ],

  // 弹跳球测试 (Bouncing Ball) - 测试模型在物理模拟和空间推理方面的能力
  bouncingBall: [
    { name: "Claude 3 Opus", score: 91.2, company: "Anthropic", date: "2024-03-15" },
    { name: "GPT-4o", score: 90.5, company: "OpenAI", date: "2024-04-10" },
    { name: "Gemini 1.5 Pro", score: 88.7, company: "Google", date: "2024-03-21" },
    { name: "GPT-4", score: 86.3, company: "OpenAI", date: "2023-11-06" },
    { name: "Claude 3 Sonnet", score: 84.9, company: "Anthropic", date: "2024-03-15" },
    { name: "Gemini 1.0 Ultra", score: 82.4, company: "Google", date: "2023-12-13" },
    { name: "Llama 3 70B", score: 80.1, company: "Meta", date: "2024-04-18" },
    { name: "Mistral Large", score: 78.6, company: "Mistral AI", date: "2024-02-26" },
    { name: "Claude 3 Haiku", score: 77.2, company: "Anthropic", date: "2024-03-15" },
    { name: "Mistral Medium", score: 74.8, company: "Mistral AI", date: "2024-02-26" },
  ],
}

// 综合排行榜数据 - 基于各项测试的加权平均分
export const overallLeaderboardData = [
  { name: "Claude 3 Opus", score: 91.4, company: "Anthropic", date: "2024-03-15" },
  { name: "GPT-4o", score: 90.8, company: "OpenAI", date: "2024-04-10" },
  { name: "Gemini 1.5 Pro", score: 87.9, company: "Google", date: "2024-03-21" },
  { name: "Claude 3 Sonnet", score: 85.7, company: "Anthropic", date: "2024-03-15" },
  { name: "GPT-4", score: 85.1, company: "OpenAI", date: "2023-11-06" },
  { name: "Llama 3 70B", score: 80.3, company: "Meta", date: "2024-04-18" },
  { name: "Gemini 1.0 Ultra", score: 79.8, company: "Google", date: "2023-12-13" },
  { name: "Mistral Large", score: 79.2, company: "Mistral AI", date: "2024-02-26" },
  { name: "Claude 3 Haiku", score: 77.5, company: "Anthropic", date: "2024-03-15" },
  { name: "GPT-3.5 Turbo", score: 73.6, company: "OpenAI", date: "2023-11-06" },
  { name: "Mistral Medium", score: 72.9, company: "Mistral AI", date: "2024-02-26" },
  { name: "Llama 3 8B", score: 70.4, company: "Meta", date: "2024-04-18" },
  { name: "Mixtral 8x7B", score: 69.8, company: "Mistral AI", date: "2023-12-11" },
  { name: "Gemini 1.0 Pro", score: 68.5, company: "Google", date: "2023-12-13" },
  { name: "Llama 2 70B", score: 67.2, company: "Meta", date: "2023-07-18" },
]

// 模型公司颜色映射
export const companyColors = {
  OpenAI: "#00A67E",
  Anthropic: "#B033FF",
  Google: "#4285F4",
  Meta: "#0668E1",
  "Mistral AI": "#7A5AF8",
  Other: "#6E7681",
}

// 测试类型描述
export const benchmarkDescriptions = {
  sweBench: "SWE Bench是一个软件工程基准测试，评估模型在代码理解、调试和生成方面的能力。",
  snakePit: "蛇坑测试评估模型在复杂推理和逻辑问题上的表现，包括陷阱问题和边缘情况处理。",
  solarSystem: "太阳系测试评估模型在科学知识、事实准确性和数据解释方面的能力。",
  mandelbrotSet: "曼德尔布罗特集合测试评估模型在数学、算法和计算思维方面的能力。",
  marsMission: "火星任务测试评估模型在多步骤规划、决策和资源管理方面的能力。",
  bouncingBall: "弹跳球测试评估模型在物理模拟、空间推理和动态系统理解方面的能力。",
}

// 历史趋势数据 - 展示主要模型在过去几个月的性能变化
export const historicalTrendData = [
  { month: "2023-11", "GPT-4": 83.2, "Claude 2": 79.5, "Llama 2 70B": 67.0, "Gemini 1.0 Pro": 68.1 },
  {
    month: "2023-12",
    "GPT-4": 83.8,
    "Claude 2": 80.1,
    "Llama 2 70B": 67.2,
    "Gemini 1.0 Pro": 68.5,
    "Mixtral 8x7B": 69.8,
    "Gemini 1.0 Ultra": 79.8,
  },
  {
    month: "2024-01",
    "GPT-4": 84.3,
    "Claude 2": 80.4,
    "Llama 2 70B": 67.2,
    "Gemini 1.0 Pro": 68.5,
    "Mixtral 8x7B": 69.8,
    "Gemini 1.0 Ultra": 79.8,
  },
  {
    month: "2024-02",
    "GPT-4": 84.7,
    "Llama 2 70B": 67.2,
    "Gemini 1.0 Pro": 68.5,
    "Mixtral 8x7B": 69.8,
    "Gemini 1.0 Ultra": 79.8,
    "Mistral Large": 79.2,
    "Mistral Medium": 72.9,
  },
  {
    month: "2024-03",
    "GPT-4": 85.1,
    "Llama 2 70B": 67.2,
    "Gemini 1.0 Pro": 68.5,
    "Mixtral 8x7B": 69.8,
    "Gemini 1.0 Ultra": 79.8,
    "Mistral Large": 79.2,
    "Mistral Medium": 72.9,
    "Claude 3 Opus": 91.4,
    "Claude 3 Sonnet": 85.7,
    "Claude 3 Haiku": 77.5,
    "Gemini 1.5 Pro": 87.9,
  },
  {
    month: "2024-04",
    "GPT-4": 85.1,
    "Llama 2 70B": 67.2,
    "Gemini 1.0 Pro": 68.5,
    "Mixtral 8x7B": 69.8,
    "Gemini 1.0 Ultra": 79.8,
    "Mistral Large": 79.2,
    "Mistral Medium": 72.9,
    "Claude 3 Opus": 91.4,
    "Claude 3 Sonnet": 85.7,
    "Claude 3 Haiku": 77.5,
    "Gemini 1.5 Pro": 87.9,
    "GPT-4o": 90.8,
    "Llama 3 70B": 80.3,
    "Llama 3 8B": 70.4,
  },
]
