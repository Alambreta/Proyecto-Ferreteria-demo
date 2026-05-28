import { I } from './Icons.jsx'
import { fmt } from '../data/products.js'

export default function ProductCard({ p, kind, onAdd }) {
  const Icon = I[p.icon] || I.block
  const isRenta = kind === 'renta'

  return (
    <article className={`card ${isRenta ? 'renta' : ''}`}>
      <div className="card-media">
        <span className="card-sku mono">{p.sku}</span>
        {isRenta && <div className="ribbon">RENTA</div>}
        {!isRenta && p.badge && (
          <div className={`ribbon ${p.badge === 'POCO STOCK' ? 'stock' : ''}`}>{p.badge}</div>
        )}
        <Icon />
      </div>
      <div className="card-body">
        <div className="card-cat">{p.cat}</div>
        <h3 className="card-name">{p.name}</h3>
        <span className={`stock-dot ${p.stock === 'low' ? 'low' : ''}`}>
          {p.stock === 'low' ? 'Pocas piezas' : 'En stock'}
        </span>
        <div className="card-foot">
          <div className="card-price">
            <span className="currency">MXN</span>
            <span className="amount">${fmt(p.price)}</span>
            <span className="unit">/{p.unit}</span>
          </div>
          <button className="btn btn-dark" onClick={() => onAdd(p, kind)}>
            {isRenta ? 'Rentar' : 'Agregar'} <I.arrow className="btn-arrow" />
          </button>
        </div>
      </div>
    </article>
  )
}
