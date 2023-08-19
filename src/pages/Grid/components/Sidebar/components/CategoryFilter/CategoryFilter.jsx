import { Accordion, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import CategoryFilterItem from '../CategoryFilterItem'
import GridContext from '../../../../grid.context'

function CategoryFilter() {
  const gridCtx = useContext(GridContext)

  return (
    <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
      <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
        CATEGORY
      </Text>
      <VStack w="100%" alignItems="flex-start">
        <Accordion as="ul" allowToggle w="100%">
          {gridCtx?.categories.map(item => {
            return <CategoryFilterItem key={item.name} item={item} />
          })}
        </Accordion>
      </VStack>
    </VStack>
  )
}

export default CategoryFilter
