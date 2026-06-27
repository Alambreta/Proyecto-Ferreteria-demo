import { useEffect, useRef } from 'react'
import Footer from '../components/Footer.jsx'

export default function QuienesSomosPage() {
  const innerRef = useRef(null)

  useEffect(() => {
    const els = innerRef.current?.querySelectorAll('.reveal')
    if (!els?.length) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="page-standalone">
      <section className="quienes-section">
        <div className="quienes-inner" ref={innerRef}>

          <div className="quienes-intro">
            <span className="quienes-tag">Est. 2017 · Cali, Colombia</span>
            <h1>
              — Construye más.<br /><span className="quienes-accent">Preocúpate menos.</span>
            </h1>
            <p>En Los Equipos E.L encontrarás siempre lo que necesitas para construir, el consejo que te ahorra un error y la confianza de saber que alguien responde por lo que te vende.</p>
          </div>

          <div className="owner-card reveal">
            <figure className="owner-figure">
              <img src="/material de trabajo/foto-LO.png" alt="Co-fundadora" />
            </figure>
            <div className="owner-content">
              <span className="owner-role">Fundadora · Dirección General</span>
              <h2 className="owner-title">Misión</h2>
              <p className="owner-subtitle">Lo que hacemos cada día</p>
              <p className="owner-text">
                En Los Equipos E.L ponemos a disposición de constructores, contratistas y familias
                los materiales correctos y el equipo necesario para que cada obra arranque fuerte y
                llegue a buen término. Somos una empresa pequeña con un compromiso grande: ofrecer
                asesoría honesta, precios justos y respuesta inmediata, porque sabemos que en la
                construcción el tiempo vale tanto como el concreto.
              </p>
              <blockquote className="owner-quote">
                "En Los Equipos E.L, tu proyecto es nuestro proyecto."
              </blockquote>
              <cite className="owner-name">— Claudia Lorena Alvarez Madrid</cite>
            </div>
          </div>

          <div className="owner-card owner-card--reverse reveal reveal--delay">
            <div className="owner-content">
              <span className="owner-role">Fundador · Co-propietario</span>
              <h2 className="owner-title">Visión</h2>
              <p className="owner-subtitle">Hacia dónde vamos</p>
              <p className="owner-text">
                Ser la empresa de referencia en nuestra región para la venta de materiales y renta
                de maquinaria de construcción, reconocida por la comunidad como un negocio que
                cumple su palabra. Queremos que cada cliente —desde el maestro de obra hasta el
                gran contratista— encuentre en Los Equipos E.L un socio confiable que crece con él,
                que innova sin perder el trato cercano y que deja huella en cada obra que hace posible.
              </p>
              <blockquote className="owner-quote">
                "Crecer siendo los mismos: confiables, cercanos y comprometidos."
              </blockquote>
              <cite className="owner-name">— Edisson Marín Patiño</cite>
            </div>
            <figure className="owner-figure">
              <img src="/material de trabajo/ED-foto.png" alt="Fundador" />
            </figure>
          </div>

          <div id="proveedores" className="quienes-block reveal reveal--delay-2">
            <h2 className="quienes-kicker quienes-kicker--center">Nuestros Aliados</h2>
            <div className="quienes-providers">
              {[
                { src: '/providers/NEW_PINTUCO.png',         alt: 'Pintuco' },
                { src: '/providers/equicollogo.png',         alt: 'Equicol' },
                { src: '/providers/sanmarcos.png',           alt: 'San Marcos' },
                { src: '/providers/adieladelombana.png',     alt: 'Adiela de Lombana' },
                { src: '/providers/logo-sidocsa.png',        alt: 'Sidocsa' },
                { src: '/providers/technolavadoos.png',      alt: 'Technolavados' },
                { src: '/providers/construccionesRC.png',    alt: 'Construcciones RC' },
                { src: '/providers/logo_losada_munoz.png',   alt: 'Losada Muñoz' },
                { src: '/providers/logo-angela.png',         alt: 'Angela' },
                { src: '/providers/logo-pablo.png',          alt: 'Pablo' },
                { src: '/providers/logo-andamio.png',        alt: 'Andamio' },
                { src: '/providers/a1979.png',               alt: 'A1979' },
                { src: '/providers/csilaboral.png',          alt: 'CSI Laboral' },
                { src: '/providers/LeonadLV.png',            alt: 'Leonard LV' },
              ].map(({ src, alt }) => (
                <div key={src} className="provider-card">
                  <img src={src} alt={alt} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}
