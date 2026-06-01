export const I = {
  hardhat: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" {...p}>
      <path d="M4 22h24v3H4z" fill="currentColor"/>
      <path d="M7 22c0-6 4-10 9-10s9 4 9 10" />
      <path d="M14 12V8h4v4" />
      <path d="M4 25h24" />
    </svg>
  ),
  cart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" {...p}>
      <path d="M3 4h3l2.5 12h11L21 8H7" />
      <circle cx="9" cy="20" r="1.6" fill="currentColor"/>
      <circle cx="18" cy="20" r="1.6" fill="currentColor"/>
    </svg>
  ),
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" {...p}>
      <circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.3.7-1.6 1.4-2.2 1.5-.6.1-1.3.1-2.1-.1-.5-.2-1.1-.4-1.9-.7-3.4-1.5-5.6-4.9-5.8-5.1-.2-.2-1.4-1.8-1.4-3.4 0-1.6.8-2.4 1.1-2.7.3-.3.7-.4 1-.4h.6c.2 0 .5 0 .8.6.3.7 1 2.3 1.1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.4-.5.6-.2.2-.3.4-.2.7.2.3.8 1.4 1.7 2.2 1.2 1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.3.1.2.1.9-.2 1.6z"/>
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" {...p}>
      <path d="M5 5l14 14M19 5L5 19"/>
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  pin:       (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 21s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  phone:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
  mail:      (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></svg>,
  truck:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/></svg>,
  shield:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  bolt:      (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>,
  cement:    (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M16 18h32l-3 30H19z"/><path d="M20 18l3-6h18l3 6"/><path d="M22 28h20M22 36h20"/></svg>,
  rebar:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M10 16h44M10 32h44M10 48h44"/><path d="M14 12l4 8M28 12l4 8M42 12l4 8M14 44l4 8M28 44l4 8M42 44l4 8"/></svg>,
  block:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="18" width="48" height="28"/><path d="M22 18v28M42 18v28M8 32h48"/></svg>,
  wood:      (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="14" width="48" height="14"/><rect x="8" y="36" width="48" height="14"/><path d="M14 14v14M26 14v14M40 14v14M52 14v14M14 36v14M26 36v14M40 36v14M52 36v14"/></svg>,
  paint:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="16" y="20" width="32" height="32"/><path d="M16 20l4-8h24l4 8M22 28h20"/></svg>,
  lime:      (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M14 22h36l-4 28H18z"/><path d="M20 22l4-8h16l4 8"/><path d="M22 32h20M22 40h20"/></svg>,
  mortar:    (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M12 24h40l-5 28H17z"/><path d="M16 24l5-8h22l5 8"/></svg>,
  sheet:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M6 22l8-8h44l-8 8M6 22h44v28H6zM50 22v28l8-8V14"/><path d="M14 30h28M14 38h28"/></svg>,
  mixer:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><ellipse cx="34" cy="28" rx="16" ry="14"/><path d="M22 38l-8 14M46 38l4 8"/><circle cx="12" cy="54" r="4"/><circle cx="52" cy="54" r="4"/><path d="M26 22l16 12"/></svg>,
  scaffold:  (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="10" y="10" width="44" height="44"/><path d="M10 24h44M10 40h44M24 10v44M40 10v44"/></svg>,
  drill:     (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M8 20h28v14H20l-4 6h-8z"/><path d="M36 24h12v6H36zM48 27h10"/></svg>,
  generator: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="20" width="48" height="28"/><circle cx="24" cy="34" r="6"/><path d="M40 28h10M40 36h10M40 44h10"/></svg>,
  saw:       (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><circle cx="38" cy="28" r="14"/><path d="M38 14v28M24 28h28M28 18l20 20M48 18L28 38"/><path d="M10 50h44"/></svg>,
  vibrator:  (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="10" y="22" width="20" height="14"/><path d="M30 28h12l8-6v14l-8-6"/><path d="M14 36v10M22 36v10"/></svg>,
  compactor: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M14 14h20l8 8v18H14z"/><path d="M10 44h44v8H10z"/><path d="M22 22v12"/></svg>,
  ladder:    (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M18 8v48M46 8v48"/><path d="M18 18h28M18 30h28M18 42h28M18 54h28"/></svg>,
  blueprint: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="6" y="10" width="52" height="44"/><path d="M6 22h52M22 10v44M14 30h6v6h-6zM30 30h14v14H30zM48 30h4v4h-4z"/></svg>,
}
