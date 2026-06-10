import { Link } from 'react-router-dom'
import { I } from './Icons.jsx'

const RULER_MARKS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const ALL_ICONS = [
  I.cement, I.rebar, I.block, I.wood, I.paint,
  I.mortar, I.mixer, I.drill, I.scaffold, I.saw,
  I.ladder, I.generator, I.compactor, I.vibrator, I.sheet,
]

// Deterministic grid: 9 cols × 5 rows, alternating-row stagger
const PATTERN_ITEMS = Array.from({ length: 45 }, (_, i) => ({
  Icon:     ALL_ICONS[i % ALL_ICONS.length],
  rotation: (i * 53 + Math.floor(i / 9) * 19) % 360,
  row:      Math.floor(i / 9),
  col:      i % 9,
}))

// Duplicated for seamless loop
const CONVEYOR_TRACK = [...ALL_ICONS, ...ALL_ICONS]

function Ruler({ flip = false }) {
  return (
    <div className={`hero-ruler${flip ? ' hero-ruler--bottom' : ''}`} aria-hidden="true">
      {RULER_MARKS.map(n => (
        <div key={n} className="ruler-tick">
          <span className="ruler-num">{n}</span>
        </div>
      ))}
    </div>
  )
}

function HeroPattern() {
  return (
    <div className="hero-pattern" aria-hidden="true">
      {PATTERN_ITEMS.map(({ Icon, rotation, row, col }, i) => (
        <div
          key={i}
          className="hero-pattern-item"
          style={{
            left: `${(col / 8) * 100 + (row % 2) * 5.5}%`,
            top:  `${10 + (row / 4) * 80}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          }}
        >
          <Icon />
        </div>
      ))}
    </div>
  )
}

function BubbleLevel() {
  return (
    <div className="nivel" aria-hidden="true">
      <div className="nivel-tube">
        <div className="nivel-marks">
          <span /><span /><span className="nivel-center" /><span /><span />
        </div>
        <div className="nivel-bubble" />
      </div>
      <span className="nivel-label">NIVEL</span>
    </div>
  )
}


function ConveyorBelt({ reverse = false }) {
  return (
    <div className="conveyor" aria-hidden="true">
      <div className="conveyor-inner" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {CONVEYOR_TRACK.map((Icon, i) => (
          <span key={i} className="conveyor-item">
            <Icon />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <header className="hero noise">
      <div className="hero-bg" />
<HeroPattern />
      <div className="hero-inner">
        <ConveyorBelt reverse />
        <div className="hero-title-block">
          <span>EST. 2017</span>
          <span className="hero-title-divider" />
          <span>CALI, COLOMBIA</span>
        </div>
        <div className="hero-body">
          <h1 className="h-display">
            TU OBRA AVANZA.<br />
            <span className="accent">NOSOTROS</span><br />
            LA RESPALDAMOS.
          </h1>
          <aside className="hero-callout" aria-hidden="true">
            <div className="callout-item">spec: MAT-001</div>
            <div className="callout-item callout-approved">rev: 08 · APROBADO ✓</div>
            <div className="callout-item">escala: 1:1</div>
            <BubbleLevel />
          </aside>
        </div>
        <p className="hero-sub">
          Materiales de obra al mayoreo y renta de equipo pesado. Entrega el mismo día en todo el área
          metropolitana. Sin letras chiquitas, sin sobreprecios.
        </p>
        <div className="hero-actions">
          <Link to="/compras" className="btn btn-red">Ver Compras <I.arrow className="btn-arrow" /></Link>
          <Link to="/renta"   className="btn btn-outline">Rentar Equipo <I.arrow className="btn-arrow" /></Link>
        </div>
        <ConveyorBelt />
        <div className="hero-meta">
          <div>
            <div className="meta-head">ANTIGÜEDAD</div>
            <div className="n">8</div>
            <div className="l">Años en obra</div>
          </div>
          <div>
            <div className="meta-head">EN STOCK</div>
            <div className="n">2,400+</div>
            <div className="l">Productos en stock</div>
          </div>
          <div>
            <div className="meta-head">COBERTURA</div>
            <div className="n">lunes - viernes</div>
            <div className="l">Entrega garantizada</div>
          </div>
          <div>
            <div className="meta-head">CUMPLIMIENTO</div>
            <div className="n">98%</div>
            <div className="l">Pedidos a tiempo</div>
          </div>
        </div>
      </div>
    </header>
  )
}
