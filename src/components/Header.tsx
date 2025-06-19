import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Sparkles, Home, BookOpen, FolderOpen, User, Zap } from 'lucide-react';
import Clock from './Clock';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: '首页', href: '/', icon: Home },
    { name: '博客', href: '/blog', icon: BookOpen },
    { name: '项目', href: '/projects', icon: FolderOpen },
    { name: '关于', href: '/about', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white dark:bg-gray-900 shadow-2xl border-b-2 border-primary-500/60'
          : 'bg-gradient-to-b from-white/80 via-white/10 to-transparent dark:from-gray-900/80 dark:via-gray-900/10 dark:to-transparent border-b-0 shadow-none'}
        backdrop-blur-xl`
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center glow-effect group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">钱</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400 bg-clip-text text-transparent group-hover:from-primary-600 group-hover:to-purple-600 dark:group-hover:from-primary-400 dark:group-hover:to-purple-400 transition-all duration-300">
                钱诚的博客
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">前端开发工程师</span>
            </div>
            <Sparkles className="w-6 h-6 text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-900/20'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Clock */}
            <div className="hidden sm:block">
              <Clock />
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-primary-100 hover:to-purple-100 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
              aria-label="切换主题"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isDark ? (
                <Sun className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
              ) : (
                <Moon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden group relative p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-primary-100 hover:to-purple-100 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="打开菜单"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200/50 dark:border-gray-700/50 slide-in-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 ${
                      isActive(item.href)
                        ? 'text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 shadow-lg'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-900/20'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                        : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 group-hover:from-primary-500 group-hover:to-primary-600'
                    }`}>
                      <Icon className={`w-5 h-5 transition-all duration-300 ${
                        isActive(item.href) 
                          ? 'text-white' 
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-white'
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              })}
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>前端开发专家</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 