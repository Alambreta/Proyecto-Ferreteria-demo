import { I } from './Icons.jsx'

export default function Hero() {
  return (
    <header className="hero noise">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-blueprint">
        <I.blueprint style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="hero-inner">
        <div className="hero-tag">EST. 2017 · CALI, COLOMBIA</div>
        <h1 className="h-display">
          MATERIALES, EQUIPOS,<br />
          <span className="accent">COMPROMISO.</span><br />
          TODO AQUÍ.
        </h1>
        <p className="hero-sub">
          Materiales de obra al mayoreo y renta de equipo pesado. Entrega el mismo día en todo el área
          metropolitana. Sin letras chiquitas, sin sobreprecios.
        </p>
        <div className="hero-actions">
          <a href="#compras" className="btn btn-red">Ver Compras <I.arrow className="btn-arrow" /></a>
          <a href="#renta"   className="btn btn-outline">Rentar Equipo <I.arrow className="btn-arrow" /></a>
        </div>
        <div className="hero-meta">
          <div><div className="n">8</div><div className="l">Años en obra</div></div>
          <div><div className="n">2,400+</div><div className="l">Productos en stock</div></div>
          <div><div className="n">24h</div><div className="l">Entrega garantizada</div></div>
          <div><div className="n">98%</div><div className="l">Pedidos a tiempo</div></div>
        </div>
      </div>
    </header>
  )
}
