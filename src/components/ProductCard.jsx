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
        {p.imagen_url
          ? <img src={p.imagen_url} alt={p.name} className="card-img" loading="lazy" />
          : <Icon />
        }
      </div>
      <div className="card-body">
        <div className="card-cat">{p.cat}</div>
        <h3 className="card-name">{p.name}</h3>
        {p.variante && <div className="card-variante">{p.variante}</div>}
        <span className={`stock-dot ${p.stock === 'low' ? 'low' : ''}`}>
          {p.stock === 'low' ? 'Pocas piezas' : 'En stock'}
        </span>
        <div className="card-foot">
          <div className="card-price">
            {p.price != null ? (
              <>
                <span className="currency">COP</span>
                <span className="amount">${fmt(p.price)}</span>
                <span className="unit">/{p.unit}</span>
              </>
            ) : (
              <span className="price-consultar">Consultar</span>
            )}
          </div>
          <button className="btn btn-dark" onClick={() => onAdd(p, kind)}>
            {isRenta ? 'Rentar' : 'Agregar'} <I.arrow className="btn-arrow" />
          </button>
        </div>
      </div>
    </article>
  )
}
