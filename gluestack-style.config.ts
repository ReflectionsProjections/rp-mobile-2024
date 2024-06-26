import { createConfig } from '@gluestack-style/react';

export const config = createConfig({
  aliases: {
    bg: 'backgroundColor',
    bgColor: 'backgroundColor',
    rounded: 'borderRadius',
    h: 'height',
    w: 'width',
    mt: 'marginTop'
  },
  tokens: {
    colors: {
      primary0: '#ffffff',
      primary400: '#c084fc',
      primary500: '#a855f7',
      primary600: '#9333ea',
    },
    space: {
      3: 12,
      4: 16,
      5: 20,
      6: 24,
    },
    radii: {
      sm: 4,
      md: 6,
      lg: 30
    },
    letterSpacings: {
      md: 0,
    },
    lineHeights: {
      sm: 20,
      md: 22,
    },
    fontWeights: {
      normal: '400',
      medium: '500',
    },
    fontSizes: {
      sm: 14,
      md: 16,
      xl: 40,
    },
    mediaQueries: {
      sm: '@media (min-width: 480px)',
      md: '@media (min-width: 768px)',
    },
  },
  globalStyle: {
    variants: {
      shadow: {
        softShadow: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$primary500',
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
      },
    },
  },
} as const);

type ConfigType = typeof config;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
}