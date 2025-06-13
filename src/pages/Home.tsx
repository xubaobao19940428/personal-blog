import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles, Zap, Rocket, Code, Monitor, Smartphone, Database, Server } from 'lucide-react';
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="particles gradient-bg py-20 relative overflow-hidden">
        <SimpleFloatingParticles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <SimpleAnimatedElement 
              animationType="scaleIn" 
              delay={0.2}
              className="mx-auto w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mb-8 glow-effect"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </SimpleAnimatedElement>
            
            <SimpleTextReveal 
              delay={0.5}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-gradient">你好，我是 {author.name}</span>
            </SimpleTextReveal>
            
            <SimpleAnimatedElement 
              animationType="slideUp" 
              delay={0.8}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术，擅长构建交互式的Web应用。
              具备跨平台开发经验，包括Electron桌面应用和微信小程序的开发。
            </SimpleAnimatedElement>
            
            <SimpleStaggeredContainer 
              stagger={0.1}
              animationType="scaleIn"
              className="flex justify-center space-x-4 mb-8"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <SimpleMagneticButton
                  key={label}
                  className="p-3 rounded-lg glass-effect hover-lift btn-animated"
                  onClick={() => window.open(href, '_blank')}
                >
                  <Icon className="w-6 h-6 text-white" />
                </SimpleMagneticButton>
              ))}
            </SimpleStaggeredContainer>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SimpleAnimatedElement animationType="slideLeft" delay={1.2}>
                <SimpleMagneticButton
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
                  onClick={() => window.location.href = '/blog'}
                >
                  阅读博客
                  <ArrowRight className="ml-2 w-5 h-5" />
                </SimpleMagneticButton>
              </SimpleAnimatedElement>
              
              <SimpleAnimatedElement animationType="slideRight" delay={1.4}>
                <SimpleMagneticButton
                  className="inline-flex items-center px-8 py-4 glass-effect text-white rounded-lg hover:bg-white/20 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
                  onClick={() => window.location.href = '/projects'}
                >
                  查看项目
                  <Rocket className="ml-2 w-5 h-5" />
                </SimpleMagneticButton>
              </SimpleAnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                关于我
              </h2>
              <Sparkles className="w-6 h-6 text-primary-600" />
            </div>
          </SimpleAnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SimpleStaggeredContainer 
              stagger={0.2}
              animationType="slideLeft"
              className="space-y-6"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-primary-600" />
                  专业技能
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    专注于前端开发，熟练掌握HTML、CSS、JavaScript、Vue、React等技术
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    具备跨平台开发经验，包括Electron桌面应用和微信小程序开发
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    正在深入学习React Native和Node.js，探索全栈开发
                  </li>
                  <li className="flex items-center">
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
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    React Native：深入理解跨平台移动应用开发
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Node.js全栈开发：学习后端API搭建和数据库集成
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    WebRTC：已在项目中集成实现跨设备通信和屏幕共享
                  </li>
                </ul>
              </div>
            </SimpleStaggeredContainer>
            
            <SimpleStaggeredContainer 
              stagger={0.2}
              animationType="slideRight"
              className="space-y-6"
            >
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
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
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
                  <Database className="w-5 h-5 mr-2 text-primary-600" />
                  项目经验
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    开发了多个Vue和React项目，包括电商平台和后台管理系统
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    使用Electron开发了桌面应用，集成SSH连接和远程控制功能
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    开发了微信小程序，实现用户管理和数据统计功能
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    正在开发React Native应用，探索移动端开发新领域
                  </li>
                </ul>
              </div>
            </SimpleStaggeredContainer>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                精选博客
              </h2>
              <Sparkles className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              分享我的技术心得、学习笔记和项目经验
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.2}
            animationType="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </SimpleStaggeredContainer>
          
          <SimpleAnimatedElement 
            animationType="slideUp" 
            delay={0.6}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
            >
              查看更多文章
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </SimpleAnimatedElement>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                精选项目
              </h2>
              <Rocket className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              展示我的技术能力和项目成果
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
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
            >
              查看更多项目
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </SimpleAnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleAnimatedElement 
            animationType="scaleIn" 
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              联系我
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              如果您对我的项目感兴趣，或者想要合作，欢迎随时联系我
            </p>
          </SimpleAnimatedElement>
          
          <SimpleStaggeredContainer 
            stagger={0.1}
            animationType="scaleIn"
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <SimpleMagneticButton
                key={label}
                className="p-4 rounded-lg glass-effect hover-lift btn-animated"
                onClick={() => window.open(href, '_blank')}
              >
                <Icon className="w-8 h-8 text-white" />
              </SimpleMagneticButton>
            ))}
          </SimpleStaggeredContainer>
          
          <SimpleAnimatedElement 
            animationType="slideUp" 
            delay={0.8}
            className="text-center mt-8"
          >
            <SimpleMagneticButton
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 btn-animated hover-lift font-semibold text-lg"
              onClick={() => window.open(`mailto:${author.social.email}`, '_blank')}
            >
              发送邮件
              <Mail className="ml-2 w-5 h-5" />
            </SimpleMagneticButton>
          </SimpleAnimatedElement>
        </div>
      </section>
    </div>
  );
} 