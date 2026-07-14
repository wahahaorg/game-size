# 技术栈与实现

> 技术栈保持简单。重点是：加载快、结构清楚、方便更新。

## 框架选型

### Astro（推荐）

[Astro](https://astro.build) 是目前最适合内容网站的静态站点生成器之一：

```txt
✅ 默认输出纯静态 HTML，加载快
✅ .astro 文件可以嵌入 React / Vue / 组件
✅ 自动优化图片
✅ 内置 Markdown 和 MDX 支持
✅ 自动生成 Sitemap
✅ 零 JS 默认输出，需要交互的地方可以局部注水
```

```bash
# 创建 Astro 项目
npm create astro@latest ./game-site -- --template basics
```

### Next.js 静态生成 (SSG)

如果团队有 React 背景，Next.js 也是不错的选择：

```bash
npx create-next-app@latest game-site --typescript
# next.config.js 中配置 output: 'export'（静态导出）
```

### 纯静态页面

对于极简项目，纯 HTML + CSS 也可以。但要注意维护成本和扩展性。

**原则：** 不要为了"用某个技术"而引入复杂性。如果 Astro 能搞定，就不需要 Next.js。

## 技术检查清单

### 页面加载

- [ ] 页面在手机上可正常使用
- [ ] 标题层级清楚（h1 → h2 → h3）
- [ ] 页面加载速度在合理范围内（可用 PageSpeed Insights 测试）
- [ ] 图片经过压缩（推荐 Sharp / squoosh）
- [ ] 图片带有 alt 说明文字

### SEO 基础

- [ ] URL 稳定且语义明确（`/wuthering-waves/echo-farming-route` ✅，`/page?id=123` ❌）
- [ ] 每个页面有唯一的 title 和 description
- [ ] 核心关键词在标题、h1、正文和 URL 中自然出现
- [ ] 重要页面之间有自然内链
- [ ] 自动生成 robots.txt

### Sitemap

Astro 内置 Sitemap 集成：

```bash
npm install @astrojs/sitemap
```

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://yoursite.com',
  integrations: [sitemap()],
})
```

### 托管

| 平台 | 适合场景 | 费用 |
|------|---------|------|
| Cloudflare Pages | 静态站点，全球 CDN，极快 | 免费（有合理限制） |
| Vercel | Astro/Next.js 项目 | 免费（有合理限制） |
| Netlify | 静态站点或 JAMStack | 免费（有合理限制） |
| GitHub Pages | 极简静态站点 | 免费 |

**建议第一期用 Cloudflare Pages 或 Vercel 的免费计划就够了。**

```bash
# Vercel 部署
npm i -g vercel
vercel

# Cloudflare Pages：连接 GitHub 仓库自动部署
```

## 移动端适配

不要忽视手机用户。Google 现在优先索引移动端版本。

```css
/* 基础响应式 */
img {
  max-width: 100%;
  height: auto;
}

/* 手机端表格滚动 */
.table-wrapper {
  overflow-x: auto;
}

/* 适当的字体大小 */
body {
  font-size: 16px;  /* 不要小于 16px，否则 iOS 会缩放 */
}
```

## 本地开发和构建

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 性能学习资料

- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [MDN Web Performance Best Practices](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Best_practices)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
