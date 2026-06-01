import Logo from './Logo.jsx'
import { I } from './Icons.jsx'

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-top-line" />
      <div className="footer-inner">
        <div className="f-brand">
          <Logo />
          <p>Materiales de construcción y renta de equipo para obra residencial, comercial e industrial. Operando en Cali y su área metropolitana desde 1997.</p>
          <div className="f-cert">
            <span>ISO 9001</span>
            <span>NOM-006-STPS</span>
            <span>CFE Aprobado</span>
          </div>
        </div>
        <div className="f-col">
          <h5>Catálogo</h5>
          <ul>
            <li><a href="#compras">Materiales</a></li>
            <li><a href="#renta">Renta de Equipo</a></li>
            <li><a href="#">Herramienta</a></li>
            <li><a href="#">Seguridad Industrial</a></li>
            <li><a href="#">Acero y Estructuras</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Empresa</h5>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Crédito Empresarial</a></li>
            <li><a href="#">Bolsa de Trabajo</a></li>
            <li><a href="#">Proveedores</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Contacto</h5>
          <ul className="f-contact">
            <li><I.pin /><span>Cali, Colombia<br /></span></li>
            <li><I.phone /><span>+57 312 850 2364</span></li>
            <li><I.whatsapp /><span>WhatsApp 24/7</span></li>
            <li><I.mail /><span>losequipose.l@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Los Equipos E.L</span>
        <div className="legal">
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Facturación</a>
        </div>
      </div>
    </footer>
  )
}
