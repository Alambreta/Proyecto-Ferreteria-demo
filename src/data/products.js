export const COMPRAS = [
  { id: 'c01', sku: 'CEM-001', cat: 'Cemento', name: 'Cemento Gris CPC 30R · 50 kg',      price: 289,  unit: 'saco',   icon: 'cement',  stock: 'high', badge: '-10%',       featured: true },
  { id: 'c02', sku: 'VAR-038', cat: 'Acero',   name: 'Varilla Corrugada 3/8" · 12 m',     price: 215,  unit: 'pza',    icon: 'rebar',   stock: 'high',                       featured: true },
  { id: 'c03', sku: 'BLK-122', cat: 'Block',   name: 'Block de Concreto 12×20×40',        price: 18.5, unit: 'pza',    icon: 'block',   stock: 'high' },
  { id: 'c04', sku: 'MAD-168', cat: 'Madera',  name: "Tabla Pino 1×6×8' Cepillada",      price: 189,  unit: 'pza',    icon: 'wood',    stock: 'low',  badge: 'POCO STOCK' },
  { id: 'c05', sku: 'CAL-025', cat: 'Cal',     name: 'Saco de Cal Hidratada · 25 kg',     price: 109,  unit: 'saco',   icon: 'lime',    stock: 'high' },
  { id: 'c06', sku: 'MOR-050', cat: 'Mortero', name: 'Mortero Premezclado · 50 kg',       price: 175,  unit: 'saco',   icon: 'mortar',  stock: 'high' },
  { id: 'c07', sku: 'LAM-CAL', cat: 'Lámina',  name: 'Lámina Galvanizada Cal. 26',        price: 325,  unit: 'pza',    icon: 'sheet',   stock: 'high',                       featured: true },
  { id: 'c08', sku: 'PIN-019', cat: 'Pintura', name: 'Pintura Vinílica Blanca · 19 L',    price: 1290, unit: 'cubeta', icon: 'paint',   stock: 'high', badge: 'NUEVO',       featured: true },
]

export const RENTA = [
  { id: 'r01', sku: 'REV-001', cat: 'Concreto',      name: 'Revolvedora 1 Saco · Gasolina',    price: 480, unit: 'día', icon: 'mixer',     stock: 'high', featured: true },
  { id: 'r02', sku: 'AND-150', cat: 'Andamio',       name: 'Andamio Tubular Sección 1.5 m',    price: 65,  unit: 'día', icon: 'scaffold',  stock: 'high' },
  { id: 'r03', sku: 'ROT-SDS', cat: 'Eléctrica',     name: 'Rotomartillo SDS-Max 1500 W',      price: 320, unit: 'día', icon: 'drill',     stock: 'high', featured: true },
  { id: 'r04', sku: 'GEN-5KW', cat: 'Energía',       name: 'Generador Portátil 5 kW',          price: 850, unit: 'día', icon: 'generator', stock: 'low',  featured: true },
  { id: 'r05', sku: 'COR-014', cat: 'Eléctrica',     name: 'Cortadora de Disco 14"',           price: 280, unit: 'día', icon: 'saw',       stock: 'high' },
  { id: 'r06', sku: 'VIB-CON', cat: 'Concreto',      name: 'Vibrador para Concreto',           price: 240, unit: 'día', icon: 'vibrator',  stock: 'high' },
  { id: 'r07', sku: 'COM-BAI', cat: 'Compactación',  name: 'Compactadora Bailarina 70 kg',     price: 620, unit: 'día', icon: 'compactor', stock: 'high', featured: true },
  { id: 'r08', sku: 'ESC-TEL', cat: 'Acceso',        name: 'Escalera Telescópica 4.4 m',       price: 140, unit: 'día', icon: 'ladder',    stock: 'high' },
]

export const CATS_C = ['TODO', 'CEMENTO', 'ACERO', 'BLOCK', 'MADERA', 'CAL', 'MORTERO', 'LÁMINA', 'PINTURA']
export const CATS_R = ['TODO', 'CONCRETO', 'ANDAMIO', 'ELÉCTRICA', 'ENERGÍA', 'COMPACTACIÓN', 'ACCESO']

export const fmt = (n) => n.toLocaleString('es-CO', { maximumFractionDigits: 0 })
