import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { Link } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: '三叶互联文档中心',
  description: '三叶互联产品文档中心 - 提供全面的产品使用指南、API文档和最佳实践'
}
 
const banner = <Banner dismissible={false}>
    👋 项目人手紧缺，欢迎您随时{' '}
    <Link href="mailto:LeavesWebber@outlook.com">
      加入我们
    </Link>
    .
  </Banner>

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="https://www.emojiall.com/en/header-svg/%F0%9F%8D%83.svg" alt="三叶互联 Logo" width="32" height="32" />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>三叶互联</span>
      </div>
    }
  />
)

const footer = <Footer>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
      All Rights Reserved 2025 ©
      <img src="https://www.emojiall.com/en/header-svg/%F0%9F%8D%83.svg" alt="三叶互联 Logo" width="20" height="20" style={{ margin: '0 4px' }} />
      三叶互联.
    </div>
    <a href="https://beian.miit.gov.cn/" style={{ color: '#666', fontSize: '0.9rem', textDecoration: 'none' }}>苏ICP备2024143438号-2</a>
  </div>
</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://www.emojiall.com/en/header-svg/%F0%9F%8D%83.svg" />
      </Head>
      <body className="nextra-body" suppressHydrationWarning>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/LeavesWebber/sanyeyun_docs.git"
          footer={footer}
          navigation={{
            prev: true,
            next: true
          }}
          sidebar={{defaultMenuCollapseLevel: 1}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}