import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  Space,
  Tag,
} from 'tdesign-react'
import {
  HomeIcon,
  ArrowLeftIcon,
} from 'tdesign-icons-react'

function Software() {
  return (
    <div className="software-page">
      {/* 页面头部 */}
      <section className="software-hero">
        <div className="software-hero-content">
          <Tag theme="primary" variant="light" shape="round" size="medium" className="software-tag">
            工具软件
          </Tag>
          <h1 className="software-title">
            <span className="software-title-main">工具与软件</span>
            <span className="software-title-sub">探索更多实用工具</span>
          </h1>
          <p className="software-desc">
            这里汇集了各种实用工具，帮助你更高效地建设和创作。
          </p>
          <Space size="medium" className="software-actions">
            <Link to="/">
              <Button theme="primary" size="large" shape="round" icon={<HomeIcon />}>
                返回首页
              </Button>
            </Link>
          </Space>
        </div>
      </section>

      {/* 工具列表 */}
      <section className="software-section">
        <div className="software-grid">
          <div className="software-block">
            <div className="software-block-icon">🛠️</div>
            <h3>工具 1</h3>
            <p>这是一个示例工具，点击可以查看更多详情。</p>
            <Button theme="primary" block>
              查看详情
            </Button>
          </div>

          <div className="software-block">
            <div className="software-block-icon">⚙️</div>
            <h3>工具 2</h3>
            <p>这是另一个示例工具，提供更多功能支持。</p>
            <Button theme="primary" block>
              查看详情
            </Button>
          </div>

          <div className="software-block">
            <div className="software-block-icon">🔨</div>
            <h3>工具 3</h3>
            <p>更多实用工具正在开发中，敬请期待。</p>
            <Button theme="primary" block>
              查看详情
            </Button>
          </div>

          <div className="software-block">
            <div className="software-block-icon">📦</div>
            <h3>工具 4</h3>
            <p>持续更新更多好用的工具和功能。</p>
            <Button theme="primary" block>
              查看详情
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Software
