import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, Star, Eye, Heart } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift border border-gray-100 dark:border-gray-700 ${
      featured ? 'ring-2 ring-primary-200 dark:ring-primary-800' : ''
    }`}>
      {/* 渐变背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* 顶部装饰条 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-8 relative z-10">
        {featured && (
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-800 dark:text-primary-200 pulse-animation shadow-lg">
              <Star className="w-4 h-4 mr-2 fill-current" />
              精选文章
            </span>
          </div>
        )}
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
          <Link to={`/blog/${post.id}`} className="block hover:no-underline">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="font-medium">{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-medium">{post.readTime} 分钟阅读</span>
            </div>
          </div>
          
          {/* 阅读量模拟 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{Math.floor(Math.random() * 1000) + 100}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-primary-100 hover:to-primary-200 hover:text-primary-800 dark:hover:from-primary-900 dark:hover:to-primary-800 dark:hover:text-primary-200 transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                +{post.tags.length - 3} 更多
              </span>
            )}
          </div>
          
          <Link
            to={`/blog/${post.id}`}
            className="group/btn flex shrink-0 items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="mr-2">阅读更多</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* 悬停时的光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* 右下角装饰 */}
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </article>
  );
} 