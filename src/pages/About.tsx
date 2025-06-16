import { Github, Twitter, Linkedin, Mail, MapPin, Calendar, Code, BookOpen, Users, Award, Target, Heart, Coffee } from 'lucide-react';
import { author } from '../data/author';

export default function About() {
  const socialLinks = [
    { icon: Github, href: author.social.github, label: 'GitHub' },
    { icon: Twitter, href: author.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email' },
  ].filter(link => link.href);

  const skills = [
    { 
      category: '前端框架', 
      items: ['React', 'TypeScript', 'Vue.js', 'Next.js', 'Nuxt.js'],
      description: '熟练掌握主流前端框架，具备大型项目架构经验'
    },
    { 
      category: '样式与UI', 
      items: ['Tailwind CSS', 'Sass/SCSS', 'Ant Design', 'Element UI', 'Material-UI'],
      description: '精通现代CSS技术，能够构建美观且响应式的用户界面'
    },
    { 
      category: '构建工具', 
      items: ['Webpack', 'Vite', 'Rollup', 'Babel', 'ESLint'],
      description: '深入理解前端工程化，能够优化构建流程和开发体验'
    },
    { 
      category: '移动端开发', 
      items: ['React Native', '微信小程序', 'Electron', 'PWA'],
      description: '具备跨平台开发经验，能够构建原生移动应用和桌面应用'
    },
    { 
      category: '后端技术', 
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'],
      description: '了解后端技术栈，能够独立完成全栈项目开发'
    },
    { 
      category: '开发工具', 
      items: ['Git', 'Docker', 'Jest', 'Cypress', 'Jenkins'],
      description: '熟练使用版本控制和CI/CD工具，具备自动化测试经验'
    },
  ];

  const experiences = [
    {
      title: '高级前端开发工程师',
      company: '某科技公司',
      period: '2022 - 至今',
      description: '负责公司核心产品的前端开发，使用React和TypeScript构建高性能的Web应用。',
      achievements: [
        '主导重构了公司核心产品的前端架构，提升了50%的页面加载速度',
        '建立了完善的前端组件库，提高了团队开发效率30%',
        '优化了前端构建流程，将构建时间从15分钟缩短到3分钟',
        '指导初级开发人员，组织技术分享会，提升团队整体技术水平'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Jest']
    },
    {
      title: '前端开发工程师',
      company: '某创业公司',
      period: '2020 - 2022',
      description: '参与产品从0到1的开发过程，专注于前端界面开发和用户体验优化。',
      achievements: [
        '从零开始搭建了公司第一个Web应用，支持10万+用户访问',
        '实现了复杂的数据可视化功能，提升了用户决策效率',
        '优化了移动端适配，移动端用户转化率提升40%',
        '建立了前端代码规范，提高了代码质量和可维护性'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Element UI', 'ECharts', 'Webpack']
    },
    {
      title: '前端开发工程师',
      company: '某互联网公司',
      period: '2018 - 2020',
      description: '专注于用户界面的开发和优化，提升用户体验。',
      achievements: [
        '参与电商平台的开发，负责商品展示和购物车功能',
        '实现了响应式设计，确保在各种设备上的良好体验',
        '优化了页面性能，首屏加载时间减少60%',
        '参与A/B测试，通过数据驱动优化用户界面'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    },
  ];

  const achievements = [
    {
      title: '技术成就',
      items: [
        '7年前端开发经验，参与过20+个商业项目',
        '开源项目贡献者，GitHub获得500+星标',
        '技术博客作者，累计阅读量10万+',
        '前端技术社区活跃成员，多次参与技术分享'
      ]
    },
    {
      title: '项目成果',
      items: [
        '主导开发的企业级应用服务100万+用户',
        '优化的网站性能提升60%，用户体验显著改善',
        '建立的组件库被多个项目复用，节省开发时间',
        '指导的团队成员在技术能力上都有显著提升'
      ]
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: '所在地', value: '杭州，中国' },
    { icon: Calendar, label: '工作经验', value: '7年' },
    { icon: Code, label: '专业领域', value: '前端开发' },
    { icon: BookOpen, label: '教育背景', value: '农业建筑环境与能源工程（农村能源）' },
    { icon: Award, label: '技术认证', value: '阿里云前端开发认证' },
    { icon: Target, label: '职业目标', value: '成为前端技术专家' }
  ];

  const interests = [
    { icon: Code, label: '开源贡献', description: '积极参与开源项目，贡献代码和文档' },
    { icon: BookOpen, label: '技术阅读', description: '关注前端技术发展趋势，持续学习新技术' },
    { icon: Users, label: '技术分享', description: '在技术社区分享经验，帮助他人成长' },
    { icon: Heart, label: '摄影旅行', description: '用镜头记录美好瞬间，探索世界各地的风景' },
    { icon: Coffee, label: '咖啡文化', description: '享受咖啡时光，在慢节奏中思考技术问题' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-8 shadow-lg">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            关于我
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {author.bio}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            我是一名充满激情的前端开发工程师，专注于创造优秀的用户体验和高质量的代码。
            在过去的7年里，我参与开发了多个大型商业项目，积累了丰富的实战经验。
            我相信技术的力量可以改变世界，也一直在努力通过代码让这个世界变得更好。
          </p>
          
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="w-7 h-7 text-gray-600 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary-600" />
              个人信息
            </h2>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <info.icon className="w-5 h-5 text-primary-600" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{info.label}</span>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-primary-600" />
              兴趣爱好
            </h2>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div className="flex items-center space-x-3 mb-2">
                    <interest.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-gray-900 dark:text-white">{interest.label}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm ml-8">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            技能专长
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skillGroup.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {skillGroup.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            工作经历
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900 px-4 py-2 rounded-lg">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {experience.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">主要成就：</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">使用技术：</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            成就与成果
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary-600" />
                  {achievement.title}
                </h3>
                <ul className="space-y-4">
                  {achievement.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            联系我
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            如果您对我的工作感兴趣，想要合作项目，或者有任何技术问题想要讨论，欢迎随时联系我。
            我很乐意与您交流技术，分享经验，或者探讨新的合作机会。
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 