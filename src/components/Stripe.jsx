import { I } from './Icons.jsx'

export default function Stripe() {
  return (
    <section className="stripe-banner noise" id="servicios">
      <div className="stripe-inner">
        <h3>OBRA EN MARCHA, <em>CERO EXCUSAS.</em></h3>
        <div className="stripe-features">
          <div className="stripe-feat"><I.truck /> Entrega mismo día</div>
          <div className="stripe-feat"><I.shield /> Equipo certificado</div>
          <div className="stripe-feat"><I.bolt /> Renta desde 24h</div>
          <div className="stripe-feat"><I.whatsapp /> Cotización por WhatsApp</div>
        </div>
      </div>
    </section>
  )
}
