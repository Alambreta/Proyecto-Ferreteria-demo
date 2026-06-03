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
import ServiciosPage from './pages/ServiciosPage.jsx'
import { COMPRAS, RENTA } from './data/products.js'


export default function App() {
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState([])
  const active = location.pathname === '/compras' ? 'compras'
    : location.pathname === '/renta' ? 'renta'
    : location.pathname === '/quienes-somos' ? 'quienes-somos'
    : location.pathname === '/servicios' ? 'servicios'
    : null

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
        <Route path="/servicios" element={<ServiciosPage />} />
      </Routes>
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setItems={setItems} />
    </>
  )
}
