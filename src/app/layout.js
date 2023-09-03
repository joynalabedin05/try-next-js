import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'next app',
}

const RootLayout = ({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href='#'>home</a>
        </nav>
        {children}
        <footer>footer</footer>
        </body>
    </html>
  )
}
export default RootLayout;