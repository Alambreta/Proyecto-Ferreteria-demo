import { useEffect } from 'react'
import { I } from './Icons.jsx'
import { fmt } from '../data/products.js'

export default function Drawer({ open, onClose, items, setItems }) {
  useEffect(() => {
    document.body.classList.toggle('locked', open)
  }, [open])

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const iva = subtotal * 0.19
  const total = subtotal + iva

  const inc = (id) => setItems(items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  const dec = (id) => setItems(
    items.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i).filter(i => i.qty > 0)
  )
  const rm = (id) => setItems(items.filter(i => i.id !== id))

  const waMsg = encodeURIComponent(
    'Hola FORJA, me interesa cotizar:\n' +
    items.map(i => `• ${i.qty}× ${i.name} (${i.kind === 'renta' ? 'renta' : 'compra'})`).join('\n') +
    `\nTotal estimado: $${fmt(total)} COP`
  )

  return (
    <>
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>TU PEDIDO</h3>
          <button className="close" onClick={onClose} aria-label="Cerrar"><I.close /></button>
        </div>
        <div className="drawer-meta">
          <span>{items.length} {items.length === 1 ? 'ítem' : 'ítems'}</span>
          <span className="live">Cotización en vivo</span>
        </div>

        <div className="drawer-list">
          {items.length === 0 && (
            <div className="drawer-empty">
              <I.cart />
              <h4>Carrito vacío</h4>
              <p>Agrega materiales de Compras o equipos de Renta para armar tu pedido.</p>
            </div>
          )}
          {items.map(i => {
            const Icon = I[i.icon] || I.block
            return (
              <div className="d-item" key={i.id + i.kind}>
                <div className="d-thumb">
                  <Icon />
                  {i.kind === 'renta' && <span className="tag">RENTA</span>}
                </div>
                <div>
                  <div className="d-name">{i.name}</div>
                  <div className="d-meta">{i.sku} · COP ${fmt(i.price)} /{i.unit}</div>
                  <div className="d-qty">
                    <button onClick={() => dec(i.id)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => inc(i.id)}>+</button>
                  </div>
                </div>
                <div className="d-right">
                  <div className="d-price">${fmt(i.price * i.qty)}</div>
                  <button className="d-remove" onClick={() => rm(i.id)}>Quitar</button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="drawer-foot">
          <div className="d-line"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
          <div className="d-line"><span>IVA 19%</span><span>${fmt(iva)}</span></div>
          <div className="d-line"><span>Envío</span><span>Por cotizar</span></div>
          <div className="d-total">
            <div className="l">TOTAL</div>
            <div className="v"><span className="currency">COP</span>${fmt(total)}</div>
          </div>
          <a
            className="wa-btn"
            href={items.length ? `https://wa.me/573128502364?text=${waMsg}` : '#'}
            target="_blank"
            rel="noreferrer"
            onClick={e => { if (!items.length) e.preventDefault() }}
            style={items.length ? {} : { opacity: .5, pointerEvents: 'none' }}
          >
            <I.whatsapp /> Enviar pedido por WhatsApp
          </a>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#9E9E9E', marginTop: 12, textAlign: 'center' }}>
            Respuesta en menos de 15 minutos · L-S 7:00–19:00
          </div>
        </div>
      </aside>
    </>
  )
}
