import { useMemo } from 'react'
import { useCatalog } from '../hooks/useCatalog.js'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'

export default function TransportePage({ onAdd }) {
  const { items, loading, error } = useCatalog()

  const products = useMemo(
    () => items.filter(p => p.tipo === 'Transporte'),
    [items]
  )

  return (
    <div className="page-standalone">
      <section className="section-pad" style={{ position: 'relative' }}>
        <div className="corner-flag">SECCIÓN · TRANSPORTE</div>
        <div className="wrap">
          <div className="section-head">
            <div className="section-title">
              <div className="bar" />
              <div className="text">
                <div className="kicker">Renta de vehículos</div>
                <h2>TRANSPORTE</h2>
                <p className="sub">Camionetas, chanas y volquetas para traslado de materiales y retiro de escombros. Cobertura en el área metropolitana de Cali.</p>
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
