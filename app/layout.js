import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })

const Navbar =dynamic(()=>import('@/components/Navbar'));

export const metadata = {
  title: 'Vikash Pandat',
  description: 'This is my portfolio Website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        
        <Navbar/>
          <main>{children} </main>
        

      </body>
    </html>
  )
}
