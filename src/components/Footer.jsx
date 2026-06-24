import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { I } from './Icons.jsx'

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-top-line" />
      <div className="footer-inner">
        <div className="f-brand">
          <Logo />
          <p>Materiales de construcción y renta de equipo para obra residencial, comercial e industrial. Operando en Cali y su área metropolitana desde 2017.</p>
          <div className="f-cert">
            <span>ISO 9001</span>
            <span>NOM-006-STPS</span>
            <span>CFE Aprobado</span>
          </div>
        </div>
        <div className="f-col">
          <h5>Catálogo</h5>
          <ul>
            <li><Link to="/compras">Materiales</Link></li>
            <li><Link to="/renta">Renta de Equipo</Link></li>
            <li><Link to="/renta">Herramienta</Link></li>
            <li><Link to="/compras">Acero y Estructuras</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Empresa</h5>
          <ul>
            <li><Link to="/quienes-somos">Nosotros</Link></li>
            <li><a href="https://wa.me/573128502364?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20cr%C3%A9dito%20empresarial." target="_blank" rel="noopener noreferrer">Crédito Empresarial</a></li>
            <li><Link to="/quienes-somos#proveedores">Proveedores</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Contacto</h5>
          <ul className="f-contact">
            <li><I.pin /><span>Cali, Colombia<br /></span></li>
            <li><I.phone /><span>+57 312 850 2364</span></li>
            <li><I.phone /><span>+57 320 652 7318</span></li>
            <li><I.whatsapp /><span>WhatsApp L-V</span></li>
            <li><I.mail /><span>losequipose.l@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Los Equipos E.L</span>
        <div className="legal">
          <Link to="/privacidad">Aviso de Privacidad</Link>
          <Link to="/terminos">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  )
}
