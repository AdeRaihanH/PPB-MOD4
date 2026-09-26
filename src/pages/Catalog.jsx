import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { filterGuns } from '../utils/filterGuns.js'

function Catalog({ isFavorite, onToggleFavorite }) {
  const [query, setQuery] = useState('')
  const results = filterGuns(GUNS, query)

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{results.length} pieces</span>
        </div>

        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search name, type, or caliber…"
        />

        {results.length === 0 ? (
          <p className="empty">No pieces match “{query.trim()}”.</p>
        ) : (
          <ul className="stock">
            {results.map((gun) => (
              <GunCard
                key={gun.name}
                gun={gun}
                isFavorite={isFavorite(gun.name)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
