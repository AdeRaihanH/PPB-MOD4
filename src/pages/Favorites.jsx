import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { filterGuns } from '../utils/filterGuns.js'

function Favorites({ favorites, onToggleFavorite }) {
  const [query, setQuery] = useState('')
  const saved = GUNS.filter((gun) => favorites.includes(gun.name))
  const results = filterGuns(saved, query)

  return (
    <>
      <section className="masthead">
        <h1 className="display">Your saved pieces.</h1>
        <p className="lede">
          Favorites live on this device, so they are still here when the network is not.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Saved</h2>
          <span className="count">{results.length} pieces</span>
        </div>

        {saved.length === 0 ? (
          <p className="empty">
            Nothing saved yet. Open the catalog and tap the star on any card.
          </p>
        ) : (
          <>
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search saved pieces…"
            />

            {results.length === 0 ? (
              <p className="empty">No saved pieces match “{query.trim()}”.</p>
            ) : (
              <ul className="stock">
                {results.map((gun) => (
                  <GunCard
                    key={gun.name}
                    gun={gun}
                    isFavorite
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </>
  )
}

export default Favorites
