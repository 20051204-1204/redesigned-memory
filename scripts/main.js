// 主页交互功能
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            alert('?? 恭喜！网页交互功能正常工作！\\\\n\\\\n这说明：\\\\n? HTML 加载成功\\\\n? CSS 样式生效\\\\n? JavaScript 运行正常');
            
            // 添加一些视觉效果
            this.style.backgroundColor = '#27ae60';
            this.textContent = '功能测试成功！';
            
            // 3秒后恢复原状
            setTimeout(() => {
                this.style.backgroundColor = '#3498db';
                this.textContent = '点击测试交互功能';
            }, 3000);
        });
    }
    
    // 在控制台输出成功信息
    console.log('? 网站加载完成！');
    console.log('? 所有资源加载成功');
    console.log('? JavaScript 功能已启用');
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});// 一级页面特有功能
document.addEventListener('DOMContentLoaded', function() {
    // 特色按钮功能
    const featureButton = document.getElementById('featureButton');
    if (featureButton) {
        featureButton.addEventListener('click', function() {
            alert('?? 这是一级页面的特色功能！\\\\n\\\\n这里可以展示更多关于我们服务的信息。');
            
            // 添加点击效果
            this.style.backgroundColor = '#e74c3c';
            this.textContent = '功能已激活！';
            
            setTimeout(() => {
                this.style.backgroundColor = '#3498db';
                this.textContent = '了解更多';
            }, 2000);
        });
    }
    
    // 图片悬停效果
    const images = document.querySelectorAll('.image-item img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    console.log('? 一级页面功能加载完成');
});// 二级页面诗词功能
document.addEventListener('DOMContentLoaded', function() {
    // 随机诗句功能
    const randomPoemBtn = document.getElementById('randomPoemBtn');
    const randomPoemText = document.getElementById('randomPoemText');
    const poemAuthor = document.getElementById('poemAuthor');
    
    // 诗句库
    const poems = [
        {
            text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
            author: "—— 李白《静夜思》",
            type: "chinese"
        },
        {
            text: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
            author: "—— 孟浩然《春晓》",
            type: "chinese"
        },
        {
            text: "如果冬天来了，春天还会远吗？",
            author: "—— 雪莱《西风颂》",
            type: "foreign"
        },
        {
            text: "假如生活欺骗了你，不要悲伤，不要心急！",
            author: "—— 普希金",
            type: "foreign"
        },
        {
            text: "如果你因失去了太阳而流泪，那么你也将失去群星了。",
            author: "—— 泰戈尔《飞鸟集》",
            type: "foreign"
        },
        {
            text: "我能否把你比作夏日？你却比夏日更可爱温存。",
            author: "—— 莎士比亚《十四行诗》",
            type: "foreign"
        },
        {
            text: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。",
            author: "—— 苏轼《水调歌头》",
            type: "chinese"
        },
        {
            text: "世界以痛吻我，要我报之以歌。",
            author: "—— 泰戈尔《飞鸟集》",
            type: "foreign"
        }
    ];
    
    if (randomPoemBtn) {
        randomPoemBtn.addEventListener('click', function() {
            // 随机选择诗句
            const randomIndex = Math.floor(Math.random() * poems.length);
            const selectedPoem = poems[randomIndex];
            
            // 显示诗句
            randomPoemText.textContent = `"${selectedPoem.text}"`;
            poemAuthor.textContent = selectedPoem.author;
            
            // 添加动画效果
            const poemDisplay = document.getElementById('poemDisplay');
            poemDisplay.style.animation = 'none';
            setTimeout(() => {
                poemDisplay.style.animation = 'fadeIn 0.6s ease-out';
            }, 10);
            
            // 按钮反馈
            this.textContent = '再换一句';
            setTimeout(() => {
                this.textContent = '随机诗句';
            }, 2000);
        });
    }
    
    // 诗词卡片悬停效果
    const poetryCards = document.querySelectorAll('.poetry-card');
    poetryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('✅ 诗词页面功能加载完成');
});