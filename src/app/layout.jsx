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

const footer = <Footer>All Rights Reserved 2025 © 三叶互联.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="nextra-body" suppressHydrationWarning>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sanyeyun/docs"
          footer={footer}
          navigation={{
            prev: true,
            next: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}