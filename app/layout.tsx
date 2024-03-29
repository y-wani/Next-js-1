import './globals.css'
import Navbar from './components/Navbar'
import Search from './components/Search'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800" >
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
