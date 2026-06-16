import { useMemo } from 'react'
import Catalog from '../components/Catalog.jsx'
import Footer from '../components/Footer.jsx'
import { useCatalog } from '../hooks/useCatalog.js'

export default function RentaPage({ onAdd }) {
  const { items, loading, error } = useCatalog()

  const products = useMemo(
    () => items.filter(p => p.tipo === 'Alquiler'),
    [items]
  )

  const cats = useMemo(() => {
    const unique = [...new Set(products.map(p => p.cat.toUpperCase()))].sort()
    return ['TODO', ...unique]
  }, [products])

  return (
    <div className="page-standalone">
      <Catalog
        id="renta"
        kicker="Renta de Equipo"
        title="RENTA"
        sub="Equipo profesional listo para obra. Renta mínima 24 horas, con opción de operador certificado.
         Imágenes referenciales, consulta por ficha técnica y disponibilidad actual."
        cats={cats}
        products={products}
        kind="renta"
        onAdd={onAdd}
        loading={loading}
        error={error}
        dark
      />
      <Footer />
    </div>
  )
}
