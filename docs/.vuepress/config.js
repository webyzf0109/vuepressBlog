module.exports = {
  title: 'Mc骚亮爷',
  description: 'Mc骚亮爷',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端积累', link: '/account/' },
      {text: '后端积累', link: '/admin/'},
      {text: '博客推荐', link: '/blog/'},
      {text: '休闲娱乐', link: '/play/'},
      {text: 'yzfwork组件库', link: 'https://github.com/webyzf0109/yzfwork-template'}      
    ],
    sidebar:{
      
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3
  }
};