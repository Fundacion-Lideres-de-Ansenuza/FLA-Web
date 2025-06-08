import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B82F6',
        'accent-pink': '#EC4899',
        'brand-white': '#FFFFFF',
        'text-dark': '#1F2937',
      },
    },
  },
  plugins: [],
}
export default config
