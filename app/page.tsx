"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [language, setLanguage] = useState("es");
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <header className="flex justify-between items-center mb-8">
        <div>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {language === "es" ? "en" : "es"}
          </button>
          <div className="flex space-x-2 items-center">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded">
            {theme === "dark" ? t("light") : t("dark")}
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto">
        {/* Frase Representativa */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">
          {t("Representatice Phrase")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        {/* Indicators */}
        <section className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">102</h2>
            <p className="text-gray-600 dark:text-gray-400">Indicador 1</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">2246</h2>
            <p className="text-gray-600 dark:text-gray-400">Indicador 2</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">51</h2>
            <p className="text-gray-600 dark:text-gray-400">Indicador 3</p>
          </div>
        </section>

        {/* Quienes Somos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("About us")}</h2>
          <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        {/* Why we exist */}
        <section className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">{t("Education")}</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">{t("Impact sector")}</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">{t("Organization")}</p>
          </div>
        </section>

        {/* Current Programs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("Current programs")}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">{t("Name")}</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">{t("Name")}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("Testimonials")}</h2>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>

        {/* News */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("News")}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg ">
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2" htmlFor="name">{t("Name")}</label>
                <input type="text" id="name" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">{t("Email")}</label>
                <input type="email" id="email" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block mb-2" htmlFor="subject">{t("Subject")}</label>
                <input type="text" id="subject" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">{t("Message")}</label>
                <textarea id="message" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2" rows={4} />
              </div>
              <div>
                <button className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                {t("Send message")}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="text-center py-4">
        <p className="text-gray-600 dark:text-gray-400">© 2024</p>
      </footer>
    </div>
    
  );
}
