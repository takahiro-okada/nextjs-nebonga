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
      animation: {
        scaleInCenter: 'scaleInCenter 0.5s ease-in-out forwards',
        scaleOutCenter: 'scaleOutCenter 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'here-patter': 'url(/images/bg-sample.jpg)',
      },
      keyframes: {
        scaleInCenter: {
          '0%': { borderRadius: '50%', opacity: '0', transform: 'scale(0)' },
          '100%': { borderRadius: '0%', opacity: '1', transform: 'scale(1)' },
        },
        scaleOutCenter: {
          '0%': { borderRadius: '0%', opacity: '1', transform: 'scale(1)' },
          '100%': { borderRadius: '50%', opacity: '0', transform: 'scale(0)' },
        },
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
    },
  },
}
export default config
