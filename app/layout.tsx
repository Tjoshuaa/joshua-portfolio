import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thompson Joshua — Business Strategist & Digital Builder',
  description:
    'Portfolio of Thompson Joshua — business strategist, digital creator, web developer, and entrepreneur.',
  keywords: [
    'Thompson Joshua',
    'Business Strategist',
    'Web Developer',
    'Digital Creator',
    'Entrepreneur',
    'Portfolio',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
