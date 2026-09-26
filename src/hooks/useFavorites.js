import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'bore-and-barrel:favorites'

function readFavorites() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // storage unavailable (private mode) — favorites stay in memory for this session
    }
  }, [favorites])

  const toggleFavorite = useCallback((name) => {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    )
  }, [])

  const isFavorite = useCallback((name) => favorites.includes(name), [favorites])

  return { favorites, toggleFavorite, isFavorite }
}

export default useFavorites
