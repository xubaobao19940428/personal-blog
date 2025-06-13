# 个人博客网站

一个使用 React + TypeScript + Tailwind CSS 构建的现代化个人博客网站。

## 功能特性

- 🎨 **现代化设计** - 使用 Tailwind CSS 构建的响应式设计
- 🌙 **深色模式** - 支持浅色/深色主题切换
- 📱 **移动端适配** - 完全响应式，支持各种设备
- 🔍 **搜索功能** - 博客文章和项目的搜索和筛选
- 📝 **Markdown 支持** - 使用 React Markdown 渲染文章内容
- 🏷️ **标签系统** - 文章和项目的标签分类
- ⚡ **快速加载** - 基于 Vite 构建，开发体验优秀

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由**: React Router DOM
- **图标**: Lucide React
- **Markdown**: React Markdown
- **代码高亮**: Rehype Highlight

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.tsx      # 网站头部
│   ├── Footer.tsx      # 网站底部
│   ├── BlogCard.tsx    # 博客文章卡片
│   └── ProjectCard.tsx # 项目卡片
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── Blog.tsx        # 博客列表页
│   ├── BlogPost.tsx    # 博客文章详情页
│   ├── Projects.tsx    # 项目展示页
│   └── About.tsx       # 关于页面
├── data/               # 模拟数据
│   ├── posts.ts        # 博客文章数据
│   ├── projects.ts     # 项目数据
│   └── author.ts       # 作者信息
├── types/              # TypeScript 类型定义
│   └── index.ts
└── App.tsx             # 主应用组件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 自定义配置

### 修改作者信息

编辑 `src/data/author.ts` 文件：

```typescript
export const author: Author = {
  name: '你的名字',
  bio: '你的个人简介',
  avatar: '你的头像URL',
  social: {
    github: '你的GitHub链接',
    twitter: '你的Twitter链接',
    linkedin: '你的LinkedIn链接',
    email: '你的邮箱',
  },
};
```

### 添加博客文章

在 `src/data/posts.ts` 中添加新的文章：

```typescript
{
  id: 'unique-id',
  title: '文章标题',
  excerpt: '文章摘要',
  content: 'Markdown格式的文章内容',
  author: '作者名',
  publishedAt: '2024-01-01',
  tags: ['标签1', '标签2'],
  readTime: 5,
  featured: false, // 是否为精选文章
}
```

### 添加项目

在 `src/data/projects.ts` 中添加新的项目：

```typescript
{
  id: 'unique-id',
  title: '项目名称',
  description: '项目描述',
  image: '项目截图URL',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'GitHub链接',
  liveUrl: '在线预览链接',
  featured: false, // 是否为精选项目
}
```

### 自定义主题颜色

在 `tailwind.config.js` 中修改主题颜色：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... 其他色阶
        900: '#0c4a6e',
      },
    },
  },
}
```

## 部署

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 选择 Vite 框架
4. 部署完成

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令设置为 `npm run build`
4. 发布目录设置为 `dist`
5. 部署完成

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题，请通过以下方式联系：

- Email: your-email@example.com
- GitHub: [你的GitHub](https://github.com/your-username)
