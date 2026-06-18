import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { I } from './Icons.jsx'

const NAV_LINKS = [
  { id: 'compras',      label: 'Compras',      to: '/compras' },
  {
    id: 'renta', label: 'Renta', to: '/renta',
    children: [
      { id: 'transporte', label: 'Transporte',          to: '/transporte' },
      { id: 'maquinaria', label: 'Maquinaria Amarilla', to: '/maquinaria' },
    ],
  },
  { id: 'servicios',    label: 'Servicios',    to: '/servicios' },
  { id: 'quienes-somos', label: 'Quienes Somos', to: '/quienes-somos' },
  { id: 'contacto',    label: 'Contacto',     href: '#contacto' },
]

export default function Nav({ cartCount, onOpenCart, activeSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('locked', menuOpen)
    return () => document.body.classList.remove('locked')
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-brand" aria-label="Ir al inicio" onClick={close}>
            <img src="/logos/logo-negro-no-text.png" alt="Logo" className="nav-logo" />
            <span className="nav-brand-text">Los Equipos E.L</span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map(l => {
              if (l.children) {
                return (
                  <div key={l.id} className="nav-dropdown">
                    <Link
                      to={l.to}
                      className={`nav-link nav-link--has-drop ${activeSection === l.id ? 'active' : ''}`}
                    >
                      {l.label}
                      <svg className="drop-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 1l4 4 4-4"/>
                      </svg>
                    </Link>
                    <div className="nav-dropdown-menu">
                      {l.children.map(c => (
                        <Link key={c.id} to={c.to} className="nav-dropdown-item">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return l.to
                ? <Link key={l.id} to={l.to} className={`nav-link ${activeSection === l.id ? 'active' : ''}`}>{l.label}</Link>
                : <a   key={l.id} href={l.href} className={`nav-link ${activeSection === l.id ? 'active' : ''}`}>{l.label}</a>
            })}
          </div>

          <div className="nav-right">
            <a className="nav-wa" href="https://wa.me/573128502364" target="_blank" rel="noopener noreferrer">
              <I.whatsapp /> <span>CONSULTA AHORA!</span>
            </a>
            <button className="cart-btn" onClick={onOpenCart} aria-label="Abrir carrito">
              <I.cart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button
              className={`nav-hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(l => {
          if (l.children) {
            return (
              <div key={l.id}>
                <Link
                  to={l.to}
                  className={`nav-mobile-link nav-mobile-link--parent ${activeSection === l.id ? 'active' : ''}`}
                  onClick={close}
                >
                  {l.label}
                </Link>
                {l.children.map(c => (
                  <Link key={c.id} to={c.to} className="nav-mobile-link nav-mobile-link--child" onClick={close}>
                    — {c.label}
                  </Link>
                ))}
              </div>
            )
          }
          return l.to
            ? <Link key={l.id} to={l.to} className={`nav-mobile-link ${activeSection === l.id ? 'active' : ''}`} onClick={close}>{l.label}</Link>
            : <a   key={l.id} href={l.href} className={`nav-mobile-link ${activeSection === l.id ? 'active' : ''}`} onClick={close}>{l.label}</a>
        })}
        <a
          className="nav-mobile-wa"
          href="https://wa.me/573128502364"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <I.whatsapp /> Consultanos por WhatsApp
        </a>
      </div>

      {menuOpen && <div className="nav-mobile-backdrop" onClick={close} />}
    </>
  )
}
