# AI Sniffing - AI科技资讯平台

![AI Sniffing Logo](public/logo.png)

## 项目概述

AI Sniffing是一个专注于人工智能和科技创新的资讯平台，汇聚来自Zeli、Hacker News、Product Hunt和GitHub等多个平台的最新AI科技动态，以数据驱动的方式呈现科技趋势。平台提供最新资讯、模型排行榜、热门资讯排行以及用户评论等功能。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **UI库**: shadcn/ui (基于Radix UI)
- **样式**: Tailwind CSS
- **图表**: Recharts
- **字体**: Inter (Google Fonts)
- **图标**: Lucide React
- **日期处理**: date-fns

## 项目结构

\`\`\`
ai-sniffing/
├── app/                    # Next.js App Router目录
│   ├── category/           # 分类页面
│   ├── leaderboard/        # 模型排行榜页面
│   ├── news/               # 新闻详情页面
│   ├── trends/             # 趋势分析页面
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局组件
│   ├── page.tsx            # 首页组件
│   └── not-found.tsx       # 404页面
├── components/             # 可复用组件
│   ├── ui/                 # shadcn/ui组件
│   ├── ai-sniffing-logo.tsx # 网站Logo组件
│   ├── date-range-picker.tsx # 日期范围选择器
│   ├── footer.tsx          # 页脚组件
│   ├── header.tsx          # 页头组件
│   ├── model-leaderboard.tsx # 模型排行榜组件
│   ├── news-card.tsx       # 新闻卡片组件
│   ├── news-leaderboard.tsx # 新闻排行榜组件
│   ├── theme-provider.tsx  # 主题提供者
│   ├── theme-toggle.tsx    # 主题切换按钮
│   └── trending-topics.tsx # 趋势主题组件
├── hooks/                  # 自定义钩子
│   └── use-mobile.tsx      # 移动设备检测钩子
├── lib/                    # 工具函数和数据
│   ├── mock-data.ts        # 模拟数据
│   ├── model-leaderboard-data.ts # 模型排行榜数据
│   └── utils.ts            # 工具函数
├── public/                 # 静态资源
│   └── ...                 # 图片和其他静态文件
├── types/                  # TypeScript类型定义
│   └── date-range.d.ts     # 日期范围类型定义
├── next.config.mjs         # Next.js配置
├── package.json            # 项目依赖
├── tailwind.config.ts      # Tailwind配置
└── tsconfig.json           # TypeScript配置
\`\`\`

## 安装和运行

### 前提条件

- Node.js 18.x 或更高版本
- npm 或 yarn 或 pnpm

### 安装步骤

1. 克隆仓库
\`\`\`bash
git clone https://github.com/your-username/ai-sniffing.git
cd ai-sniffing
\`\`\`

2. 安装依赖
\`\`\`bash
npm install
# 或
yarn install
# 或
pnpm install
\`\`\`

3. 运行开发服务器
\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
\`\`\`

4. 构建生产版本
\`\`\`bash
npm run build
# 或
yarn build
# 或
pnpm build
\`\`\`

5. 运行生产版本
\`\`\`bash
npm start
# 或
yarn start
# 或
pnpm start
\`\`\`

## 主要功能和组件

### 页面

1. **首页 (`app/page.tsx`)**
   - 展示Hero区域、模型排行榜、热门资讯排行、最新资讯和评论区
   - 包含资讯筛选功能和日期范围选择器
   - 最新资讯区域的筛选条件（分类、来源、时间范围、日期选择器）整合在同一行，提升用户体验

2. **模型排行榜页面 (`app/leaderboard/page.tsx`)**
   - 展示AI模型的详细排行榜
   - 包含多种基准测试数据和可视化图表

3. **新闻详情页面 (`app/news/[id]/page.tsx`)**
   - 展示单条新闻的详细内容
   - 包含相关新闻推荐

4. **分类页面 (`app/category/[source]/page.tsx`)**
   - 按来源展示新闻列表
   - 包含搜索和排序功能

5. **趋势分析页面 (`app/trends/page.tsx`)**
   - 展示AI技术趋势的可视化分析
   - 包含多种图表和数据可视化

### 核心组件

1. **Header (`components/header.tsx`)**
   - 网站顶部导航栏
   - 包含Logo、导航链接、搜索框和主题切换按钮

2. **Footer (`components/footer.tsx`)**
   - 网站底部信息
   - 包含版权信息和社交媒体链接

3. **NewsCard (`components/news-card.tsx`)**
   - 新闻卡片组件，用于展示单条新闻的预览
   - 包含标题、摘要、图片、来源和日期等信息

4. **ModelLeaderboard (`components/model-leaderboard.tsx`)**
   - 模型排行榜组件，展示AI模型的性能排名
   - 包含多种排序和筛选选项

5. **AISniffingLogo (`components/ai-sniffing-logo.tsx`)**
   - 网站Logo组件
   - 使用SVG实现，支持响应式设计

6. **DateRangePicker (`components/date-range-picker.tsx`)**
   - 日期范围选择器组件
   - 用于筛选特定时间范围内的新闻

### 自定义钩子

1. **useMobile (`hooks/use-mobile.tsx`)**
   - 检测当前设备是否为移动设备
   - 用于响应式布局和条件渲染

## 数据流和状态管理

项目主要使用React的useState和useEffect钩子进行状态管理。主要的状态包括：

1. **筛选状态**：用于筛选新闻列表的分类、来源和时间范围
2. **日期范围**：用于选择特定时间范围内的新闻
3. **评论状态**：管理用户评论的添加和显示
4. **UI状态**：管理UI元素的显示和隐藏，如移动菜单和日期选择器

## 样式和主题

项目使用Tailwind CSS进行样式管理，并支持亮色和暗色主题。主题切换功能通过next-themes库实现。

主要的自定义样式定义在`app/globals.css`中，包括：

1. **主题变量**：定义亮色和暗色主题的颜色变量
2. **网格背景**：定义网站的网格背景样式
3. **卡片动画**：定义新闻卡片的悬停动画
4. **毛玻璃效果**：定义毛玻璃风格的UI元素
5. **评论区样式**：定义评论卡片的荧光效果和动画

## 添加新功能的指南

### 添加新页面

1. 在`app`目录下创建新的页面目录和文件
2. 如果需要动态路由，使用`[param]`命名约定
3. 确保添加相应的loading.tsx文件用于加载状态

### 添加新组件

1. 在`components`目录下创建新的组件文件
2. 使用TypeScript定义组件的props接口
3. 确保组件是响应式的，并支持亮色和暗色主题

### 添加新数据源

1. 在`lib`目录下的相应数据文件中添加新的数据结构
2. 确保数据结构与现有的模型兼容
3. 更新相关组件以使用新的数据源

## 部署

项目可以部署到Vercel平台，只需连接GitHub仓库并按照Vercel的指导进行设置。

## 贡献指南

1. Fork仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

MIT License - 详见LICENSE文件

## 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- 邮箱: contact@aisniffing.com
- GitHub: [https://github.com/your-username/ai-sniffing](https://github.com/your-username/ai-sniffing)

## 更新日志

### 2024-04-19
- 优化了最新资讯区域的筛选条件布局，将分类、来源、时间范围和日期选择器整合到同一行，提升了用户体验和界面整洁度
- 调整了选择器的宽度，使其在同一行显示时更加紧凑
