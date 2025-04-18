# 创建必要的目录
New-Item -ItemType Directory -Force -Path "images/features" | Out-Null
New-Item -ItemType Directory -Force -Path "images/testimonials" | Out-Null
New-Item -ItemType Directory -Force -Path "images/team" | Out-Null
New-Item -ItemType Directory -Force -Path "videos" | Out-Null

# 下载首页特性图片
$featureImages = @(
    @{url = "https://domoai.app/assets/features/image-to-video.webp"; file = "images/features/image-to-video.webp"},
    @{url = "https://domoai.app/assets/features/text-to-image.webp"; file = "images/features/text-to-image.webp"},
    @{url = "https://domoai.app/assets/features/character-animation.webp"; file = "images/features/character-animation.webp"},
    @{url = "https://domoai.app/assets/features/video-generator.webp"; file = "images/features/video-generator.webp"}
)

# 下载证言头像
$testimonialImages = @(
    @{url = "https://domoai.app/assets/testimonials/avatar1.jpg"; file = "images/testimonials/avatar1.jpg"},
    @{url = "https://domoai.app/assets/testimonials/avatar2.jpg"; file = "images/testimonials/avatar2.jpg"},
    @{url = "https://domoai.app/assets/testimonials/avatar3.jpg"; file = "images/testimonials/avatar3.jpg"}
)

# 下载团队成员头像
$teamImages = @(
    @{url = "https://domoai.app/assets/team/team-member-1.jpg"; file = "images/team/team-member-1.jpg"},
    @{url = "https://domoai.app/assets/team/team-member-2.jpg"; file = "images/team/team-member-2.jpg"},
    @{url = "https://domoai.app/assets/team/team-member-3.jpg"; file = "images/team/team-member-3.jpg"}
)

# 下载样式图片
$styleImages = @(
    @{url = "https://domoai.app/assets/styles/monet.webp"; file = "images/features/monet.webp"},
    @{url = "https://domoai.app/assets/styles/illustration.webp"; file = "images/features/illustration.webp"},
    @{url = "https://domoai.app/assets/styles/movie.webp"; file = "images/features/movie.webp"},
    @{url = "https://domoai.app/assets/styles/cyberpunk.webp"; file = "images/features/cyberpunk.webp"},
    @{url = "https://domoai.app/assets/styles/marble.webp"; file = "images/features/marble.webp"}
)

# 下载示例视频
$videos = @(
    @{url = "https://domoai.app/assets/videos/demo.mp4"; file = "videos/demo.mp4"},
    @{url = "https://domoai.app/assets/videos/anime.mp4"; file = "videos/anime.mp4"}
)

# 函数：尝试从给定URL下载资源
function DownloadResource($url, $file) {
    try {
        Write-Host "正在下载: $url 到 $file"
        Invoke-WebRequest -Uri $url -OutFile $file
        Write-Host "下载成功: $file" -ForegroundColor Green
    } catch {
        Write-Host "下载失败: $url. 错误: $_" -ForegroundColor Red
        
        # 如果下载失败，创建一个占位符文件
        if ($file -match "\.jpg$|\.jpeg$|\.png$|\.webp$") {
            CreatePlaceholderImage $file
        } elseif ($file -match "\.mp4$") {
            Write-Host "无法创建视频占位符，请手动添加视频文件。" -ForegroundColor Yellow
        }
    }
}

# 函数：创建占位符图片
function CreatePlaceholderImage($file) {
    # 提取文件名（不含路径）
    $filename = Split-Path $file -Leaf
    
    # 创建HTML占位符文件
    $htmlContent = @"
<!DOCTYPE html>
<html>
<head>
    <title>Image Placeholder</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .placeholder {
            padding: 20px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <h2>JimBroAI</h2>
        <p>Placeholder for: $filename</p>
    </div>
</body>
</html>
"@
    
    $htmlFile = $file + ".html"
    $htmlContent | Out-File -FilePath $htmlFile -Encoding utf8
    Write-Host "已创建HTML占位符: $htmlFile" -ForegroundColor Yellow
}

# 下载所有资源
$featureImages | ForEach-Object { DownloadResource $_.url $_.file }
$testimonialImages | ForEach-Object { DownloadResource $_.url $_.file }
$teamImages | ForEach-Object { DownloadResource $_.url $_.file }
$styleImages | ForEach-Object { DownloadResource $_.url $_.file }
$videos | ForEach-Object { DownloadResource $_.url $_.file }

Write-Host "资源下载完成。" -ForegroundColor Green 