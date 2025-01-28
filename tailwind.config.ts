import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ZonaPro: 'var(--font-ZonaPro)',
        Roboto: 'var(--font-Roboto)',
        Inter: 'var(--font-Inter)',
        NunitoSans: 'var(--font-Nunito-Sans)',
      },
      maxWidth: {
        container1920: '120rem',
        container1376: '86rem',
        container1328: '83rem',
        container1056: '66rem',
      },
      colors: {
        'header-desktop-background': 'var(--header-desktop-background)',
        'header-mobile-background': 'var(--header-mobile-background)',
        'header-desktop-icons': 'var(--header-desktop-icons)',
        'header-mobile-icons': 'var(--header-mobile-icons)',
        'button-menu': 'var(--button-menu)',
        primary: {
          70: 'var(--primary-70)',
          80: 'var(--primary-80)',
          90: 'var(--primary-90)',
          100: 'var(--primary-100)',
          110: 'var(--primary-110)',
          120: 'var(--primary-120)',
          130: 'var(--primary-130)',
        },
        secondary: {
          70: 'var(--secondary-70)',
          80: 'var(--secondary-80)',
          90: 'var(--secondary-90)',
          100: 'var(--secondary-100)',
          110: 'var(--secondary-110)',
          120: 'var(--secondary-120)',
          130: 'var(--secondary-130)',
        },
        placeholder: 'var(--placeholder)',
        green: {
          70: 'var(--green-70)',
          90: 'var(--green-90)',
        },
        orange: {
          60: 'var(--orange-60)',
          70: 'var(--orange-70)',
          90: 'var(--orange-90)',
          100: 'var(--orange-100)',
          110: 'var(--orange-110)',
        },
        'slide-inactive-ball': 'var(--slide-inactive-ball)',
        neutral: {
          light: 'var(--neutral-light)',
          60: 'var(--neutral-60)',
          70: 'var(--neutral-70)',
          80: 'var(--neutral-80)',
          90: 'var(--neutral-90)',
          100: 'var(--neutral-100)',
          110: 'var(--neutral-110)',
          120: 'var(--neutral-120)',
          130: 'var(--neutral-130)',
        },
        'success-border-color': 'var(--success-border-color)',
        danger: {
          100: 'var(--danger-100)',
        },
        'error-background-color': 'var(--error-background-color)',
        'error-border-color': 'var(--error-border-color)',
        'theme-blog': {
          'color-70': 'var(--theme-blog-color-70)',
          'color-90': 'var(--theme-blog-color-90)',
          'color-100': 'var(--theme-blog-color-100)',
          'color-110': 'var(--theme-blog-color-110)',
          'secondary-color-60': 'var(--theme-blog-secondary-color-60)',
          'secondary-color-100': 'var(--theme-blog-secondary-color-100)',
          'secondary-color-110': 'var(--theme-blog-secondary-color-110)',
          'secondary-color-140': 'var(--theme-blog-secondary-color-140)',
          'subscribe-circle-color': 'var(--theme-blog-subscribe-circle-color)',
          'search-empty-icon-color':
            'var(--theme-blog-search-empty-icon-color)',
        },
      },
      minWidth: {
        minContainer: '24.375rem',
      },
    },
  },
  plugins: [
    function ({ addComponents, addVariant }: PluginAPI) {
      addComponents({
        '.wrapperContainer': {
          margin: '0 auto',
          width: 'calc(100% - 2rem)',
          '@media(min-width: 1024px)': {
            width: '98%',
          },
          '@media(min-width: 1440px)': {
            width: '100%',
          },
        },
        '.spinner': {
          animation: 'rotation 1s linear infinite',
          '@keyframes rotation': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        },
      })

      addVariant('nth-last-child-2', '&:nth-last-child(2)')
    },
  ],
} satisfies Config
