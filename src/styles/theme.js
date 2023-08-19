import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      primary: {
        400: '#e2a60080',
        500: '#e2a400',
        600: '#ce9805'
      },
      dark: {
        50: '#21243d0d',
        200: '#21243d33',
        300: '#21243d4d',
        400: '#21243d66',
        500: '#21243d80',
        800: '#21243dcc',
        700: '#21243db3',
        1000: '#21243d'
      },
      darkGray: {
        60: '#4142470f',
        1000: '#414247'
      }
    }
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
