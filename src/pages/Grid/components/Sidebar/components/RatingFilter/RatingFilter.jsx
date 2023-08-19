import { Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import RatingFilterItem from './RatingFilterItem'
import GridContext from '../../../../grid.context'

function RatingFilter() {
  const gridCtx = useContext(GridContext)
  return (
    <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
      <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
        RATINGS
      </Text>
      <VStack mt="8px">
        {gridCtx.ratings.map(item => {
          return (
            <RatingFilterItem key={item.rating} rating={item?.rating} quantity={item?.quantity} />
          )
        })}
      </VStack>
    </VStack>
  )
}

export default RatingFilter
