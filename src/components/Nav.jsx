import { useState, useEffect } from 'react'
import Logo from './Logo.jsx'
import { I } from './Icons.jsx'

const NAV_LINKS = [
  { id: 'compras',   label: 'Compras' },
  { id: 'renta',     label: 'Renta' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'cobertura', label: 'Cobertura' },
  { id: 'contacto',  label: 'Contacto' },
]

export default function Nav({ cartCount, onOpenCart, activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${activeSection === l.id ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-wa" href="#contacto">
            <I.whatsapp /> <span>+52 81 1234 5678</span>
          </a>
          <button className="cart-btn" onClick={onOpenCart} aria-label="Abrir carrito">
            <I.cart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
