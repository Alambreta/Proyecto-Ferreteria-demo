import Footer from '../components/Footer.jsx'

export default function QuienesSomosPage() {
  return (
    <div className="page-standalone">
      <section className="quienes-section">
        <div className="quienes-inner">

          <div className="quienes-block">
            <h2 className="quienes-kicker">Misión</h2>
            <div className="quienes-content" />
          </div>

          <div className="quienes-block">
            <h2 className="quienes-kicker">Visión</h2>
            <div className="quienes-content" />
          </div>

          <div className="quienes-block">
            <h2 className="quienes-kicker">Proveedores</h2>
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
