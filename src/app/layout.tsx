import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/shared/ui/utils'
import './globals.css'

export const metadata: Metadata = {
  title: 'LMS on NextJS',
  description: 'LMS frontend34',
  icons: {
    icon: '/icon.ico',
  },
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
