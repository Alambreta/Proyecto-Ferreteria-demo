import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { I } from './Icons.jsx'

const NAV_LINKS = [
  { id: 'compras',   label: 'Compras',   to: '/compras' },
  { id: 'renta',     label: 'Renta',     to: '/renta' },
  { id: 'servicios', label: 'Servicios', to: '/servicios' },
  { id: 'quienes-somos', label: 'Quienes Somos', to: '/quienes-somos' },
  { id: 'contacto',  label: 'Contacto',  href: '#contacto' },
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
        <Link to="/" className="nav-brand" aria-label="Ir al inicio">
          <img src="/logos/logo-negro-no-text.png" alt="Logo" className="nav-logo" />
          <span className="nav-brand-text">Los Equipos E.L</span>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map(l =>
            l.to
              ? <Link key={l.id} to={l.to} className={`nav-link ${activeSection === l.id ? 'active' : ''}`}>{l.label}</Link>
              : <a key={l.id} href={l.href} className={`nav-link ${activeSection === l.id ? 'active' : ''}`}>{l.label}</a>
          )}
        </div>
        <div className="nav-right">
          <a className="nav-wa" href="https://wa.me/573128502364" target="_blank" rel="noopener noreferrer">
            <I.whatsapp /> <span>CONSULTA AHORA!</span>
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
