function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      className="theme-btn"
      onClick={onToggle}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon" aria-hidden="true" />
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle
