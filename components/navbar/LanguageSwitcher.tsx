'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const flags = {
    es: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810 540" className="w-6 h-4">
            <rect width="810" height="540" fill="#74acdf" />
            <rect width="810" height="180" y="180" fill="#fff" />
            <path d="M405 270c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z" fill="#f6b40e" />
        </svg>
    ),
    en: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741 390" className="w-6 h-4">
            <rect width="741" height="390" fill="#b22234" />
            <rect width="741" height="30" y="30" fill="#fff" />
            <rect width="741" height="30" y="90" fill="#fff" />
            <rect width="741" height="30" y="150" fill="#fff" />
            <rect width="741" height="30" y="210" fill="#fff" />
            <rect width="741" height="30" y="270" fill="#fff" />
            <rect width="741" height="30" y="330" fill="#fff" />
            <rect width="296.4" height="210" fill="#3c3b6e" />
            <path d="M15 15l2 4h-4z" fill="#fff" transform="scale(0.5)" />
        </svg>
    )
};

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = i18n.language?.split('-')[0] || 'es';

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (lng: 'es' | 'en') => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20 text-white font-medium text-sm"
            >
                <span className="flex items-center space-x-2">
                    {flags[currentLanguage as keyof typeof flags]}
                    <span className="uppercase">{currentLanguage}</span>
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={14} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none z-[110] overflow-hidden"
                    >
                        <div className="py-1">
                            <button
                                onClick={() => changeLanguage('es')}
                                className={`flex items-center space-x-3 w-full px-4 py-3 text-sm transition-colors ${currentLanguage === 'es' ? 'bg-[#bc2222]/10 text-[#bc2222] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {flags.es}
                                <span>ES (ARG)</span>
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex items-center space-x-3 w-full px-4 py-3 text-sm transition-colors ${currentLanguage === 'en' ? 'bg-[#bc2222]/10 text-[#bc2222] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {flags.en}
                                <span>EN (USA)</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
