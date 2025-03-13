import { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import './page.css'

export const metadata: Metadata = {
  description: '三叶互联 - 帮助中国大陆地区的国际版MC玩家发现服务器，并且快速联机。'
}

export default function IndexPage() {
  return (
    <div className="home-content">
      <div className="hero-section">
        <div className="content-container">
          <h1 className="headline">
            共建 MC 联机新生态<br className="max-sm:hidden" />
            从此刻开始
          </h1>
          <p className="subtitle">
            创新理念，多构件协同，用全新 MC 生态格局
            <br className="max-md:hidden" />
            冲击传统 idc 行业
          </p>
          <p className="subtitle">
            <Link className={styles.cta} href="/docs">
              快速开始 <span>→</span>
            </Link>
          </p>
        </div>
      </div>
      
      <div className="features-container border-b">
        <div className="content-container">
          <div className="features-grid">
            <div className="feature-card large">
              <h3>✨三叶启动器</h3>
              <p>另起炉灶，致力成为传统启动器的上位替代</p>
            </div>
            
            <div className="feature-card">
              <h3>🌐三叶互联官网</h3>
              <p>现代化的界面设计，从未有过的实时联机大厅</p>
            </div>
            
            <div className="feature-card">
              <h3>🔒三叶云控</h3>
              <p>高性能实例监控，友商互联的桥梁</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
