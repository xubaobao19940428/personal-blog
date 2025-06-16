import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart, Code, Coffee, Sparkles, Zap, Globe, Shield, Users } from 'lucide-react';
import { author } from '../data/author';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: author.social.github, label: 'GitHub', color: 'hover:bg-gray-800' },
        { icon: Twitter, href: author.social.twitter, label: 'Twitter', color: 'hover:bg-blue-500' },
        { icon: Linkedin, href: author.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: Mail, href: `mailto:${author.social.email}`, label: 'Email', color: 'hover:bg-red-500' },
    ].filter(link => link.href);

    const quickLinks = [
        { name: '首页', href: '/' },
        { name: '博客', href: '/blog' },
        { name: '项目', href: '/projects' },
        { name: '关于', href: '/about' },
    ];

    const services = [
        { name: '前端开发', description: 'React、Vue、TypeScript' },
        { name: '跨平台开发', description: 'Electron、微信小程序' },
        { name: '性能优化', description: '用户体验提升' },
        { name: '技术咨询', description: '前端技术指导' },
    ];

    const stats = [
        { icon: Code, label: '7年经验', value: '7+' },
        { icon: Users, label: '服务用户', value: '100万+' },
        { icon: Globe, label: '项目数量', value: '20+' },
        { icon: Shield, label: '技术专家', value: '专家' },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">钱</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                钱诚的博客
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            {author.bio}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            快速链接
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                >
                                    首页
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                >
                                    博客
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                >
                                    项目
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                >
                                    关于
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            关注我
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 dark:text-gray-400">
                            © {currentYear} {author.name}. 保留所有权利。
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            使用 React + TypeScript + Tailwind CSS 构建
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 