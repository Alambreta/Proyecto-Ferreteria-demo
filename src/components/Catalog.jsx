import { useState, useMemo } from 'react'
import { I } from './Icons.jsx'
import ProductCard from './ProductCard.jsx'

export default function Catalog({ id, kicker, title, sub, cats, products, kind, onAdd, dark, loading, error }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('TODO')

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = cat === 'TODO' || p.cat.toUpperCase() === cat
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase())
      return matchCat && matchQ
    })
  }, [q, cat, products])

  return (
    <section id={id} className={`section-pad ${dark ? 'section-renta' : ''}`} style={{ position: 'relative' }}>
      <div className="corner-flag">SECCIÓN · {kind.toUpperCase()}</div>
      <div className="wrap">
        <div className="section-head">
          <div className="section-title">
            <div className="bar" />
            <div className="text">
              <div className="kicker">{kicker}</div>
              <h2>{title}</h2>
              <p className="sub">{sub}</p>
            </div>
          </div>
        </div>

        <div className="search-row">
          <label className="search">
            <I.search />
            <input
              placeholder={`Buscar en ${title.toLowerCase()}… (cemento, varilla, SKU…)`}
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            <span className="search-kbd">⌘ K</span>
          </label>
          <div className="chips">
            {cats.map(c => {
              const count = c === 'TODO'
                ? products.length
                : products.filter(p => p.cat.toUpperCase() === c).length
              return (
                <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
                  {c}<span className="count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {loading && (
          <div className="catalog-loading">— Cargando catálogo —</div>
        )}
        {error && (
          <div className="catalog-error">Error: {error}</div>
        )}
        {!loading && !error && (
          <>
            <div className="grid">
              {filtered.map(p => (
                <ProductCard key={p.id} p={p} kind={kind} onAdd={onAdd} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#9E9E9E', fontFamily: 'JetBrains Mono', fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase' }}>
                — Sin resultados —
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
