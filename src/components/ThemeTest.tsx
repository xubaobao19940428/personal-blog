import { useState } from 'react';

interface ThemeTestProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeTest({ isDark, toggleTheme }: ThemeTestProps) {
  const [showTest, setShowTest] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowTest(!showTest)}
        className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        主题测试
      </button>
      
      {showTest && (
        <div className="absolute bottom-12 right-0 w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
            主题状态: {isDark ? '深色' : '浅色'}
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded">
              背景测试
            </div>
            <div className="p-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded">
              主色调测试
            </div>
            <div className="p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded">
              卡片测试
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="mt-3 w-full p-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
          >
            切换主题
          </button>
        </div>
      )}
    </div>
  );
} 