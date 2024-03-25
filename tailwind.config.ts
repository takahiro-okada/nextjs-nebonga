import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      yuGothic: [
        'YuGothic',
        'Yu Gothic',
        '游ゴシック体',
        'YuGothic',
        'ヒラギノ角ゴ ProN',
        'Hiragino Kaku Gothic ProN',
        'メイリオ',
        'Meiryo',
        'sans-serif',
      ],
      Montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      lato: ['var(--font-lato)', 'sans-serif'],
    },
  },
}
export default config
