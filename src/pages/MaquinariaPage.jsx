import { useMemo } from 'react'
import { useCatalog } from '../hooks/useCatalog.js'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'

export default function MaquinariaPage({ onAdd }) {
  const { items, loading, error } = useCatalog()

  const products = useMemo(
    () => items.filter(p => p.tipo === 'Maquinaria Amarilla'),
    [items]
  )

  return (
    <div className="page-standalone">
      <section className="section-pad section-renta" style={{ position: 'relative' }}>
        <div className="corner-flag">SECCIÓN · MAQUINARIA</div>
        <div className="wrap">
          <div className="section-head">
            <div className="section-title">
              <div className="bar" />
              <div className="text">
                <div className="kicker">Renta de maquinaria</div>
                <h2>MAQUINARIA AMARILLA</h2>
                <p className="sub">Minicargador, oruga y pajarita disponibles para obras de gran envergadura. Consulta disponibilidad y tarifas por operario.</p>
              </div>
            </div>
          </div>
          {loading && <div className="catalog-loading">— Cargando —</div>}
          {error  && <div className="catalog-error">Error: {error}</div>}
          {!loading && !error && (
            <div className="grid">
              {products.map(p => (
                <ProductCard key={p.id} p={p} kind="renta" onAdd={onAdd} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
