import { useMemo } from 'react'
import Catalog from '../components/Catalog.jsx'
import Footer from '../components/Footer.jsx'
import { useCatalog } from '../hooks/useCatalog.js'

export default function ComprasPage({ onAdd }) {
  const { items, loading, error } = useCatalog()

  const products = useMemo(
    () => items.filter(p => p.tipo === 'Venta Materiales' || p.tipo === 'Venta Consumibles'),
    [items]
  )

  const cats = useMemo(() => {
    const unique = [...new Set(products.map(p => p.cat.toUpperCase()))].sort()
    return ['TODO', ...unique]
  }, [products])

  return (
    <div className="page-standalone">
      <Catalog
        id="compras"
        kicker="Catálogo de Compras"
        title="COMPRAS"
        sub="Materiales disponibles para entregas programadas.
         Imagenes referenciales, consulta por ficha técnica y disponibilidad actual."
        cats={cats}
        products={products}
        kind="compra"
        onAdd={onAdd}
        loading={loading}
        error={error}
      />
      <Footer />
    </div>
  )
}
