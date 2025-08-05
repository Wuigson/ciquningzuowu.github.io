import { defineConfig } from 'rspress/config';

export default defineConfig({
    icon: '/favicon.ico',
    rootDir: 'docs',
    themeConfig: {
        // 1. 修改主题色（适合计算机科技感）
        colors: {
            primary: '#3498db', // 主色调（科技蓝）
            dark: '#2c3e50',   // 深色模式背景
        },
        // 2. 自定义导航栏（添加四大方向入口）
        nav: [
            { text: '首页', link: '/' },
            { text: '人工智能', link: '/ai/' },
            { text: '算法竞赛', link: '/algo/' },
            { text: '前后端', link: '/web/' },
            { text: '嵌入式', link: '/embedded/' },
        ],
        // 3. 侧边栏分组（优化学习路线导航）
        sidebar: {
            '/ai/': [
                { text: '入门指南', link: '/ai/intro' },
                { text: '机器学习基础', link: '/ai/ml-basics' },
                { text: '深度学习实战', link: '/ai/dl-practice' },
            ],
            '/algo/': [
                { text: '数据结构', link: '/algo/data-structures' },
                { text: '算法模板', link: '/algo/templates' },
                { text: '竞赛真题', link: '/algo/contests' },
            ],
            // ...其他方向类似
        },
    },
});
