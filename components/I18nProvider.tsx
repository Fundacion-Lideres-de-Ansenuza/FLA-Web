'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // En el servidor el idioma es siempre 'es' (ver lib/i18n.ts); acá se aplica el del usuario.
        const detected = i18n.services.languageDetector?.detect();
        const first = Array.isArray(detected) ? detected[0] : detected;
        const normalizedLng = typeof first === 'string' && first.startsWith('en') ? 'en' : 'es';

        if (normalizedLng !== i18n.language) {
            i18n.changeLanguage(normalizedLng);
        }

        const updateHtmlLang = (lng: string) => {
            document.documentElement.lang = lng.startsWith('en') ? 'en' : 'es';
        };

        updateHtmlLang(i18n.language);
        i18n.on('languageChanged', updateHtmlLang);

        return () => {
            i18n.off('languageChanged', updateHtmlLang);
        };
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
