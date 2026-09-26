'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const detected = i18n.services.languageDetector?.detect();
        let normalizedLng: string;

        if (typeof detected === 'string') {
            normalizedLng = detected.startsWith('en') ? 'en' : 'es';
        } else if (Array.isArray(detected) && detected.length > 0) {
            const first = detected[0];
            if (typeof first === 'string') {
                normalizedLng = first.startsWith('en') ? 'en' : 'es';
            } else {
                normalizedLng = 'es';
            }
        } else {
            normalizedLng = 'es';
        }

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
