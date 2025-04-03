import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          400: '#60a5fa',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        purple: {
          600: '#9333ea',
        },
      },
    },
  },
  plugins: [],
}

export default config 