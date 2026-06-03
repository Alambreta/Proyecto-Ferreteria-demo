import Footer from '../components/Footer.jsx'

const SERVICES = [
  {
    id: 'arquitectura-diseno',
    icon: '📐',
    title: 'Arquitectura y Diseño',
    description:
      'Diseño de proyectos residenciales, comerciales e institucionales. Planos, renders y animaciones 3D. Gestión de licencias de construcción, propiedad horizontal, presupuestos e interventoría.',
    tags: ['Diseño arquitectónico', 'Planos y renders', 'Trámites legales', 'Construcción de obra civil', 'Presupuestos de obra', 'Interventoría y avalúos'],
  },
  {
    id: 'alquiler-equipos',
    icon: '🏗️',
    title: 'Alquiler de Equipos y Herramientas',
    description:
      'Taladros demoledores, percutores y rotomartillo. Pulidoras, vibradores, pluma y cortadora de ladrillo. Andamios certificados y plantas e hidrolavadoras para todo tipo de obra.',
    tags: ['Taladros y demoledores', 'Pulidoras y vibradores', 'Andamios certificados', 'Plantas e hidrolavadoras'],
  },
  {
    id: 'venta-materiales',
    icon: '🧱',
    title: 'Venta de Materiales',
    description:
      'Gravas, arena, aceros, cementos Argos y San Marcos, pegantes Sika, pinturas Pintuco y Bler, láminas Superboard, cubiertas y abrasivos. Retiro de escombros con certificación de disposición final.',
    tags: ['Material de patio', 'Aceros y metales', 'Cementos y pegantes', 'Pinturas y estucos', 'Láminas y paneles', 'Cubierta y cielos rasos', 'Abrasivos y accesorios'],
  },
  {
    id: 'servicios-tecnicos',
    icon: '🔧',
    title: 'Servicios Técnicos',
    description:
      'Reparación de taladros, hidrolavadoras y plantas. Pase de losas y núcleos con operario y máquina. Transporte de equipos y materiales, asesoría SGSST y afiliación a seguridad social.',
    tags: ['Reparación de equipos', 'Pase de losas y núcleos', 'Transporte', 'Asesoría SGSST', 'Afiliación seguridad social', 'Asesoría en pintura'],
  },
  {
    id: 'mantenimiento-locativo',
    icon: '🏠',
    title: 'Mantenimiento Locativo',
    description:
      'Impermeabilización de fachadas, losas, terrazas y cubiertas. Hidrolavado y repinte, demarcación de parqueaderos, mantenimiento de ventanería, anclajes certificados y mantenimiento UTB.',
    tags: ['Impermeabilización', 'Hidrolavado y repinte', 'Demarcación de parqueaderos', 'Mantenimiento de ventanería', 'Anclajes certificados', 'Mantenimiento UTB'],
  },
]

export default function ServiciosPage() {
  return (
    <div className="page-standalone">
      <section className="servicios-section">
        <div className="servicios-inner">

          <div className="servicios-header">
            <span className="servicios-kicker">Lo que ofrecemos</span>
            <h1 className="servicios-title">Servicios</h1>
            <p className="servicios-sub">
              En Los Equipos E.L vas a encontrar todo lo que necesitás para que tu obra arranque
              y llegue a término. Materiales, equipo, asesoría y entrega — bajo el mismo techo.
            </p>
          </div>

          <div className="servicios-list">
            {SERVICES.map((s, i) => (
              <article key={s.id} className="servicio-item">
                <div className="servicio-num">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="servicio-body">
                  <h2 className="servicio-title">{s.title}</h2>
                  <p className="servicio-desc">{s.description}</p>
                  <div className="servicio-tags">
                    {s.tags.map(t => (
                      <span key={t} className="servicio-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="servicios-cta">
            <p>¿Necesitás un presupuesto o tenés dudas sobre qué equipo usar?</p>
            <a
              href="https://wa.me/573128502364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
            >
              Consultanos por WhatsApp
            </a>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}
