import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { COMPRAS, RENTA } from '../data/products.js'

const featuredCompras = COMPRAS.filter(p => p.featured)
const featuredRenta   = RENTA.filter(p => p.featured)

export default function FeaturedSection({ onAdd }) {
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
