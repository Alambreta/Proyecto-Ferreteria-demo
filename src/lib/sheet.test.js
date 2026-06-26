import { describe, it, expect } from 'vitest'
import { parsePrice, driveImageUrl, parseCSV, parseSheet } from './sheet.js'

describe('parsePrice', () => {
  it('acepta un entero plano', () => {
    expect(parsePrice('15000')).toBe(15000)
  })

  it('interpreta puntos de miles colombianos (este era el bug)', () => {
    expect(parsePrice('15.000')).toBe(15000)
    expect(parsePrice('1.000.000')).toBe(1000000)
  })

  it('limpia símbolos de moneda y espacios', () => {
    expect(parsePrice('$ 1.500.000 COP')).toBe(1500000)
  })

  it('devuelve null para "Consultar"', () => {
    expect(parsePrice('Consultar')).toBeNull()
  })

  it('devuelve null para vacío, espacios, null o undefined', () => {
    expect(parsePrice('')).toBeNull()
    expect(parsePrice('   ')).toBeNull()
    expect(parsePrice(null)).toBeNull()
    expect(parsePrice(undefined)).toBeNull()
  })

  it('devuelve null para texto sin dígitos (nunca NaN)', () => {
    expect(parsePrice('abc')).toBeNull()
  })
})

describe('driveImageUrl', () => {
  it('extrae el id de una URL /file/d/ y arma el proxy wsrv.nl', () => {
    const out = driveImageUrl('https://drive.google.com/file/d/ABC123_xyz/view?usp=sharing')
    expect(out).toContain('wsrv.nl')
    expect(out).toContain(encodeURIComponent('id=ABC123_xyz'))
  })

  it('extrae el id de una URL con ?id=', () => {
    const out = driveImageUrl('https://drive.google.com/uc?export=view&id=XYZ789')
    expect(out).toContain('wsrv.nl')
    expect(out).toContain(encodeURIComponent('id=XYZ789'))
  })

  it('devuelve null si no hay valor', () => {
    expect(driveImageUrl('')).toBeNull()
    expect(driveImageUrl(null)).toBeNull()
  })

  it('devuelve la URL tal cual si no es de Drive', () => {
    const raw = 'https://example.com/foto.png'
    expect(driveImageUrl(raw)).toBe(raw)
  })
})

describe('parseCSV', () => {
  it('parsea filas simples', () => {
    expect(parseCSV('a,b,c\n1,2,3')).toEqual([['a', 'b', 'c'], ['1', '2', '3']])
  })

  it('respeta comas dentro de comillas', () => {
    expect(parseCSV('name,price\n"Cemento, gris",15000'))
      .toEqual([['name', 'price'], ['Cemento, gris', '15000']])
  })

  it('maneja comillas escapadas ("")', () => {
    expect(parseCSV('a\n"dice ""hola"""')).toEqual([['a'], ['dice "hola"']])
  })

  it('maneja saltos de línea CRLF de Windows', () => {
    expect(parseCSV('a,b\r\n1,2')).toEqual([['a', 'b'], ['1', '2']])
  })

  it('descarta filas completamente vacías', () => {
    expect(parseCSV('a,b\n1,2\n\n3,4')).toEqual([['a', 'b'], ['1', '2'], ['3', '4']])
  })
})

describe('parseSheet', () => {
  const header = 'SKU,Tipo,Nombre_Completo,Precio_Venta_COP,Precio_Dia_COP,Disponible,Destacado,Categoría'

  it('mapea una fila de venta a producto', () => {
    const csv = `${header}\nMAT-CEM-01,Venta Materiales,Cemento Argos,15.000,,SI,SI,Cementos`
    const [p] = parseSheet(csv)
    expect(p.sku).toBe('MAT-CEM-01')
    expect(p.name).toBe('Cemento Argos')
    expect(p.price).toBe(15000)
    expect(p.unit).toBe('und')
    expect(p.stock).toBe('high')
    expect(p.destacado).toBe(true)
  })

  it('usa el precio por día y unidad "día" para alquiler', () => {
    const csv = `${header}\nALQ-AND-01,Alquiler,Andamio,,50.000,NO,NO,Andamios`
    const [p] = parseSheet(csv)
    expect(p.price).toBe(50000)
    expect(p.unit).toBe('día')
    expect(p.stock).toBe('low')
    expect(p.destacado).toBe(false)
  })

  it('deja price en null cuando dice "Consultar"', () => {
    const csv = `${header}\nMAQ-01,Maquinaria Amarilla,Retroexcavadora,Consultar,,SI,NO,Maquinaria`
    const [p] = parseSheet(csv)
    expect(p.price).toBeNull()
  })
})
