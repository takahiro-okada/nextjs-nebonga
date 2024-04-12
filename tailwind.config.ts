import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        'has-cyan-bluish-gray-color': '#ABB8C3',
        'has-white-color': '#FFFFFF',
        'has-pale-pink-color': '#F78DA7',
        'has-vivid-red-color': '#CF2E2E',
        'has-luminous-vivid-orange-color': '#FF6900',
        'has-luminous-vivid-amber-color': '#FCB900',
        'has-light-green-cyan-color': '#7BDCB5',
        'has-vivid-green-cyan-color': '#00D084',
        'has-pale-cyan-blue-color': '#8ED1FC',
        'has-vivid-cyan-blue-color': '#0693E3',
        'has-vivid-purple-color': '#9B51E0',
      },
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
