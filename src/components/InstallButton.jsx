import { useEffect, useState } from 'react'

function InstallButton() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [installed, setInstalled] = useState(
    () => window.matchMedia('(display-mode: standalone)').matches,
  )

  useEffect(() => {
    const handlePrompt = (event) => {
      event.preventDefault()
      setPromptEvent(event)
    }
    const handleInstalled = () => {
      setInstalled(true)
      setPromptEvent(null)
    }

    window.addEventListener('beforeinstallprompt', handlePrompt)
    window.addEventListener('appinstalled', handleInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handlePrompt)
      window.removeEventListener('appinstalled', handleInstalled)
    }
  }, [])

  if (installed || !promptEvent) return null

  const install = async () => {
    promptEvent.prompt()
    const { outcome } = await promptEvent.userChoice
    if (outcome === 'accepted') setPromptEvent(null)
  }

  return (
    <button type="button" className="install-btn" onClick={install}>
      Install app
    </button>
  )
}

export default InstallButton
