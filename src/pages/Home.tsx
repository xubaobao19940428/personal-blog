import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles, Zap, Rocket, Code, Monitor, Smartphone, Database, Server } from 'lucide-react';
import { author } from '../data/author';
import { blogPosts } from '../data/posts';
import { projects } from '../data/projects';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const socialLinks = [
    { icon: Github, href: author.social.github, label: 'GitHub' },
    { icon: Twitter, href: author.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email' },
  ].filter(link => link.href);

  const techStack = [
    { category: '前端开发', icon: Code, skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'React', 'React Native'] },
    { category: '跨平台开发', icon: Smartphone, skills: ['Electron', '微信小程序', 'uni-app'] },
    { category: '后端开发', icon: Server, skills: ['Node.js', 'MySQL', 'Redis'] },
    { category: '工具框架', icon: Monitor, skills: ['Webpack', 'Vite', 'Pinia', 'Element Plus', 'WebRTC'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="particles gradient-bg py-20 relative overflow-hidden">
        {/* 浮动粒子 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full float-animation opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full float-animation opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full float-animation opacity-50" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-400 rounded-full float-animation opacity-30" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mb-8 glow-effect">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 slide-in-up">
              <span className="text-gradient">你好，我是 {author.name}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto fade-in" style={{animationDelay: '0.3s'}}>
              专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术，擅长构建交互式的Web应用。
              具备跨平台开发经验，包括Electron桌面应用和微信小程序的开发。
            </p>
            
            <div className="flex justify-center space-x-4 mb-8 fade-in" style={{animationDelay: '0.6s'}}>
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-effect hover-lift btn-animated"
                  aria-label={label}
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: '1s'}}>
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
              >
                阅读博客
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 glass-effect text-white rounded-lg hover:bg-white/20 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
              >
                查看项目
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                关于我
              </h2>
              <Sparkles className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-primary-600" />
                  专业技能
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.1s'}}>
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术
                  </li>
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.2s'}}>
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    具备跨平台开发经验，包括Electron桌面应用和微信小程序开发
                  </li>
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.3s'}}>
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    正在深入学习React Native和Node.js，探索全栈开发
                  </li>
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.4s'}}>
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    有SSH连接桌面应用和远程桌面控制应用的开发经验
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary-600" />
                  持续学习
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.5s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    React Native：深入理解跨平台移动应用开发
                  </li>
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.6s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Node.js全栈开发：学习后端API搭建和数据库集成
                  </li>
                  <li className="flex items-center slide-in-up" style={{animationDelay: '0.7s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    WebRTC：已在项目中集成实现跨设备通信和屏幕共享
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-primary-600" />
                  技术栈
                </h3>
                <div className="space-y-4">
                  {techStack.map((stack, index) => (
                    <div key={stack.category} className="slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-center mb-2">
                        <stack.icon className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="font-medium text-gray-900 dark:text-white">{stack.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm hover-lift"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-primary-600" />
                  开发工具
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="slide-in-up" style={{animationDelay: '0.1s'}}>• Visual Studio Code</div>
                  <div className="slide-in-up" style={{animationDelay: '0.2s'}}>• Git & GitHub</div>
                  <div className="slide-in-up" style={{animationDelay: '0.3s'}}>• Trello, Notion</div>
                  <div className="slide-in-up" style={{animationDelay: '0.4s'}}>• Docker（学习中）</div>
                  <div className="slide-in-up" style={{animationDelay: '0.5s'}}>• GitHub Actions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                精选文章
              </h2>
              <Sparkles className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              分享我在前端开发、React、TypeScript等方面的经验和见解
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <BlogCard post={post} featured={post.featured} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 btn-animated hover-lift font-semibold"
            >
              查看所有文章
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 particles bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                精选项目
              </h2>
              <Zap className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              展示我的一些开源项目和技术实践
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 btn-animated hover-lift font-semibold"
            >
              查看所有项目
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">让我们一起创造</span>
            <span className="text-gradient"> 精彩的作品</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            如果您对我的工作感兴趣，或者想要合作，欢迎随时联系我
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 btn-animated hover-lift font-semibold"
            >
              了解更多
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`mailto:${author.social.email}`}
              className="inline-flex items-center px-8 py-4 glass-effect text-white rounded-lg hover:bg-white/20 transition-all duration-300 btn-animated hover-lift font-semibold"
            >
              联系我
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 