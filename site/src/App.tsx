import { Routes, Route, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import SearchDialog, { useSearchHotkey } from './components/SearchDialog'
import ReviewNotice from './components/ReviewNotice'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Opportunities from './pages/Opportunities'
import PositionDetail from './pages/PositionDetail'
import People from './pages/People'
import Consortium from './pages/Consortium'
import Programme from './pages/Programme'
import Contact from './pages/Contact'
import Review from './pages/Review'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const open = useCallback(() => setSearchOpen(true), [])
  const close = useCallback(() => setSearchOpen(false), [])
  useSearchHotkey(open)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header onSearch={open} />
      <ReviewNotice />
      <SearchDialog open={searchOpen} onClose={close} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunities/:code" element={<PositionDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/consortium" element={<Consortium />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
