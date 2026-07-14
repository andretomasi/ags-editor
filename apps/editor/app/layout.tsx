import { Agentation } from 'agentation'
import { GeistPixelSquare } from 'geist/font/pixel'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import localFont from 'next/font/local'
import { ClientBootstrap } from './client-bootstrap'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AGS Editor',
    template: '%s | AGS Editor',
  },
  description: 'Editor 2D/3D para estruturas Light Steel Frame e sistemas construtivos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${barlow.variable}`}
      lang="pt-BR"
    >
      <head>
        {process.env.NODE_ENV === 'development' && (
          <script async crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
        )}
      </head>
      <body className="font-sans">
        <ClientBootstrap>{children}</ClientBootstrap>
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
