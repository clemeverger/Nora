import './globals.css'
import NextAuthProvider from './components/NextAuthProvider'
import Navbar from './components/Navbar'
import { usePathname } from 'next/navigation'

export const metadata = {
  title: 'Nora',
  description: 'Noora',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang='fr'>
      <NextAuthProvider>
        <body className='bg-[#FDFDFD] font-manrope flex flex-col h-screen'>
          <main className='grow overflow-y-scroll overflow-x-hidden px-6'>{children}</main>
          {/*  {(pathname === '/home' || pathname === '/account' || pathname === '/blog') && <Navbar />} */}
        </body>
      </NextAuthProvider>
    </html>
  )
}
