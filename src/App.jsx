import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import Favorites from './pages/Favorites.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import useFavorites from './hooks/useFavorites.js'
import useTheme from './hooks/useTheme.js'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')
  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="shell">
      <Header
        tab={tab}
        onTab={setTab}
        favCount={favorites.length}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="main">
        {tab === 'Catalog' && (
          <Catalog isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
        )}
        {tab === 'Favorites' && (
          <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
        )}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
      </main>

      <Footer />
    </div>
  )
}

export default App
