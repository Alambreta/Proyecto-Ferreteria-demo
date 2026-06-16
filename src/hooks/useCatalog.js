import { useState, useEffect } from 'react'
import { parseSheet } from '../lib/sheet.js'

const CACHE_KEY = 'els_catalog_v1'
const CACHE_TTL = 30 * 60 * 1000

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    return Date.now() - ts < CACHE_TTL ? data : null
  } catch { return null }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }))
  } catch {}
}

export function useCatalog() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cached = readCache()
    if (cached) {
      setItems(cached)
      setLoading(false)
      return
    }

    const ref = import.meta.env.VITE_CATALOG_SHEET_ID
    if (!ref) {
      setError('VITE_CATALOG_SHEET_ID no configurado en .env.local')
      setLoading(false)
      return
    }

    const url = ref.startsWith('http')
      ? ref
      : `https://docs.google.com/spreadsheets/d/${ref}/pub?output=csv`

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`Error al cargar catálogo (HTTP ${r.status})`)
        return r.text()
      })
      .then(text => {
        const data = parseSheet(text)
        writeCache(data)
        setItems(data)
        setLoading(false)
      })
      .catch(e => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  return { items, loading, error }
}
