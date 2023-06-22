import './globals.css'
import NextAuthProvider from './Layouts/NextAuthProvider'
import Navbar from './Layouts/Navbar'
import FramerMotionWrapper from './Layouts/FramerMotionWrapper'

export const metadata = {
  title: 'Nora',
  description: 'Noora',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <NextAuthProvider>
        <body className='bg-[#FDFDFD] font-manrope flex flex-col h-screen'>
          <main className='grow overflow-y-scroll overflow-x-hidden px-6'>{children}</main>
          <Navbar />
        </body>
      </NextAuthProvider>
    </html>
  )
}
