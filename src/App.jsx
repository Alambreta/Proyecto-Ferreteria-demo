import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DiagonalCut from './components/DiagonalCut.jsx'
import Catalog from './components/Catalog.jsx'
import Stripe from './components/Stripe.jsx'
import Drawer from './components/Drawer.jsx'
import Footer from './components/Footer.jsx'
import { COMPRAS, RENTA, CATS_C, CATS_R } from './data/products.js'

const SECTION_IDS = ['compras', 'renta', 'servicios', 'cobertura', 'contacto']

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState([
    { ...COMPRAS[0], qty: 20, kind: 'compra' },
    { ...RENTA[0],   qty: 2,  kind: 'renta' },
  ])
  const [active, setActive] = useState('compras')

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
    const onScroll = () => {
      const y = window.scrollY + 120
      let cur = 'compras'
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} activeSection={active} />
      <Hero />
      <DiagonalCut from="#1A1A1A" to="#FFFFFF" />

      <Catalog
        id="compras"
        kicker="01 / Catálogo"
        title="COMPRAS"
        sub="Materiales al mayoreo con entrega el mismo día. Precios firmes por 48 horas tras tu cotización."
        cats={CATS_C}
        products={COMPRAS}
        kind="compra"
        onAdd={addItem}
      />

      <Stripe />

      <Catalog
        id="renta"
        kicker="02 / Renta de Equipo"
        title="RENTA"
        sub="Equipo profesional listo para obra. Renta mínima 24 horas, con opción de operador certificado."
        cats={CATS_R}
        products={RENTA}
        kind="renta"
        onAdd={addItem}
        dark
      />

      <Footer />
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setItems={setItems} />
    </>
  )
}
