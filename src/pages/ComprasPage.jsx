import Catalog from '../components/Catalog.jsx'
import Footer from '../components/Footer.jsx'
import { COMPRAS, CATS_C } from '../data/products.js'

export default function ComprasPage({ onAdd }) {
  return (
    <div className="page-standalone">
      <Catalog
        id="compras"
        kicker="Catálogo de Compras"
        title="COMPRAS"
        sub="Materiales al mayoreo con entrega el mismo día. Precios firmes por 48 horas tras tu cotización."
        cats={CATS_C}
        products={COMPRAS}
        kind="compra"
        onAdd={onAdd}
      />
      <Footer />
    </div>
  )
}
