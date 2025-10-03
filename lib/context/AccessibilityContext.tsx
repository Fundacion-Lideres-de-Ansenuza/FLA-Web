"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface AccessibilitySettings {
  fontSize: number
  grayscale: boolean
  highContrast: boolean
  negativeContrast: boolean
  lightBackground: boolean
  underlineLinks: boolean
  readableFont: boolean
}

interface AccessibilityContextType extends AccessibilitySettings {
  increaseFontSize: () => void
  decreaseFontSize: () => void
  toggleGrayscale: () => void
  toggleHighContrast: () => void
  toggleNegativeContrast: () => void
  toggleLightBackground: () => void
  toggleUnderlineLinks: () => void
  toggleReadableFont: () => void
  resetAccessibility: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  grayscale: false,
  highContrast: false,
  negativeContrast: false,
  lightBackground: false,
  underlineLinks: false,
  readableFont: false,
}

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)

  useEffect(() => {
    const storedSettings = localStorage.getItem("accessibility-settings")
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("accessibility-settings", JSON.stringify(settings))

    const root = document.documentElement
    root.style.fontSize = `${settings.fontSize}px`

    root.classList.toggle("grayscale", settings.grayscale)
    root.classList.toggle("high-contrast", settings.highContrast)
    root.classList.toggle("negative-contrast", settings.negativeContrast)
    root.classList.toggle("light-background", settings.lightBackground)
    root.classList.toggle("underline-links", settings.underlineLinks)
    root.classList.toggle("readable-font", settings.readableFont)
  }, [settings])

  const increaseFontSize = () => setSettings(s => ({ ...s, fontSize: Math.min(s.fontSize + 2, 24) }))
  const decreaseFontSize = () => setSettings(s => ({ ...s, fontSize: Math.max(s.fontSize - 2, 12) }))
  const toggleGrayscale = () => setSettings(s => ({ ...s, grayscale: !s.grayscale }))
  const toggleHighContrast = () => setSettings(s => ({ ...s, highContrast: !s.highContrast }))
  const toggleNegativeContrast = () => setSettings(s => ({ ...s, negativeContrast: !s.negativeContrast }))
  const toggleLightBackground = () => setSettings(s => ({ ...s, lightBackground: !s.lightBackground }))
  const toggleUnderlineLinks = () => setSettings(s => ({ ...s, underlineLinks: !s.underlineLinks }))
  const toggleReadableFont = () => setSettings(s => ({ ...s, readableFont: !s.readableFont }))
  const resetAccessibility = () => setSettings(defaultSettings)

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        increaseFontSize,
        decreaseFontSize,
        toggleGrayscale,
        toggleHighContrast,
        toggleNegativeContrast,
        toggleLightBackground,
        toggleUnderlineLinks,
        toggleReadableFont,
        resetAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}