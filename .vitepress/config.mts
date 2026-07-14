import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repoName?.endsWith('.github.io')
const githubPagesBase =
  process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgPage ? `/${repoName}/` : '/'

export default defineConfig({
  title: '出海游戏站教程',
  description: '从零开始搭建海外 SEO 游戏站 — 关键词调研、技术实现、广告变现完整闭环',
  lang: 'zh-CN',
  base: process.env.VITEPRESS_BASE ?? githubPagesBase,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: false,
    siteTitle: '出海游戏站教程',
    nav: [
      { text: '教程总览', link: '/' },
      { text: 'SEO 基础', link: '/seo-basics' },
      { text: '关键词调研', link: '/keyword-research' },
      { text: '社区经验', link: '/community/' },
    ],
    sidebar: [
      {
        text: '📖 教程路径',
        collapsed: false,
        items: [
          { text: '教程总览', link: '/' },
          { text: 'SEO 基础概念', link: '/seo-basics' },
          { text: '关键词调研', link: '/keyword-research' },
          { text: '第一个实验项目', link: '/first-project' },
          { text: '技术栈与实现', link: '/tech-stack' },
          { text: '数据闭环与诊断', link: '/data-loop' },
          { text: '广告接入', link: '/ads-monetization' },
          { text: '30 天实践计划', link: '/30-day-plan' },
          { text: '成本控制与自动化', link: '/costs-automation' },
          { text: '📋 关键词调研模板', link: '/keyword-template' },
        ],
      },
      {
        text: '💬 群友实战经验',
        collapsed: false,
        items: [
          { text: '总览', link: '/community/' },
          { text: 'AdSense 审核实录', link: '/community/adsense-stories' },
          { text: '工具站 vs 内容站', link: '/community/tool-vs-content' },
          { text: '改版代价与维护', link: '/community/update-risks' },
          { text: 'SEO 收录与排名', link: '/community/seo-stories' },
          { text: '关键词实战', link: '/community/keyword-stories' },
          { text: '外链建设', link: '/community/backlink-stories' },
          { text: '赚钱与变现', link: '/community/monetization-stories' },
          { text: 'Bing 流量', link: '/community/bing-traffic' },
          { text: 'AI 辅助建站', link: '/community/ai-building' },
          { text: '避坑指南', link: '/community/pitfalls' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wahahaorg/game-size' },
    ],
    footer: {
      message: '基于 VitePress 构建 · 仅供学习参考',
    },
  },
})
