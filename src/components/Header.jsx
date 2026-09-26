import InstallButton from './InstallButton.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const NAV = ['Catalog', 'Favorites', 'About', 'Contact']

function Header({ tab, onTab, favCount, isDark, onToggleTheme }) {
  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>

      <div className="header-actions">
        <nav className="nav">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              className={tab === item ? 'nav-link active' : 'nav-link'}
              onClick={() => onTab(item)}
            >
              {item}
              {item === 'Favorites' && favCount > 0 && (
                <span className="nav-badge">{favCount}</span>
              )}
            </button>
          ))}
        </nav>

        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        <InstallButton />
      </div>
    </header>
  )
}

export default Header
