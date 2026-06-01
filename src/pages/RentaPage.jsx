import Catalog from '../components/Catalog.jsx'
import Footer from '../components/Footer.jsx'
import { RENTA, CATS_R } from '../data/products.js'

export default function RentaPage({ onAdd }) {
  return (
    <div className="page-standalone">
      <Catalog
        id="renta"
        kicker="Renta de Equipo"
        title="RENTA"
        sub="Equipo profesional listo para obra. Renta mínima 24 horas, con opción de operador certificado."
        cats={CATS_R}
        products={RENTA}
        kind="renta"
        onAdd={onAdd}
        dark
      />
      <Footer />
    </div>
  )
}
