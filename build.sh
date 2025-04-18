#!/bin/bash

# 安装依赖
echo "Installing dependencies..."
npm install

# 构建应用
echo "Building application..."
npm run build

# 复制构建输出到Vercel预期的目录
echo "Copying build output to deployment directory..."
cp -r .next ./

echo "Build complete!" 