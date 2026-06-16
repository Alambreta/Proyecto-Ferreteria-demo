import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { useCatalog } from '../hooks/useCatalog.js'

export default function FeaturedSection({ onAdd }) {
  const { items, loading } = useCatalog()

  const featuredCompras = useMemo(
    () => items.filter(p => (p.tipo === 'Venta Materiales' || p.tipo === 'Venta Consumibles') && p.destacado),
    [items]
  )

  const featuredRenta = useMemo(
    () => items.filter(p => p.tipo === 'Alquiler' && p.destacado),
    [items]
  )

  if (loading) return null

  return (
    <section className="featured section-pad wrap">
      <div className="featured-block">
        <div className="section-head">
          <div className="section-title">
            <div className="bar" />
            <div className="text">
              <p className="kicker">Más vendidos</p>
              <h2>COMPRAS</h2>
            </div>
          </div>
          <Link to="/compras" className="btn btn-dark">
            Ver catálogo completo <span className="btn-arrow">→</span>
          </Link>
        </div>
        <div className="grid">
          {featuredCompras.map(p => (
            <ProductCard key={p.id} p={p} kind="compra" onAdd={onAdd} />
          ))}
        </div>
      </div>

      <div className="featured-block featured-block--dark">
        <div className="section-head">
          <div className="section-title">
            <div className="bar" />
            <div className="text">
              <p className="kicker">Equipos destacados</p>
              <h2>RENTA</h2>
            </div>
          </div>
          <Link to="/renta" className="btn btn-dark">
            Ver catálogo completo <span className="btn-arrow">→</span>
          </Link>
        </div>
        <div className="grid">
          {featuredRenta.map(p => (
            <ProductCard key={p.id} p={p} kind="renta" onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
