import { Divider, HStack, Select, SimpleGrid, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ProductCard from './components/ProductCard'
import GridContext from '../../grid.context'
import Pagination from './components/Pagination'

function Content() {
  const gridCtx = useContext(GridContext)
  return (
    <VStack justify="flex-start" gap="0">
      <HStack h="80px" alignSelf="flex-end">
        <Select variant="unstyled" size="xs" defaultValue="feature">
          <option value="feature">Sort by featured</option>
          <option value="price_asc">Price ascending</option>
          <option value="price_desc">Price descending</option>
        </Select>
        <Select variant="unstyled" size="xs" defaultValue="16">
          <option value="16">16 hit per page</option>
          <option value="32">32 hit per page</option>
          <option value="64">64 hit per page</option>
        </Select>
      </HStack>
      <Divider h="1px" bgColor="dark.200" />
      <SimpleGrid columns={4} spacing="20px" flex={1} w="100%" pt="32px">
        {gridCtx &&
          gridCtx?.products?.map(product => {
            return <ProductCard key={product.objectID} product={product} />
          })}
      </SimpleGrid>
      {!gridCtx.isLoading && <Pagination />}
    </VStack>
  )
}

export default Content
