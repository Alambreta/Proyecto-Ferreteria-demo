const { useState, useEffect, useMemo, useRef } = React;

/* ============== ICONS ============== */
const I = {
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
  pin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 21s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></svg>,
  truck: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  bolt: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>,
  /* product placeholder icons (simple geometric) */
  cement: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M16 18h32l-3 30H19z"/><path d="M20 18l3-6h18l3 6"/><path d="M22 28h20M22 36h20"/></svg>,
  rebar: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M10 16h44M10 32h44M10 48h44"/><path d="M14 12l4 8M28 12l4 8M42 12l4 8M14 44l4 8M28 44l4 8M42 44l4 8"/></svg>,
  block: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="18" width="48" height="28"/><path d="M22 18v28M42 18v28M8 32h48"/></svg>,
  wood: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="14" width="48" height="14"/><rect x="8" y="36" width="48" height="14"/><path d="M14 14v14M26 14v14M40 14v14M52 14v14M14 36v14M26 36v14M40 36v14M52 36v14"/></svg>,
  paint: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="16" y="20" width="32" height="32"/><path d="M16 20l4-8h24l4 8M22 28h20"/></svg>,
  lime: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M14 22h36l-4 28H18z"/><path d="M20 22l4-8h16l4 8"/><path d="M22 32h20M22 40h20"/></svg>,
  mortar: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M12 24h40l-5 28H17z"/><path d="M16 24l5-8h22l5 8"/></svg>,
  sheet: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M6 22l8-8h44l-8 8M6 22h44v28H6zM50 22v28l8-8V14"/><path d="M14 30h28M14 38h28"/></svg>,
  mixer: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><ellipse cx="34" cy="28" rx="16" ry="14"/><path d="M22 38l-8 14M46 38l4 8"/><circle cx="12" cy="54" r="4"/><circle cx="52" cy="54" r="4"/><path d="M26 22l16 12"/></svg>,
  scaffold: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="10" y="10" width="44" height="44"/><path d="M10 24h44M10 40h44M24 10v44M40 10v44"/></svg>,
  drill: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M8 20h28v14H20l-4 6h-8z"/><path d="M36 24h12v6H36zM48 27h10"/></svg>,
  generator: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="8" y="20" width="48" height="28"/><circle cx="24" cy="34" r="6"/><path d="M40 28h10M40 36h10M40 44h10"/></svg>,
  saw: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><circle cx="38" cy="28" r="14"/><path d="M38 14v28M24 28h28M28 18l20 20M48 18L28 38"/><path d="M10 50h44"/></svg>,
  vibrator: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><rect x="10" y="22" width="20" height="14"/><path d="M30 28h12l8-6v14l-8-6"/><path d="M14 36v10M22 36v10"/></svg>,
  compactor: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M14 14h20l8 8v18H14z"/><path d="M10 44h44v8H10z"/><path d="M22 22v12"/></svg>,
  ladder: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" {...p}><path d="M18 8v48M46 8v48"/><path d="M18 18h28M18 30h28M18 42h28M18 54h28"/></svg>,
  blueprint: (p) => <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="6" y="10" width="52" height="44"/><path d="M6 22h52M22 10v44M14 30h6v6h-6zM30 30h14v14H30zM48 30h4v4h-4z"/></svg>,
};

/* ============== DATA ============== */
const COMPRAS = [
  { id:"c01", sku:"CEM-001", cat:"Cemento", name:"Cemento Gris CPC 30R · 50 kg", price:289, unit:"saco", icon:"cement", stock:"high", badge:"-10%" },
  { id:"c02", sku:"VAR-038", cat:"Acero",   name:"Varilla Corrugada 3/8\" · 12 m", price:215, unit:"pza", icon:"rebar", stock:"high" },
  { id:"c03", sku:"BLK-122", cat:"Block",   name:"Block de Concreto 12×20×40", price:18.5, unit:"pza", icon:"block", stock:"high" },
  { id:"c04", sku:"MAD-168", cat:"Madera",  name:"Tabla Pino 1×6×8' Cepillada", price:189, unit:"pza", icon:"wood", stock:"low", badge:"POCO STOCK" },
  { id:"c05", sku:"CAL-025", cat:"Cal",     name:"Saco de Cal Hidratada · 25 kg", price:109, unit:"saco", icon:"lime", stock:"high" },
  { id:"c06", sku:"MOR-050", cat:"Mortero", name:"Mortero Premezclado · 50 kg", price:175, unit:"saco", icon:"mortar", stock:"high" },
  { id:"c07", sku:"LAM-CAL", cat:"Lámina",  name:"Lámina Galvanizada Cal. 26", price:325, unit:"pza", icon:"sheet", stock:"high" },
  { id:"c08", sku:"PIN-019", cat:"Pintura", name:"Pintura Vinílica Blanca · 19 L", price:1290, unit:"cubeta", icon:"paint", stock:"high", badge:"NUEVO" },
];

const RENTA = [
  { id:"r01", sku:"REV-001", cat:"Concreto", name:"Revolvedora 1 Saco · Gasolina", price:480, unit:"día", icon:"mixer", stock:"high" },
  { id:"r02", sku:"AND-150", cat:"Andamio",  name:"Andamio Tubular Sección 1.5 m", price:65, unit:"día", icon:"scaffold", stock:"high" },
  { id:"r03", sku:"ROT-SDS", cat:"Eléctrica",name:"Rotomartillo SDS-Max 1500 W", price:320, unit:"día", icon:"drill", stock:"high" },
  { id:"r04", sku:"GEN-5KW", cat:"Energía",  name:"Generador Portátil 5 kW", price:850, unit:"día", icon:"generator", stock:"low" },
  { id:"r05", sku:"COR-014", cat:"Eléctrica",name:"Cortadora de Disco 14\"", price:280, unit:"día", icon:"saw", stock:"high" },
  { id:"r06", sku:"VIB-CON", cat:"Concreto", name:"Vibrador para Concreto", price:240, unit:"día", icon:"vibrator", stock:"high" },
  { id:"r07", sku:"COM-BAI", cat:"Compactación", name:"Compactadora Bailarina 70 kg", price:620, unit:"día", icon:"compactor", stock:"high" },
  { id:"r08", sku:"ESC-TEL", cat:"Acceso",   name:"Escalera Telescópica 4.4 m", price:140, unit:"día", icon:"ladder", stock:"high" },
];

const CATS_C = ["TODO","CEMENTO","ACERO","BLOCK","MADERA","CAL","MORTERO","LÁMINA","PINTURA"];
const CATS_R = ["TODO","CONCRETO","ANDAMIO","ELÉCTRICA","ENERGÍA","COMPACTACIÓN","ACCESO"];

const fmt = (n) => n.toLocaleString("es-MX",{maximumFractionDigits:2});

/* ============== NAV ============== */
function Logo({ small }){
  return (
    <div className="logo">
      <div className="logo-mark"><I.hardhat /></div>
      <div className="logo-name">
        FORJA
        <span>Materiales · Renta</span>
      </div>
    </div>
  );
}

function Nav({ cartCount, onOpenCart, activeSection }){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const fn = () => setScrolled(window.scrollY > 24);
    fn(); window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  },[]);
  const links = [
    { id:"compras", label:"Compras" },
    { id:"renta", label:"Renta" },
    { id:"servicios", label:"Servicios" },
    { id:"cobertura", label:"Cobertura" },
    { id:"contacto", label:"Contacto" },
  ];
  return (
    <nav className={`nav ${scrolled?"scrolled":""}`}>
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${activeSection===l.id?"active":""}`}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-wa" href="#contacto">
            <I.whatsapp /> <span>+52 81 1234 5678</span>
          </a>
          <button className="cart-btn" onClick={onOpenCart} aria-label="Abrir carrito">
            <I.cart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ============== HERO ============== */
function Hero(){
  return (
    <header className="hero noise" data-screen-label="01 Hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-blueprint">{I.blueprint({ style:{width:"100%",height:"100%"} })}</div>
      <div className="hero-inner">
        <div className="hero-tag">EST. 1997 · MONTERREY, N.L.</div>
        <h1 className="h-display">
          CONSTRUIMOS<br/>
          CON <span className="accent">FIERRO</span><br/>
          Y PALABRA.
        </h1>
        <p className="hero-sub">
          Materiales de obra al mayoreo y renta de equipo pesado. Entrega el mismo día en todo el área
          metropolitana. Sin letras chiquitas, sin sobreprecios.
        </p>
        <div className="hero-actions">
          <a href="#compras" className="btn btn-red">Ver Compras <I.arrow className="btn-arrow"/></a>
          <a href="#renta"   className="btn btn-outline">Rentar Equipo <I.arrow className="btn-arrow"/></a>
        </div>
        <div className="hero-meta">
          <div><div className="n">27</div><div className="l">Años en obra</div></div>
          <div><div className="n">2,400+</div><div className="l">Productos en stock</div></div>
          <div><div className="n">24h</div><div className="l">Entrega garantizada</div></div>
          <div><div className="n">98%</div><div className="l">Pedidos a tiempo</div></div>
        </div>
      </div>
    </header>
  );
}

/* ============== DIAGONAL CUT ============== */
function DiagonalCut({ from="#1A1A1A", to="#FFFFFF" }){
  return (
    <div className="diagonal-cut" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <polygon points="0,90 1440,0 1440,90" fill={to} />
        <polygon points="0,90 1440,0 0,86" fill={from} />
        <polygon points="0,90 1440,0 1440,4" fill="#CC1212" opacity=".0"/>
        <line x1="0" y1="90" x2="1440" y2="0" stroke="#CC1212" strokeWidth="3"/>
      </svg>
    </div>
  );
}

/* ============== STRIPE BANNER ============== */
function Stripe(){
  return (
    <section className="stripe-banner noise" id="servicios" data-screen-label="03 Stripe">
      <div className="stripe-inner">
        <h3>OBRA EN MARCHA, <em>CERO EXCUSAS.</em></h3>
        <div className="stripe-features">
          <div className="stripe-feat"><I.truck/> Entrega mismo día</div>
          <div className="stripe-feat"><I.shield/> Equipo certificado</div>
          <div className="stripe-feat"><I.bolt/> Renta desde 24h</div>
          <div className="stripe-feat"><I.whatsapp/> Cotización por WhatsApp</div>
        </div>
      </div>
    </section>
  );
}

/* ============== PRODUCT CARD ============== */
function ProductCard({ p, kind, onAdd }){
  const Icon = I[p.icon] || I.block;
  const isRenta = kind === "renta";
  return (
    <article className={`card ${isRenta?"renta":""}`}>
      <div className="card-media">
        <span className="card-sku mono">{p.sku}</span>
        {isRenta && <div className="ribbon">RENTA</div>}
        {!isRenta && p.badge && <div className={`ribbon ${p.badge==="POCO STOCK"?"stock":""}`}>{p.badge}</div>}
        <Icon />
      </div>
      <div className="card-body">
        <div className="card-cat">{p.cat}</div>
        <h3 className="card-name">{p.name}</h3>
        <span className={`stock-dot ${p.stock==="low"?"low":""}`}>
          {p.stock==="low" ? "Pocas piezas" : "En stock"}
        </span>
        <div className="card-foot">
          <div className="card-price">
            <span className="currency">MXN</span>
            <span className="amount">${fmt(p.price)}</span>
            <span className="unit">/{p.unit}</span>
          </div>
          <button className="btn btn-dark" onClick={() => onAdd(p, kind)}>
            {isRenta ? "Rentar" : "Agregar"} <I.arrow className="btn-arrow" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ============== SECTION ============== */
function Catalog({ id, kicker, title, sub, cats, products, kind, onAdd, dark }){
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("TODO");
  const filtered = useMemo(()=>{
    return products.filter(p => {
      const matchCat = cat==="TODO" || p.cat.toUpperCase() === cat;
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  },[q,cat,products]);

  return (
    <section id={id} className={`section-pad ${dark?"section-renta":""}`} data-screen-label={`02 ${title}`} style={{position:"relative"}}>
      <div className="corner-flag">SECCIÓN · {kind.toUpperCase()}</div>
      <div className="wrap">
        <div className="section-head">
          <div className="section-title">
            <div className="bar"/>
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
              onChange={e=>setQ(e.target.value)}
            />
            <span className="search-kbd">⌘ K</span>
          </label>
          <div className="chips">
            {cats.map(c => {
              const count = c==="TODO" ? products.length : products.filter(p=>p.cat.toUpperCase()===c).length;
              return (
                <button key={c} className={`chip ${cat===c?"active":""}`} onClick={()=>setCat(c)}>
                  {c}<span className="count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid">
          {filtered.map(p => <ProductCard key={p.id} p={p} kind={kind} onAdd={onAdd} />)}
        </div>
        {filtered.length===0 && (
          <div style={{padding:"60px 0",textAlign:"center",color:"#9E9E9E",fontFamily:"JetBrains Mono",fontSize:13,letterSpacing:".18em",textTransform:"uppercase"}}>
            — Sin resultados —
          </div>
        )}
      </div>
    </section>
  );
}

/* ============== CART DRAWER ============== */
function Drawer({ open, onClose, items, setItems }){
  useEffect(()=>{
    document.body.classList.toggle("locked", open);
  },[open]);

  const subtotal = items.reduce((s,i)=> s + i.price * i.qty, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const inc = (id) => setItems(items.map(i => i.id===id ? {...i, qty:i.qty+1} : i));
  const dec = (id) => setItems(items.map(i => i.id===id ? {...i, qty:Math.max(1,i.qty-1)} : i).filter(i=>i.qty>0));
  const rm  = (id) => setItems(items.filter(i => i.id!==id));

  const waMsg = encodeURIComponent(
    "Hola FORJA, me interesa cotizar:\n" +
    items.map(i => `• ${i.qty}× ${i.name} (${i.kind==="renta"?"renta":"compra"})`).join("\n") +
    `\nTotal estimado: $${fmt(total)} MXN`
  );

  return (
    <>
      <div className={`drawer-backdrop ${open?"open":""}`} onClick={onClose}/>
      <aside className={`drawer ${open?"open":""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>TU PEDIDO</h3>
          <button className="close" onClick={onClose} aria-label="Cerrar"><I.close/></button>
        </div>
        <div className="drawer-meta">
          <span>{items.length} {items.length===1?"ítem":"ítems"}</span>
          <span className="live">Cotización en vivo</span>
        </div>

        <div className="drawer-list">
          {items.length===0 && (
            <div className="drawer-empty">
              <I.cart />
              <h4>Carrito vacío</h4>
              <p>Agrega materiales de Compras o equipos de Renta para armar tu pedido.</p>
            </div>
          )}
          {items.map(i => {
            const Icon = I[i.icon] || I.block;
            return (
              <div className="d-item" key={i.id+i.kind}>
                <div className="d-thumb">
                  <Icon />
                  {i.kind==="renta" && <span className="tag">RENTA</span>}
                </div>
                <div>
                  <div className="d-name">{i.name}</div>
                  <div className="d-meta">{i.sku} · ${fmt(i.price)} /{i.unit}</div>
                  <div className="d-qty">
                    <button onClick={()=>dec(i.id)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={()=>inc(i.id)}>+</button>
                  </div>
                </div>
                <div className="d-right">
                  <div className="d-price">${fmt(i.price * i.qty)}</div>
                  <button className="d-remove" onClick={()=>rm(i.id)}>Quitar</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="drawer-foot">
          <div className="d-line"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
          <div className="d-line"><span>IVA 16%</span><span>${fmt(iva)}</span></div>
          <div className="d-line"><span>Envío</span><span>Por cotizar</span></div>
          <div className="d-total">
            <div className="l">TOTAL</div>
            <div className="v"><span className="currency">MXN</span>${fmt(total)}</div>
          </div>
          <a
            className="wa-btn"
            href={items.length ? `https://wa.me/528112345678?text=${waMsg}` : "#"}
            target="_blank" rel="noreferrer"
            onClick={e=>{ if(!items.length) e.preventDefault(); }}
            style={items.length?{}:{opacity:.5,pointerEvents:"none"}}
          >
            <I.whatsapp/> Enviar pedido por WhatsApp
          </a>
          <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#9E9E9E",marginTop:12,textAlign:"center"}}>
            Respuesta en menos de 15 minutos · L-S 7:00–19:00
          </div>
        </div>
      </aside>
    </>
  );
}

/* ============== FOOTER ============== */
function Footer(){
  return (
    <footer id="contacto" data-screen-label="05 Footer">
      <div className="footer-top-line"/>
      <div className="footer-inner">
        <div className="f-brand">
          <Logo/>
          <p>Materiales de construcción y renta de equipo para obra residencial, comercial e industrial. Operando en Monterrey y su área metropolitana desde 1997.</p>
          <div className="f-cert">
            <span>ISO 9001</span>
            <span>NOM-006-STPS</span>
            <span>CFE Aprobado</span>
          </div>
        </div>
        <div className="f-col">
          <h5>Catálogo</h5>
          <ul>
            <li><a href="#compras">Materiales</a></li>
            <li><a href="#renta">Renta de Equipo</a></li>
            <li><a href="#">Herramienta</a></li>
            <li><a href="#">Seguridad Industrial</a></li>
            <li><a href="#">Acero y Estructuras</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Empresa</h5>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Crédito Empresarial</a></li>
            <li><a href="#">Bolsa de Trabajo</a></li>
            <li><a href="#">Proveedores</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Contacto</h5>
          <ul className="f-contact">
            <li><I.pin/><span>Av. Constitución 4520<br/>Col. Industrial, Monterrey</span></li>
            <li><I.phone/><span>+52 81 1234 5678</span></li>
            <li><I.whatsapp/><span>WhatsApp 24/7</span></li>
            <li><I.mail/><span>obra@forja.mx</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 FORJA Materiales S.A. de C.V.</span>
        <div className="legal">
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Facturación</a>
        </div>
      </div>
    </footer>
  );
}

/* ============== APP ============== */
function App(){
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([
    // pre-seed so first impression isn't empty
    { ...COMPRAS[0], qty:20, kind:"compra" },
    { ...RENTA[0],   qty:2,  kind:"renta" },
  ]);
  const [active, setActive] = useState("compras");

  const cartCount = items.reduce((s,i)=>s+i.qty,0);

  const addItem = (p, kind) => {
    setItems(prev => {
      const existing = prev.find(i => i.id===p.id && i.kind===kind);
      if (existing) return prev.map(i => i.id===p.id && i.kind===kind ? {...i, qty:i.qty+1} : i);
      return [...prev, {...p, qty:1, kind}];
    });
    // bump cart icon
    const btn = document.querySelector(".cart-btn");
    if (btn){ btn.animate(
      [{transform:"scale(1)"},{transform:"scale(1.18)"},{transform:"scale(1)"}],
      {duration:280, easing:"cubic-bezier(.4,1.6,.4,1)"}
    );}
  };

  // active section tracking
  useEffect(()=>{
    const ids = ["compras","renta","servicios","cobertura","contacto"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "compras";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={()=>setCartOpen(true)} activeSection={active}/>
      <Hero/>
      <DiagonalCut from="#1A1A1A" to="#FFFFFF"/>

      <Catalog
        id="compras"
        kicker="01 / Catálogo"
        title="COMPRAS"
        sub="Materiales al mayoreo con entrega el mismo día. Precios firmes por 48 horas tras tu cotización."
        cats={CATS_C}
        products={COMPRAS}
        kind="compra"
        onAdd={addItem}
      />

      <Stripe/>

      <Catalog
        id="renta"
        kicker="02 / Renta de Equipo"
        title="RENTA"
        sub="Equipo profesional listo para obra. Renta mínima 24 horas, con opción de operador certificado."
        cats={CATS_R}
        products={RENTA}
        kind="renta"
        onAdd={addItem}
        dark
      />

      <Footer/>
      <Drawer open={cartOpen} onClose={()=>setCartOpen(false)} items={items} setItems={setItems}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
