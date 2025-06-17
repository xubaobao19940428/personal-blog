import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles, Zap, Rocket, Code, Monitor, Smartphone, Database, Server, Star, TrendingUp, Award, Users, Globe, Shield, Zap as Lightning, User, X } from 'lucide-react';
import { author } from '../data/author';
import { blogPosts } from '../data/posts';
import { projects } from '../data/projects';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { RobotScene } from '../components/RobotScene';
import DigitalHuman from '../components/DigitalHuman';
import { 
  SimpleAnimatedElement, 
  SimpleStaggeredContainer, 
  SimpleFloatingParticles, 
  SimpleTextReveal, 
  SimpleMagneticButton 
} from '../components/SimpleAnimations';

export default function Home() {
  const [showDigitalHuman, setShowDigitalHuman] = useState(false);
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const socialLinks = [
    { icon: Github, href: author.social.github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Twitter, href: author.social.twitter, label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email', color: 'hover:bg-red-500' },
  ].filter(link => link.href);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="particles gradient-bg py-32 relative overflow-hidden">
        <SimpleFloatingParticles />
        
        {/* 动态背景网格 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-1">
              <SimpleAnimatedElement 
                animationType="scaleIn" 
                delay={0.2}
                className="mx-auto lg:mx-0 w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-8 glow-effect backdrop-blur-sm border border-white/20"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-white/20"
                />
              </SimpleAnimatedElement>
              
              <SimpleTextReveal 
                delay={0.5}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                <span className="text-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  你好，我是 {author.name}
                </span>
              </SimpleTextReveal>
              
              <SimpleAnimatedElement 
                animationType="slideUp" 
                delay={0.8}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
              >
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-medium">
                  专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术，擅长构建交互式的Web应用。
                </span>
                <br />
                <span className="text-white/80">
                  具备跨平台开发经验，包括Electron桌面应用和微信小程序的开发。
                </span>
              </SimpleAnimatedElement>
              
              <SimpleStaggeredContainer 
                stagger={0.1}
                animationType="scaleIn"
                className="flex justify-center lg:justify-start space-x-4 mb-12"
              >
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <SimpleMagneticButton
                    key={label}
                    className={`p-4 rounded-xl glass-effect hover-lift btn-animated transition-all duration-300 ${color}`}
                    onClick={() => window.open(href, '_blank')}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </SimpleMagneticButton>
                ))}
              </SimpleStaggeredContainer>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <SimpleAnimatedElement animationType="slideLeft" delay={1.2}>
                  <SimpleMagneticButton
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-white to-blue-50 text-gray-900 rounded-2xl hover:from-blue-50 hover:to-white transition-all duration-300 btn-animated hover-lift font-semibold text-lg shadow-2xl"
                    onClick={() => window.location.href = '/blog'}
                  >
                    <span className="mr-2">阅读博客</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </SimpleMagneticButton>
                </SimpleAnimatedElement>
                
                <SimpleAnimatedElement animationType="slideRight" delay={1.4}>
                  <SimpleMagneticButton
                    className="group inline-flex items-center px-10 py-5 glass-effect text-white rounded-2xl hover:bg-white/20 transition-all duration-300 btn-animated hover-lift font-semibold text-lg border border-white/20"
                    onClick={() => window.location.href = '/projects'}
                  >
                    <Rocket className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span>查看项目</span>
                  </SimpleMagneticButton>
                </SimpleAnimatedElement>
              </div>
            </div>

            {/* 3D模型 */}
            <div className="order-2 lg:order-2 mt-8 lg:mt-0">
              <SimpleAnimatedElement 
                animationType="scaleIn" 
                delay={0.6}
                className="w-full h-[300px] md:h-[400px] lg:h-[600px] relative"
              >
                <RobotScene />
              </SimpleAnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据模块 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">7+</div>
              <div className="text-lg text-gray-500 dark:text-gray-300">7年经验</div>
              <div className="text-sm text-gray-400">前端开发经验</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
              <div className="text-lg text-gray-500 dark:text-gray-300">20+项目</div>
              <div className="text-sm text-gray-400">商业项目经验</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">100万+</div>
              <div className="text-lg text-gray-500 dark:text-gray-300">100万+</div>
              <div className="text-sm text-gray-400">用户服务</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">专家</div>
              <div className="text-lg text-gray-500 dark:text-gray-300">技术专家</div>
              <div className="text-sm text-gray-400">前端技术专家</div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心能力模块 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-2xl mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">核心能力</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              专注于前端技术栈，具备全栈开发能力，致力于构建高性能、用户友好的现代化应用
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow text-center">
              <Code className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white">前端开发</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">
                精通现代前端技术栈，构建高性能Web应用
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow text-center">
              <Smartphone className="w-8 h-8 mx-auto mb-4 text-purple-500" />
              <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white">跨平台开发</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">
                Electron桌面应用和微信小程序开发经验
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow text-center">
              <Database className="w-8 h-8 mx-auto mb-4 text-green-500" />
              <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white">全栈能力</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">
                Node.js后端开发和数据库设计能力
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow text-center">
              <Shield className="w-8 h-8 mx-auto mb-4 text-orange-500" />
              <div className="text-xl font-bold mb-2 text-gray-900 dark:text-white">性能优化</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">
                专注应用性能优化和用户体验提升
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                精选文章
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              分享前端开发经验、技术见解和最佳实践
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </SimpleStaggeredContainer>
          
          <div className="text-center mt-12">
            <SimpleAnimatedElement animationType="slideUp" delay={0.8}>
              <Link 
                to="/blog" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover-lift"
              >
                <span className="mr-2">查看所有文章</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </SimpleAnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                精选项目
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              展示最具代表性的项目作品，体现技术实力和创新能力
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleStaggeredContainer>
          
          <div className="text-center mt-12">
            <SimpleAnimatedElement animationType="slideUp" delay={0.8}>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover-lift"
              >
                <span className="mr-2">查看所有项目</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </SimpleAnimatedElement>
          </div>
        </div>
      </section>

      {/* 浮动按钮 */}
      <div className="fixed bottom-8 right-8 z-50">
        <SimpleAnimatedElement 
          animationType="scaleIn"
          className="relative"
        >
          <button
            onClick={() => setShowDigitalHuman(!showDigitalHuman)}
            className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              showDigitalHuman 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
            }`}
          >
            {showDigitalHuman ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <User className="w-6 h-6 text-white" />
            )}
          </button>
        </SimpleAnimatedElement>
      </div>

      {/* 数字人展示区域 - 浮动显示 */}
      {showDigitalHuman && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <SimpleAnimatedElement 
            animationType="scaleIn"
            className="relative w-full max-w-4xl mx-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  我的数字分身
                </h2>
                <p className="text-lg text-white/80">
                  通过3D技术打造的个性化数字形象
                </p>
              </div>
              <div className="aspect-[4/3] w-full">
                <DigitalHuman />
              </div>
            </div>
          </SimpleAnimatedElement>
        </div>
      )}
    </div>
  );
} 