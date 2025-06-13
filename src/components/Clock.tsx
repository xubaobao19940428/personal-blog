import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    });
  };

  return (
    <div className="flex flex-col items-center text-xs bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 dark:border-gray-700/20">
      <div className="font-mono font-semibold text-gray-900 dark:text-white tracking-wider">
        {formatTime(time)}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-xs">
        {formatDate(time)}
      </div>
    </div>
  );
} 