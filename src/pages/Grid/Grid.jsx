import { Box, HStack } from '@chakra-ui/react'
import Header from './components/Header'
// import { SidebarContextProvider } from './components/Sidebar/sidebar.context'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function Grid() {
  return (
    <Box>
      <Header />
      <HStack
        as="main"
        p="32px 16px"
        gap="60px"
        ml={{ base: '0', xl: '100px' }}
        mr={{ base: '0', xl: '100px' }}
      >
        <Box minW="270px">
          {/* <SidebarContextProvider>
          </SidebarContextProvider> */}
          <Sidebar />
        </Box>
        <Box flex={1} alignSelf="stretch">
          <Content />
        </Box>
      </HStack>
    </Box>
  )
}

export default Grid
