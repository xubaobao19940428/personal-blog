import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles, Zap, Rocket, Code, Monitor, Smartphone, Database, Server, Star, TrendingUp, Award, Users, Globe, Shield, Zap as Lightning } from 'lucide-react';
import { author } from '../data/author';
import { blogPosts } from '../data/posts';
import { projects } from '../data/projects';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { 
  SimpleAnimatedElement, 
  SimpleStaggeredContainer, 
  SimpleFloatingParticles, 
  SimpleTextReveal, 
  SimpleMagneticButton 
} from '../components/SimpleAnimations';

export default function Home() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const socialLinks = [
    { icon: Github, href: author.social.github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Twitter, href: author.social.twitter, label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email', color: 'hover:bg-red-500' },
  ].filter(link => link.href);

  const techStack = [
    { category: '前端开发', icon: Code, skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'React', 'React Native'], color: 'from-blue-500 to-cyan-500' },
    { category: '跨平台开发', icon: Smartphone, skills: ['Electron', '微信小程序', 'uni-app'], color: 'from-purple-500 to-pink-500' },
    { category: '后端开发', icon: Server, skills: ['Node.js', 'MySQL', 'Redis'], color: 'from-green-500 to-emerald-500' },
    { category: '工具框架', icon: Monitor, skills: ['Webpack', 'Vite', 'Pinia', 'Element Plus', 'WebRTC'], color: 'from-orange-500 to-red-500' },
  ];

  const stats = [
    { icon: Star, label: '7年经验', value: '7+', description: '前端开发经验' },
    { icon: TrendingUp, label: '20+项目', value: '20+', description: '商业项目经验' },
    { icon: Users, label: '100万+', value: '100万+', description: '用户服务' },
    { icon: Award, label: '技术专家', value: '专家', description: '前端技术专家' },
  ];

  const features = [
    {
      icon: Code,
      title: '前端开发',
      description: '精通现代前端技术栈，构建高性能Web应用',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Smartphone,
      title: '跨平台开发',
      description: 'Electron桌面应用和微信小程序开发经验',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Server,
      title: '全栈能力',
      description: 'Node.js后端开发和数据库设计能力',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Shield,
      title: '性能优化',
      description: '专注应用性能优化和用户体验提升',
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

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
          <div className="text-center">
            <SimpleAnimatedElement 
              animationType="scaleIn" 
              delay={0.2}
              className="mx-auto w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-8 glow-effect backdrop-blur-sm border border-white/20"
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
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
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
              className="flex justify-center space-x-4 mb-12"
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
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleStaggeredContainer 
            stagger={0.1}
            animationType="scaleIn"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </SimpleStaggeredContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Lightning className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                核心能力
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Lightning className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              专注于前端技术栈，具备全栈开发能力，致力于构建高性能、用户友好的现代化应用
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 dark:border-gray-700">
                  <div className={`w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </SimpleStaggeredContainer>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm overflow-hidden">
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
                关于我
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </SimpleAnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SimpleStaggeredContainer 
              stagger={0.2}
              animationType="slideLeft"
              className="space-y-8"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  专业技能
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>具备跨平台开发经验，包括Electron桌面应用和微信小程序开发</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>正在深入学习React Native和Node.js，探索移动端开发</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>有SSH连接桌面应用和远程桌面控制应用的开发经验</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  持续学习
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>React Native：深入理解跨平台移动应用开发</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Node.js后端开发：学习后端API搭建和数据库集成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>WebRTC：已在项目中集成实现跨设备通信和屏幕共享</span>
                  </li>
                </ul>
              </div>
            </SimpleStaggeredContainer>
            
            <SimpleStaggeredContainer 
              stagger={0.2}
              animationType="slideRight"
              className="space-y-8"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  技术栈
                </h3>
                <div className="space-y-6">
                  {techStack.map((stack, index) => (
                    <div key={stack.category} className="slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mr-3`}>
                          <stack.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{stack.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-primary-100 hover:to-primary-200 hover:text-primary-800 dark:hover:from-primary-900 dark:hover:to-primary-800 dark:hover:text-primary-200 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  项目经验
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>开发了多个Vue和React项目，包括电商平台和后台管理系统</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>使用Electron开发了桌面应用，集成SSH连接和远程控制功能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>开发了微信小程序，实现用户管理和数据统计功能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>正在开发React Native应用，探索移动端开发新领域</span>
                  </li>
                </ul>
              </div>
            </SimpleStaggeredContainer>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                精选博客
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              分享我的技术心得、学习笔记和项目经验，帮助更多开发者成长
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured={true} />
            ))}
          </SimpleStaggeredContainer>
          
          <SimpleAnimatedElement 
            animationType="slideUp" 
            delay={0.6}
            className="text-center mt-16"
          >
            <SimpleMagneticButton
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 btn-animated hover-lift font-semibold text-lg shadow-2xl"
              onClick={() => window.location.href = '/blog'}
            >
              <span className="mr-2">查看更多文章</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </SimpleMagneticButton>
          </SimpleAnimatedElement>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                精选项目
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              展示我的技术能力和项目成果，每一个项目都凝聚着我的心血
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleStaggeredContainer>
          
          <SimpleAnimatedElement 
            animationType="slideUp" 
            delay={0.6}
            className="text-center mt-16"
          >
            <SimpleMagneticButton
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 btn-animated hover-lift font-semibold text-lg shadow-2xl"
              onClick={() => window.location.href = '/projects'}
            >
              <Rocket className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>查看更多项目</span>
            </SimpleMagneticButton>
          </SimpleAnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              联系我
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              如果您对我的工作感兴趣，想要合作项目，或者有任何技术问题想要讨论，欢迎随时联系我。
              <br />
              我很乐意与您交流技术，分享经验，或者探讨新的合作机会。
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.1}
            animationType="scaleIn"
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <SimpleMagneticButton
                key={label}
                className={`p-6 rounded-2xl glass-effect hover-lift btn-animated transition-all duration-300 ${color} border border-white/20`}
                onClick={() => window.open(href, '_blank')}
              >
                <Icon className="w-8 h-8 text-white" />
              </SimpleMagneticButton>
            ))}
          </SimpleStaggeredContainer>
        </div>
      </section>
    </div>
  );
} 