import nextra from 'nextra'
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs'
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra(nextConfig)
