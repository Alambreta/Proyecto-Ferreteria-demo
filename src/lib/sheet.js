const ICON_MAP = {
  'ALQ-AND': 'scaffold',
  'ALQ-ESC': 'ladder',
  'ALQ-DEM': 'drill',
  'ALQ-COR': 'saw',
  'ALQ-PUL': 'saw',
  'ALQ-LIJ': 'saw',
  'ALQ-MEZ': 'mixer',
  'ALQ-VIB': 'vibrator',
  'ALQ-TAL': 'drill',
  'ALQ-DES': 'drill',
  'ALQ-HID': 'generator',
  'ALQ-MAN': 'mortar',
  'ALQ-PLT': 'generator',
  'ALQ-EXT': 'generator',
  'ALQ-COM': 'generator',
  'ALQ-BOM': 'generator',
  'ALQ-SAL': 'mixer',
  'ALQ-IZA': 'scaffold',
  'ALQ-JAR': 'saw',
  'TRN':     'truck',
  'MAQ':     'compactor',
  'MAT-CEM': 'cement',
  'MAT-ACB': 'mortar',
  'MAT-HIE': 'rebar',
  'MAT-ARD': 'block',
  'MAT-DES': 'paint',
  'CON-DIS': 'saw',
  'CON-GRA': 'block',
  'CON-BRO': 'drill',
  'CON-PUN': 'drill',
  'CON-PAL': 'drill',
  'SRV':     'blueprint',
}

function resolveIcon(sku = '') {
  return ICON_MAP[sku.slice(0, 7)] || ICON_MAP[sku.slice(0, 3)] || 'block'
}

function driveImageUrl(raw) {
  if (!raw) return null
  const match = raw.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || raw.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (match) {
    const src = encodeURIComponent(`drive.google.com/uc?export=view&id=${match[1]}`)
    return `https://wsrv.nl/?url=${src}&w=600&output=webp`
  }
  return raw
}

function parseCSV(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  let i = 0

  while (i < text.length) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue }
        inQuotes = false
      } else {
        field += c
      }
    } else {
      if (c === '"') {
        inQuotes = true
      } else if (c === ',') {
        row.push(field); field = ''
      } else if (c === '\r' || c === '\n') {
        if (c === '\r' && text[i + 1] === '\n') i++
        row.push(field)
        if (row.some(f => f)) rows.push(row)
        row = []; field = ''
      } else {
        field += c
      }
    }
    i++
  }
  if (row.length) { row.push(field); if (row.some(f => f)) rows.push(row) }
  return rows
}

function toObjects(text) {
  const rows = parseCSV(text)
  if (rows.length < 2) return []
  const [hRow, ...data] = rows
  const keys = hRow.map(h => h.trim().replace(/^﻿/, ''))
  return data.map(r => keys.reduce((o, k, i) => { o[k] = (r[i] || '').trim(); return o }, {}))
}

function rowToProduct(row, i) {
  const isRenta = row.Tipo === 'Alquiler'
  const rawPrice = isRenta ? row.Precio_Dia_COP : row.Precio_Venta_COP
  const price = rawPrice && rawPrice !== 'Consultar' ? Number(rawPrice) : null

  return {
    id:        row.SKU || `row-${i}`,
    sku:       row.SKU,
    cat:       row.Subcategoría || row.Categoría || '—',
    name:      row.Nombre_Completo || row.Nombre_Base,
    variante:  row.Variante || null,
    price,
    unit:      isRenta ? 'día' : (row.Unidad || 'und'),
    icon:      resolveIcon(row.SKU),
    imagen_url: driveImageUrl(row.imagen_url),
    stock:     row.Disponible === 'SI' ? 'high' : 'low',
    destacado: row.Destacado === 'SI',
    tipo:      row.Tipo,
    marca:     row.Marca || null,
  }
}

export function parseSheet(text) {
  return toObjects(text).map(rowToProduct)
}
