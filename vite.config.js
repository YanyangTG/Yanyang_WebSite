import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isUserDebug = mode === 'userdebug'
  const version = process.env.VERSION || '1.0.0'
  const builder = process.env.BUILDER || 'Unknown'
  const buildEnv = process.env.BUILD_ENV || 'production'
  
  const buildTime = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
  
  // GitHub Pages 项目站点需要设置 base 为仓库名
  // 仓库名是：Yanyang_WebSite
  const base = process.env.DEPLOY_TARGET === 'github-pages' 
    ? '/Yanyang_WebSite/'  // 注意大小写要和仓库名一致
    : '/'
  
  return {
    plugins: [react()],
    base: base,  // 关键配置！
    define: {
      __USER_DEBUG__: isUserDebug,
      __VERSION__: JSON.stringify(version),
      __BUILDER__: JSON.stringify(builder),
      __BUILD_ENV__: JSON.stringify(buildEnv),
      __BUILD_TIME__: JSON.stringify(buildTime),
    },
  }
})
