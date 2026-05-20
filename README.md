# 此处安放 · 足迹

> 奔赴山海，和自己重逢。有些旅行，不是为了抵达。

一个手绘风格的个人旅行足迹网站。首屏中国地图 + 城市标记点，点击进入城市慢游档案。

## 技术栈

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **SVG 手绘风格地图**

## 城市

| 城市 | 日期 | 关键词 |
|------|------|--------|
| 济南 & 烟台 | 2026.02 | 泉水、老舍、无风声的冬天 |
| 昆明 | 2024 夏 | 西南联大、汪曾祺、菜市场 |
| 大理 | 2025 夏 | 风花雪月、乌托邦、主理人 |
| 泉州 | 2025.01 | 半城烟火半城仙、海丝 |
| 香港 | 2024.12 | 港乐、TVB、大东山 |

## 本地开发

```bash
npm install
npm run dev
```

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库
2. Push 代码到 `main` 分支
3. GitHub Actions 自动构建并部署到 `gh-pages` 分支
4. 在仓库 Settings → Pages → Source 选择 `gh-pages` 分支

或手动部署：

```bash
npm run deploy
```
