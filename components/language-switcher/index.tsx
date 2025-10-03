'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n/config'

export default function LanguageSwitcher() {
  const pathname = usePathname()

  const getLocaleFromPath = (path: string) => {
    const segments = path.split('/')
    return i18n.locales.find(locale => locale === segments[1]) || i18n.defaultLocale
  }

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const currentLocale = getLocaleFromPath(pathname)

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">{currentLocale.toUpperCase()}</span>
        <div className="flex items-center space-x-1">
          {i18n.locales.map(locale => {
            if (locale === currentLocale) return null
            return (
              <Link
                key={locale}
                href={redirectedPathName(locale)}
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {locale.toUpperCase()}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}