import Footer from '../components/Footer.jsx'

const SERVICES = [
  {
    id: 'venta-materiales',
    icon: '🧱',
    title: 'Venta de Materiales',
    description:
      'Suministro de materiales de construcción al mayoreo y menudeo: cemento, varilla, block, arena, grava, impermeabilizantes, lámina y más. Stock permanente con precios firmes.',
    tags: ['Cemento', 'Varilla', 'Block', 'Arena y Grava', 'Impermeabilizantes'],
  },
  {
    id: 'renta-equipo',
    icon: '🏗️',
    title: 'Renta de Equipo y Maquinaria',
    description:
      'Renta de equipo pesado y herramienta especializada para obra residencial, comercial e industrial. Entrega y retiro en sitio. Asesoría incluida para selección del equipo correcto.',
    tags: ['Andamios', 'Revolvedoras', 'Compactadoras', 'Generadores', 'Herramienta eléctrica'],
  },
  {
    id: 'asesoria',
    icon: '📐',
    title: 'Asesoría Técnica',
    description:
      'Orientación directa de nuestro equipo para ayudarte a elegir los materiales correctos según tu proyecto, presupuesto y condiciones de obra. Sin costo adicional.',
    tags: ['Cálculo de materiales', 'Selección de productos', 'Presupuesto de obra'],
  },
  {
    id: 'entrega',
    icon: '🚛',
    title: 'Entrega a Domicilio',
    description:
      'Servicio de entrega en toda el área metropolitana de Cali. Mismo día en pedidos confirmados antes del mediodía. Flota propia, sin intermediarios.',
    tags: ['Entrega el mismo día', 'Zona metropolitana', 'Flota propia'],
  },
  {
    id: 'credito',
    icon: '📋',
    title: 'Crédito Empresarial',
    description:
      'Líneas de crédito disponibles para contratistas y empresas constructoras con historial de compras. Facilita el flujo de tu obra sin comprometer capital de trabajo.',
    tags: ['Para contratistas', 'Para empresas', 'Plazos flexibles'],
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
