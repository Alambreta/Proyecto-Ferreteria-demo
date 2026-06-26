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
import TransportePage from './pages/TransportePage.jsx'
import MaquinariaPage from './pages/MaquinariaPage.jsx'
import QuienesSomosPage from './pages/QuienesSomosPage.jsx'
import ServiciosPage from './pages/ServiciosPage.jsx'
import PrivacidadPage from './pages/PrivacidadPage.jsx'
import TerminosPage from './pages/TerminosPage.jsx'

const CART_KEY = 'els_cart_v1'
const CART_TTL = 5 * 60 * 1000

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const { ts, items } = JSON.parse(raw)
    if (Date.now() - ts > CART_TTL) { localStorage.removeItem(CART_KEY); return [] }
    return items
  } catch { return [] }
}

function writeCart(items) {
  try {
    if (items.length === 0) { localStorage.removeItem(CART_KEY); return }
    localStorage.setItem(CART_KEY, JSON.stringify({ ts: Date.now(), items }))
  } catch {}
}

export default function App() {
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState(readCart)
  const active = location.pathname === '/compras' ? 'compras'
    : ['/renta', '/transporte', '/maquinaria'].includes(location.pathname) ? 'renta'
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

  useEffect(() => { writeCart(items) }, [items])

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

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
        <Route path="/renta"       element={<RentaPage      onAdd={addItem} />} />
        <Route path="/transporte"  element={<TransportePage onAdd={addItem} />} />
        <Route path="/maquinaria"  element={<MaquinariaPage onAdd={addItem} />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/terminos"   element={<TerminosPage />} />
      </Routes>
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setItems={setItems} />
    </>
  )
}
