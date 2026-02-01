'use client';

import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initI18n = async () => {
            // Check if user already has a saved preference
            const savedLanguage = localStorage.getItem('i18nextLng');

            if (!savedLanguage) {
                try {
                    // Detect location via IP
                    const response = await fetch('https://ipapi.co/json/');
                    const data = await response.json();

                    // Argentina code is AR
                    const lang = data.country_code === 'AR' ? 'es' : 'en';

                    await i18n.changeLanguage(lang);
                    localStorage.setItem('i18nextLng', lang);
                } catch (error) {
                    console.error('Error detecting location:', error);
                    // Fallback to Spanish
                    await i18n.changeLanguage('es');
                }
            } else {
                await i18n.changeLanguage(savedLanguage);
            }
            setIsReady(true);
        };

        initI18n();
    }, []);

    // Show loading spinner until i18n is ready to prevent hydration mismatch
    if (!isReady) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse">
                    <div className="w-16 h-16 border-4 border-[#bc2222] border-t-transparent rounded-full animate-spin" />
                </div>
            </div>
        );
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
