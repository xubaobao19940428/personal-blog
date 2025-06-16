import { ExternalLink, Github, Star, Eye, Code, Zap, Users, Calendar } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift border border-gray-100 dark:border-gray-700">
      {/* 渐变背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* 顶部装饰条 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* 项目状态标签 */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-800 dark:text-yellow-200 pulse-animation shadow-lg">
              <Star className="w-4 h-4 mr-2 fill-current" />
              精选项目
            </span>
          </div>
        )}
        
        {/* 技术栈预览 */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full shadow-lg border border-white/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-500 dark:text-gray-400 text-xs font-semibold rounded-full shadow-lg border border-white/20">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* 悬停时的覆盖层 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* 项目统计信息 */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white/90 text-sm font-medium">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{Math.floor(Math.random() * 5000) + 1000}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>{Math.floor(Math.random() * 100) + 20}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 50) + 5}</span>
          </div>
        </div>
      </div>
      
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {project.description}
        </p>
        
        {/* 项目特性 */}
        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
              <Code className="w-3 h-3" />
            </div>
            <span>前端开发</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center">
              <Zap className="w-3 h-3" />
            </div>
            <span>高性能</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg flex items-center justify-center">
              <Users className="w-3 h-3" />
            </div>
            <span>用户友好</span>
          </div>
        </div>
        
        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full hover:from-primary-100 hover:to-primary-200 hover:text-primary-800 dark:hover:from-primary-900 dark:hover:to-primary-800 dark:hover:text-primary-200 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* 操作按钮 */}
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>查看代码</span>
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>在线预览</span>
            </a>
          )}
        </div>
      </div>
      
      {/* 悬停时的光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* 右下角装饰 */}
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
} 