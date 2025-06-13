#!/bin/bash

echo "🚀 启动个人博客网站..."
echo "📦 检查依赖..."

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo "📥 安装依赖..."
    npm install
fi

echo "🌐 启动开发服务器..."
echo "📍 访问地址: http://localhost:5173"
echo "🛑 按 Ctrl+C 停止服务器"

npm run dev 