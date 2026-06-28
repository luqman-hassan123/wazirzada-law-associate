import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="min-w-0 flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
