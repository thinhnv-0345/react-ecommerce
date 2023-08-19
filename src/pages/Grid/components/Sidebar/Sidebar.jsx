import { Box, Divider, HStack, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import BrandFilter from './components/BrandFilter'
import PriceFilter from './components/PriceFilter'
import FreeShipFilter from './components/FreeShipFilter'
import RatingFilter from './components/RatingFilter'
import SidebarContext, { SidebarContextProvider } from './sidebar.context'

function Sidebar() {
  const sidebarCCtx = useContext(SidebarContext)
  const handleClearFilterClick = e => {
    sidebarCCtx.setCurrBrands([])
    sidebarCCtx.setCurrCategoryLvl0('')
    sidebarCCtx.setCurrCategoryLvl1('')
    sidebarCCtx.setCurrRangeValue([])
    sidebarCCtx.setRating(0)
    sidebarCCtx.setIsFreeShip(false)
  }
  console.log('render')
  return (
    <SidebarContextProvider>
      <VStack gap="0px">
        <HStack w="100%" h="80px">
          <Heading size="lg" fontSize="24px" fontWeight="500">
            Filters
          </Heading>
          <Spacer />
          <HStack as="button" onClick={handleClearFilterClick}>
            <Box fontSize="10px" color="dark.700">
              <FontAwesomeIcon icon={faRotateRight} />
            </Box>
            <Text fontSize="12px" color="dark.400">
              Clear filters
            </Text>
          </HStack>
        </HStack>
        <Divider h="1px" bgColor="dark.200" />
        <CategoryFilter />
        <Divider h="1px" bgColor="dark.200" />
        <BrandFilter />
        <Divider h="1px" bgColor="dark.200" />
        <PriceFilter />
        <Divider h="1px" bgColor="dark.200" />
        <FreeShipFilter />
        <Divider h="1px" bgColor="dark.200" />
        <RatingFilter />
      </VStack>
    </SidebarContextProvider>
  )
}

export default React.memo(Sidebar)
