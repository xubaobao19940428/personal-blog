import { Github, Twitter, Linkedin, Mail, MapPin, Calendar, Code, BookOpen, Users } from 'lucide-react';
import { author } from '../data/author';

export default function About() {
  const socialLinks = [
    { icon: Github, href: author.social.github, label: 'GitHub' },
    { icon: Twitter, href: author.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email' },
  ].filter(link => link.href);

  const skills = [
    { category: '前端开发', items: ['React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Next.js'] },
    { category: '后端开发', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'] },
    { category: '开发工具', items: ['Git', 'Docker', 'Webpack', 'Vite', 'Jest'] },
    { category: '其他技能', items: ['Linux', 'AWS', 'CI/CD', 'RESTful API', 'GraphQL'] },
  ];

  const experiences = [
    {
      title: '高级前端开发工程师',
      company: '某科技公司',
      period: '2022 - 至今',
      description: '负责公司核心产品的前端开发，使用React和TypeScript构建高性能的Web应用。',
    },
    {
      title: '全栈开发工程师',
      company: '某创业公司',
      period: '2020 - 2022',
      description: '参与产品从0到1的开发过程，负责前端和后端的开发工作。',
    },
    {
      title: '前端开发工程师',
      company: '某互联网公司',
      period: '2018 - 2020',
      description: '专注于用户界面的开发和优化，提升用户体验。',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mb-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {author.bio}
          </p>
          
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              个人信息
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">杭州，中国</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">7年工作经验</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">全栈开发</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">农业建筑环境与能源工程（农村能源）</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              兴趣爱好
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">开源贡献</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">技术阅读</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">技术分享</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">旅行摄影</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            技能专长
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            工作经历
          </h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {experience.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            联系我
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            如果您对我的工作感兴趣，或者想要合作，欢迎随时联系我。
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 