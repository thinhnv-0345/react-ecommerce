import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { GridContextProvider } from './pages/Grid/grid.context'
import Grid from './pages/Grid/Grid'
import { theme as customTheme } from './styles/theme'

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GridContextProvider>
        <Grid />
      </GridContextProvider>
    </ChakraProvider>
  )
}

export default App
