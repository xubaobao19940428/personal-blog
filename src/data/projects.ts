import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: '个人博客系统',
    description: '使用React和TypeScript构建的现代化博客系统，支持Markdown编辑和响应式设计。',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/xubaobao19940428/personal-blog',
    liveUrl: 'https://blog.example.com',
    featured: true,
  },
  {
    id: '2',
    title: '任务管理应用',
    description: '一个功能完整的任务管理应用，支持拖拽排序、标签分类和团队协作。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/xubaobao19940428/task-manager',
    liveUrl: 'https://tasks.example.com',
    featured: true,
  },
  {
    id: '3',
    title: '天气应用',
    description: '实时天气查询应用，支持多城市管理和天气预警功能。',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
    githubUrl: 'https://github.com/xubaobao19940428/weather-app',
    liveUrl: 'https://weather.example.com',
  },
]; 