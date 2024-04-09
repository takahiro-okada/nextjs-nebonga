import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      backgroundColor: {
        grayLight: '#F5F6F7',
        grayNormal: '#EDEFF1',
        grayDark: '#BDC4D0',
      },
      borderColor: {
        grayLight: '#F5F6F7',
        grayNormal: '#EDEFF1',
        grayDark: '#BDC4D0',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
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
