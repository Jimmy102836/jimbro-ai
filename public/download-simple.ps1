# 创建必要的目录
New-Item -ItemType Directory -Force -Path "images/features" | Out-Null
New-Item -ItemType Directory -Force -Path "images/testimonials" | Out-Null
New-Item -ItemType Directory -Force -Path "images/team" | Out-Null
New-Item -ItemType Directory -Force -Path "videos" | Out-Null

# 创建特性图片占位符
$featureImages = @(
    "images/features/image-to-video.png",
    "images/features/text-to-image.png",
    "images/features/character-animation.png",
    "images/features/video-generator.png"
)

# 创建证言头像占位符
$testimonialImages = @(
    "images/testimonials/avatar1.jpg",
    "images/testimonials/avatar2.jpg",
    "images/testimonials/avatar3.jpg"
)

# 创建团队成员头像占位符
$teamImages = @(
    "images/team/team-member-1.jpg",
    "images/team/team-member-2.jpg",
    "images/team/team-member-3.jpg"
)

# 创建样式图片占位符
$styleImages = @(
    "images/features/monet.png",
    "images/features/illustration.png",
    "images/features/movie.png",
    "images/features/cyberpunk.png",
    "images/features/marble.png"
)

# 所有图片
$allImages = $featureImages + $testimonialImages + $teamImages + $styleImages

# 创建简单的占位符图片
foreach ($image in $allImages) {
    # 确保目录存在
    $directory = Split-Path $image
    if (!(Test-Path $directory)) {
        New-Item -ItemType Directory -Force -Path $directory | Out-Null
    }
    
    # 创建空文件以便于占位
    if (!(Test-Path $image)) {
        New-Item -ItemType File -Force -Path $image | Out-Null
        Write-Host "创建占位图片: $image" -ForegroundColor Green
    }
}

Write-Host "占位图片创建完成。" -ForegroundColor Green 