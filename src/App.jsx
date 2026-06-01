import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DiagonalCut from './components/DiagonalCut.jsx'
import FeaturedSection from './components/FeaturedSection.jsx'
import Drawer from './components/Drawer.jsx'
import Footer from './components/Footer.jsx'
import ComprasPage from './pages/ComprasPage.jsx'
import RentaPage from './pages/RentaPage.jsx'
import QuienesSomosPage from './pages/QuienesSomosPage.jsx'
import { COMPRAS, RENTA } from './data/products.js'

const SECTION_IDS = ['compras', 'renta', 'servicios', 'cobertura', 'contacto']

export default function App() {
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState([
    { ...COMPRAS[0], qty: 20, kind: 'compra' },
    { ...RENTA[0],   qty: 2,  kind: 'renta' },
  ])
  const [scrollActive, setScrollActive] = useState('compras')

  const routeActive = location.pathname === '/compras' ? 'compras'
    : location.pathname === '/renta' ? 'renta'
    : location.pathname === '/quienes-somos' ? 'quienes-somos'
    : null

  const active = routeActive ?? scrollActive

  const cartCount = items.reduce((s, i) => s + i.qty, 0)

  const addItem = (p, kind) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === p.id && i.kind === kind)
      if (existing) return prev.map(i => i.id === p.id && i.kind === kind ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...p, qty: 1, kind }]
    })
    const btn = document.querySelector('.cart-btn')
    if (btn) {
      btn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }],
        { duration: 280, easing: 'cubic-bezier(.4,1.6,.4,1)' }
      )
    }
  }

  useEffect(() => {
    if (location.pathname !== '/') return
    const onScroll = () => {
      const y = window.scrollY + 120
      let cur = 'compras'
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      })
      setScrollActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} activeSection={active} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <DiagonalCut from="#1A1A1A" to="#FFFFFF" />
            <FeaturedSection onAdd={addItem} />
            <Footer />
          </>
        } />
        <Route path="/compras" element={<ComprasPage onAdd={addItem} />} />
        <Route path="/renta" element={<RentaPage onAdd={addItem} />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
      </Routes>
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setItems={setItems} />
    </>
  )
}
