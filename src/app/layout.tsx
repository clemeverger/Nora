import './globals.css'
import NextAuthProvider from './components/NextAuthProvider'
import Header from './components/Header'

export const metadata = {
  title: 'Nora',
  description: 'Noora',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <NextAuthProvider>
        <body className='bg-[#FDFDFD] px-6 font-manrope'>
          <main>{children}</main>
        </body>
      </NextAuthProvider>
    </html>
  )
}
