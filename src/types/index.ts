export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Case {
  id: string;
  name: string;
  description: string;
  image?: string; // 可选，功能案例可无图片
  demoUrl?: string; // 演示链接
  sourceUrl?: string; // 源码链接
  route: string; // 路由路径
} 